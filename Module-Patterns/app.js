//********************** MODULES AND REQUIRE *********************

//Require function(path to the module)
let stuff = require('./stuff'); // Return and store in variable

console.log(stuff.counter(['kate', 'orla', 'marry']));
console.log(stuff.adder(5,6));//adder
console.log(stuff.adder(stuff.pi,5));//adder
