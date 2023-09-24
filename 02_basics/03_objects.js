// Object
//declation in two way constructor or literal
//Singleton made by constructor

//object literal

const mySym = Symbol("key1");

const jsUser = {
  name: "Abhishek",
  "full name": "Abhishek Pandit",
  age: 22,
  location: "Mumbai",
  email: "abhishekpandit986@gmail.com",
  lastLoginDays: ["Monday", "Saturday"],
  isLoggedIn: false,
  [mySym]: "key1",
};
//[ ] if you have to define in symbol
console.log(jsUser.email);
console.log(jsUser["email"]); //good
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

// Object.freeze(jsUser) // lock the object
jsUser.email = "abhishekpandit@google.com";

console.log(jsUser);

jsUser.greeting = function () {
  console.log(`Hello Js User ${this["full name"]}`);
};

console.log(jsUser.greeting); //we get the function it is not executed

console.log(jsUser.greeting()); //function is executed
