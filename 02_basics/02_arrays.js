let marvel_heros = ["thor","Ironman","spiderman"]

let dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) //array ka andar array

// console.log(marvel_heros[3][0]); // not recommend

//concat
let allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

//spread operator
//example think marvel_heros is glass of elements
//you drop that element it will spread

const allNewHeros = [...marvel_heros,...dc_heros]
console.log(allNewHeros)

const another_array = [1,2,3,4,5,6,7,8,[10,12,23],[45,5]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

let string = "Abhishek"
console.log(string.split(""))
console.log(Array.from(string));

console.log(Array.from({name:"Pandit"}))//interesing

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));