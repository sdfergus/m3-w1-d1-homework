var http = require('http');

var hostname = 'localhost';
var port = 5000;

var server = http.createServer((req, res) => {
    // console.log('req.headers: ', req.headers);
    var urlRequest = req.url;

    if(req.method === 'GET') {
        if(urlRequest === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Home Page.</h1></body></html>');
        } else if(urlRequest === '/about') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>About Page.</h1></body></html>');
        } else if(urlRequest === '/contact') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Contact Page.</h1></body></html>');            
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Invalid Request!</h1></body></html>');
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`The NodeJS server on port ${port} is now running...`);
});