const http = require('http');

const data = JSON.stringify({
    userName: 'erikmiko'
});

const options = {
    hostname: 'localhost',
    port: 8080,
    path: '/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const request = http.request(options,
    (response) => {
        console.log(`statusCode: ${response.statusCode}`);
        console.log(`${response.headers}`);

        response.on('data', (chunk) => {
            console.log('This is a chunk: \n');
            console.log(chunk.toString());
        });
    });

request.on('error', (err) => {
    console.log(err);
});

request.write(data)

request.end();