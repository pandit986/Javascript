// for of

//["","",""]

const arr = [1,2,3,4,5,6,7]

for (const i of arr) {
    // console.log(i);
    
}

const greeting = "hello world"

for (const greet of greeting) {
    // console.log(greet);
}

//Maps
//Maps is object key-value pairs 
//no duplicate 
const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("FA","France")
// map.set("IN","Bharat")
console.log(map);

for (const [key,value] of map) {
    // console.log(key,"--",value);
    
}

//object
//for of not iterable in object
// const myObject = {
//     game1:"NFS",
//     game2:"Spiderman"
// }
// for (const [key,value] of myObject) {
//     console.log(key,"--",value);
    
// }