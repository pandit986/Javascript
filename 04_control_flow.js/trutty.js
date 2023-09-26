// const userEmail = "abhi@gmail.com";
const userEmail = "";

if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Dont Have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", "false", " ", [], {}, function(){},

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("empty Oject");
}

// Nullish Coalescing Operator (??): null undefined
// mostly used in DB call and APi call
// if you get null or undefine response

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;
console.log(val1);

// Terniary Operator

//condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
