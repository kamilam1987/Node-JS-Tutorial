// ********************** CREATE A SERVER *************

let http = require('http');
let server = http.createServer(function(req, res){
console.log('Request was made: ' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/plain'});//Response header
  res.end('Hello!');
});

server.listen(3000, '127.0.0.1');//port number and ip address
console.log('Listening on port 3000...');
