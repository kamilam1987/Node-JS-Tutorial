console.log('hey ninjas');

// ******************* GLOBAL OBJECTS ********************//
//Tells directory
console.log(__dirname);

//Tells file names
console.log(__filename);

// Output message after 3 seconds
setTimeout(function(){
  console.log('3 seconds have passed')
}, 3000);

var time = 0;

// Update time every 2 seconds
var timer = setInterval(function(){
  time += 2;
  if(time > 5){
    clearInterval(timer);
  }
  console.log(time + ' seconds have passed')
}, 2000);

// // ******************* GLOBAL OBJECTS END ********************//
