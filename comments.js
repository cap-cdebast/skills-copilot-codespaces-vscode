// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');

// Create http server
const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  if (path === '/comments') {
    res.setHeader('Content-Type', 'application/json');
    fs.createReadStream('./comments.json').pipe(res);
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000);