const http = require('http');

const servers = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002'
];

let currentIndex = 0;

const handleRequest = (req, res) => {
  const proxy = http.request({
    host: servers[currentIndex],
    port: 80,
    path: req.url,
    method: req.method,
    headers: req.headers
  });

  proxy.on('error', (err) => {
    console.error('Error:', err.message);
    res.writeHead(500);
    res.end();
  });

  req.pipe(proxy).pipe(res);

  currentIndex = (currentIndex + 1) % servers.length;
};

const server = http.createServer(handleRequest);

server.listen(80, () => {
  console.log(`Load balancer running on port ${server.address().port}`);
});
