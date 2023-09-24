//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); //object

let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate.toDateString());

let anotherMyCreateDate = new Date(2023,0,23,5,3)
console.log(anotherMyCreateDate.toLocaleString());

let anotherMyCreateDate1 = new Date("01-14-2023")
console.log(anotherMyCreateDate1.toLocaleString());

//Time Stamp
let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(anotherMyCreateDate1.getTime())

console.log(Math.floor(Date.now()/1000)) //in seconds

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth() + 1) // 0 jan

newDate.toLocaleString('default',{
    weekday:"long"
})
//format customization 