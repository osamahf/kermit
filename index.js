

var http = require('http');
//loads http module
var app=http.createServer(function (req, res) {
//creates server
res.writeHead(200, {'Content-Type': 'text/plain'});
//sets the right header and status code
res.end('Hello World\n');
//outputs string with line end symbol
});
var port = process.env.OPENSHIFT_NODEJS_PORT;
app.listen(port, function() {
console.log("Listening on " + port);
});
