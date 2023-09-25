//this current context reffer karta hai

const user = {
  username: "Abhishek Pandit",
  price: "999",
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Aarti";
// user.welcomeMessage();

console.log(this); // empty object

//In Browser Window is Global Object

// function chai() {
//   let username = "Abhishek";
//   console.log(this.username);
// }

// chai();  // undefined

const chai = () => {
  let username = "Abhishek";
  //   console.log(this.username); // undefined
  console.log(this); // empty Object
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2; 
const addTwo = (num1, num2) => num1 + num2; 

console.log(addTwo(10, 85));


const myArray = [5,6,9,10,8,9,6,9,94]

