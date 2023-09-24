const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(typeof balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 23.49688

console.log(otherNumber.toPrecision(2));

const hundres = 100000000
console.log(hundres.toLocaleString('en-IN'));

let maxNumber = Number.MAX_VALUE
let minNumber = Number.MIN_VALUE


console.table([maxNumber,minNumber]);

// ++++++++++++ Maths ++++++++++++++

console.log(Math);
// console.log(Math.abs(-4)); // neg to positive
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(4));
// console.log(Math.min(4,8,9,2,3));
// console.log(Math.max(4,5,6,9,10));

console.log(Math.random()); // 0 to 1

console.log(Math.floor(Math.random()*10)+ 1);
//value may be a 0 
//for avoiding we + 1 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min) + 1 )+ min);