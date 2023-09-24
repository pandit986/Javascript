//singleton object

const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "abc@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Abhishek",
      lastname: "Pandit",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);

// if the value is their then do ?
// ? => protection

//object combining
const obj1 = {
  1: "a",
};

const obj2 = {
  2: "b",
};

//const objCombine = { obj1, obj2 }; //object ka andar object

const objCombine = { ...obj1, ...obj2 };

console.log(objCombine);

const users = [
  {
    id: 1,
    email: "abc@gmail.com",
  },
  {
    id: 2,
    email: "hk@gmail.com",
  },
];

console.log(users[0].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

