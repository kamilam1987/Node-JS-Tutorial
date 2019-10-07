console.log("Hello world!");

// ********************* THE GLOBAL OBJECT ********************
// Sets time out to 2 seconds
let time = 0;

setTimeout(function(){
  time += 2;
  console.log("Time out");
  console.log(time + " seconds have passed");
}, 2000);

// Updates every 2 seconds
let timInterval = 0;

let timer = setInterval(function(){
  timInterval += 2;
  console.log("Interval");
  console.log(timInterval + " seconds have passed");
  if(timInterval > 5){
    clearInterval(timer);
  }
}, 2000);

// Navigate to directory
console.log(__dirname);

// Navigate to file name
console.log(__filename);
