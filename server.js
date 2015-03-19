
var http = require('http');
var port = process.env.OPENSHIFT_NODEJS_PORT;
var ip = process.env.OPENSHIFT_NODEJS_IP;
var app=http.createServer(function (req, res) {
//creates server
res.writeHead(200, {'Content-Type': 'text/plain'});
//sets the right header and status code
res.end('Hello World\n');
//outputs string with line end symbol
}).listen(port, ip);
