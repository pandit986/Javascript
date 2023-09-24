// array
//collection of multiple items in single variables
//mix collection types
const myArr = [0,1,2,3,4,5,6,7]

// console.log(myArr[0]);

//when ever we do copy 
//it will do Shallow copy
//it mean it will Store Refference
const anotherArr = myArr;
anotherArr[0] = 1;
// console.log(myArr)
// console.log(anotherArr);


//Deep Copy => properties do not share the same references

const myHeors = ["shaktiman","naagraj"]

const myArr2 = new Array(0,1,2,3,4)

// Array Methods

// myArr.push(6)
// myArr.pop()
console.log(myArr);
myArr.unshift(10)
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(1));

console.log( myArr.join());

// slice, splice
console.log("A",myArr2);

const myn1 = myArr2.slice(1,3) //return new array
console.log(myn1);
console.log("B",myArr2);

//splice
const myn2 = myArr2.splice(1,3)
console.log(myn2)
console.log("c",myArr2);
//it will manupulate in original array
//change the original array