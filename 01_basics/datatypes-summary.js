//  Primitive
// call by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
// call by reference 
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//stack and Heap Memory
//Stack is primative type

let myName = "Abhishek"
let anotherName = myName
//here copy create huya
anotherName = "Pandit"
console.log(myName);
console.log(anotherName);


//Heap is Non Primitive Type

let userOne = {
    email:"abhishekpandit986@gmail.com",
    upi:"8104892085@ybl"
}

let userTwo = userOne
//here refference is create
//what ever changes you performe that will reflect on original value

userTwo.email = "abhishekpandit986@google.com"
console.log(userOne);
console.log(userTwo);

// Shallow Copy stores the references of objects to the original memory address
// Deep copy stores copies of the object's value