// *********************** Function Expressions ***********

// Regular function
function sayHi(){
  console.log("Hi");
};

sayHi();

function callFunction(fun){
  fun();
}

// Function expression
let sayBye = function(){
  console.log("Bye");
};

//sayBye();
callFunction(sayBye);
