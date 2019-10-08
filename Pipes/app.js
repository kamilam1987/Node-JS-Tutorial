// ************************* PIPES *******************************
let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res){//Create server with request and res -response is writable stream
console.log('Request was made: ' + req.url);
  res.writeHead(200, {'Content-Type' : 'text/plain'});//Response header
  let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');//Reads content of a file
  myReadStream.pipe(res);//Takes read streams and pipes to a response
});

server.listen(3000, '127.0.0.1');//port number and ip address
console.log('Listening on port 3000...');
