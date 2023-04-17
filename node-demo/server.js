const http = require('http');
const url = require('url');
const jsonBody = require('body/json');
const { Pool, Client } = require('pg');
const connectionString = 'postgresql://postgres:admin@localhost:5432/gamma';
 
const server = http.createServer();

server.on('request', (req, res) => {
   // console.log('this is an incoming request');
   const parsedUrl = url.parse(req.url, true);
   console.log(parsedUrl.pathname)
   if (req.method === 'GET' && parsedUrl.pathname === '/metadata') {
       const { id } = parsedUrl.query;
       console.log(req.headers);
       console.log(id);
   } else if (req.method === 'POST' && parsedUrl.pathname === '/users'){
    jsonBody(request, response, (err, body) => {
        if(err) {
            console.log(err);
        } else {
            console.log(body['userName']);
        }
    })
   } else {
       res.statusCode = 404;
       res.setHeader('X-Powered-By', 'Node');
       res.end();
   }

});

server.listen(8070);

// event driven runtime
// build in event emitter runtime
// EventEmitters
// Worker Threads
// 


// optimistic
// use version number of the raw
// if version number has changed raise error because another transaction has made changes

async function updateAccountBalance(id, amount){
    const client = new Client({ connectionString });
    await client.connect();

    try {
        await client.query('BEGIN');

        const { rows: [account] } = await client.query('SELECT balance, version FROM account WHERE id = $1', [id]);

        //Update the balance and version number
        const newBalance = parseInt(account.balance) + parseInt(amount);
        const newVersion = parseInt(account.version) + 1;

        // Update the account balance, but only if the version number has not changed
        const { rowCount } = await client.query('UPDATE account SET balance = $1, version = $2 WHERE id = $3 AND version = $4',
            [newBalance, newVersion, id, account.version]
        );

        if (rowCount === 0) {
            throw new Error('Concurrency error: account was modified by another transaction');
        }

        await client.query('COMMIT');

    } catch (err) {
        await client.query('ROLLBACK');
        throw err;
    } finally {
        await client.end();
    }
}

// updateAccountBalance(1, 20);

// pesimistic
// 1. When transaction starts, acquire a lock on the data being modified. [row-level to lock a single row, table-level lock to lock entire table]
// 2. Perform the transaction, release lock when transaction is performed
// 3. If another transaction tries to access the locked data while the lock is held, it will be blocked until the lock is released.
 
async function updateAccountBalancePesimistic(id, amount){
    const client = new Client({ connectionString });
    await client.connect();

    try {
        await client.query('BEGIN');

        // Acquire a row-level lock on the account
        await client.query('SELECT * FROM account WHERE id = $1 FOR UPDATE', [id]);

        // Retrieve the current balance
        const { rows: [account] } = await client.query('SELECT balance FROM account WHERE id = $1', [id]);

        // Update the balance
        const newBalance = parseInt(account.balance) + parseInt(amount);

        // Update the account balance
        await client.query('UPDATE account SET balance = $1 WHERE id = $2', [newBalance, id]);

        await client.query('COMMIT');
    } catch(err){
        await client.query('ROLLBACK');
        throw err;
    } finally {
        await client.end();
    }
}

updateAccountBalancePesimistic(2, 20)