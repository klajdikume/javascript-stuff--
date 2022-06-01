const http = require('http');
const url = require('url');
const jsonBody = require('body/json');

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