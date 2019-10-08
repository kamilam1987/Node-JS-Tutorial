// *********************** Reading & Writing Files (fs) ****************
let fs = require('fs');
//************** Synchronous method *******
// Read a file
//let readMe = fs.readFileSync('readMe.txt', 'utf8');
//console.log(readMe);

// Write a file
//fs.writeFileSync('writeMe.txt', readMe);

//************** Asynchronous method *******
fs.readFile('readMe.txt', 'utf8', function(err, data){
  console.log(data);
  fs.writeFile("temp.txt", data, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
});

  console.log('test');// Fire this first while is reading a file
