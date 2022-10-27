var http = require('http');

var hostname = 'localhost';
var port = 5000;

var server = http.createServer((req, res) => {
    console.log('req.headers: ', req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Home Page.</h1></body></html>');
});

server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port ${port} is now running...`);
});