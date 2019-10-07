// *********************** Reading & Writing Files (fs) ****************
let fs = require('fs');
//************** Synchronous method *******
// Read a file
let readMe = fs.readFileSync('readMe.txt', 'utf8');
console.log(readMe);

// Write a file
fs.writeFileSync('writeMe.txt', readMe);

//************** Asynchronous method *******
//fs.readFile('readMe.txt', 'utf8', function(err, data){
  //fs.writeFile('writeMe.txt', data);
//});

  console.log('test');// Fire this first while is reading a file
