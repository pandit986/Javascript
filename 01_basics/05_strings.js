const name = "abhishek"
const repoCount = 50

console.log(name + repoCount + "value"); // old

console.log(`Hello my name is ${name} and my repo count is {repoCount}`); //String interpolation

const gameName = new String("Abhishek Pandit")
//object craion of String calling a constructor

console.log(gameName);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("A"));

//part me break karo string
let repoName = "Abhishek-pandit"

const newString = repoName.substring(0,4)
console.log(newString);

const anotherString = repoName.slice(0,7)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne.trim());


const url = "https://abhishek%20pandit.com"

let newUrl = url.replace('%20','-')

console.log(newUrl);

console.log(url.includes("abhishek"));

console.log(url.split("abhi")); 
//convert in array base on .