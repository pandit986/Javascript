let score = "33" 
let score1 = "33abc"
let score2 = null


console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); 

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1); // NaN not a number

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2); // 0

// "33" => 33 
// "33abc" => NaN
// true => 1
// null => 0
// undefine => NaN

let isLoggedIn = "defwf"
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// "" =>  -> false
// "chwiufhw" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);