// ************************* PIPES *******************************
let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res){//Create server with request and res -response is writable stream
console.log('Request was made: ' + req.url);
  res.writeHead(200, {'Content-Type' : 'application/JSON'});//Response header

  let myObj = {
    name : 'James',
    job : 'Ninja',
    age : 29
  };
  res.end(JSON.stringify(myObj));//Send data back to the client
});

server.listen(3000, '127.0.0.1');//port number and ip address
console.log('Listening on port 3000...');
