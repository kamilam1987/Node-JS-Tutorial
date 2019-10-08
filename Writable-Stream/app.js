let fs = require('fs');
let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function(chunk){
  console.log('New chunk received:');
  //console.log(chunk);
  myWriteStream.write(chunk);
});//Listen event
