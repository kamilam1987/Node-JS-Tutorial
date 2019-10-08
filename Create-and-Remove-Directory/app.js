// *********************** Create & Remove Directory (fs) ****************
let fs = require('fs');

//Delete file
const path = './temp.txt'

fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
    return
  }

  //file removed
})
//Create a new directory
//fs.mkdirSync('stuff');
//Remove a new directory
//fs.rmdirSync('stuff');

/*
fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile("./stuff/temp.txt", data, (err) => {
      if (err) console.log(err);
      console.log("Successfully Written to File.");
    });
  });
});
*/
fs.unlink('./stuff/temp.txt', (err) =>{
  if (err) {
    console.log(err);
    return
  }

});
