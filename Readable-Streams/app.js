let fs = require('fs');
let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
  console.log('New chunk received:');
  console.log(chunk);

});//Listen event
