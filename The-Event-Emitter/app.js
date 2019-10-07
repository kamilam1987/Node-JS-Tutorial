//********************** The Node Event Emitter *********************

/*
let events = require('events'); //Event emitter
let myEmitter = new events.EventEmitter(); //Event emitter object

myEmitter.on('someEvent', function(message){
  console.log(message);
});

//Emit the event
myEmitter.emit('someEvent', 'The event was emitted'); //First argument is the event to emit, and whatever is passed in a function)
*/

// Utilities module
let events = require('events'); //Event emitter
let util = require('util');

let Person = function(name){//Object constructor
  this.name = name;
};

util.inherits(Person, events.EventEmitter) ;//Pass object constructor that we want to inherit something

let firstPerson = new Person('James');
let secondPerson = new Person('Mary');
let thirdPerson = new Person('Pat');
let people = [firstPerson, secondPerson, thirdPerson];

people.forEach(function(person){
  person.on('speak', function(message){
    console.log(person.name + ' said: ' + message);
  });
});

firstPerson.emit('speak', 'hey dudes');
secondPerson.emit('speak', 'I want a burger');
