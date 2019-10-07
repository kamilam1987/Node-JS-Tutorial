let counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

// Function that adds two numbers
let adder = function(a, b){
  return `The sum of the 2 numbers is ${a + b}`;//Template string
};

let pi = 3.142;

//module.exports.counter = counter;
//module.exports.adder = adder;
//module.exports.pi = adder;

module.exports = {
  counter : counter,
  adder : adder,
  pi : pi
};
