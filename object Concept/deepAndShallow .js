// let x = 3
// y = x // x is copied into y
// y++ // y is incremented
// console.log(y) // now 4
// console.log(x) // still 3

// Deep copy of object

const user = {
  name: "Kingsley",
  age: 28,
  job: "Web Developer",
  increment: function () {
    console.log(this.age);
  },
};
let clone = JSON.parse(JSON.stringify(user));

console.log(clone);
console.log(user.increment());


//it has one con that not able to clone the function 
