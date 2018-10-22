var http = require('http');

var default_port = 5000;

if (process.env.APP_PORT) {
    default_port = process.env.APP_PORT;
}


var server = http.createServer(function (req, res) {
   res.end('hello world, i am your node app port '+default_port);
});

server.listen(default_port, function () {
   console.log('server listening on port '+default_port);
});