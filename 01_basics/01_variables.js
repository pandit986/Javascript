const accountId = 9866888
let accountEmail = "abhishekpandit986@gmail.com"
var accountPassword = "1234567"
accountCity = "Jaipur" // Not good Pratice //global scope
let accountState;
// accountId = 4  // not allowed 
// prefer not to use var 
//let have a block scope 

accountEmail = "abc@gmail.com"
accountPassword = "111122222"
accountCity = "Delhi"
accountPassword = "1234567"

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])


{
    console.log(accountCity);
}


var a = 10 
const b = 11 
let c = 122

const printing = () => {
    console.log(a)
    console.log(b)
    console.log(c)
}

// printing()

// for (let index = 0; index < 1; index++) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     var i = index
//     const k = index
    
// }

// console.log(i)
// console.log(k);

{
    let ans = 11
    const printing = () => {
        console.log(ans)
        
    }
    
    printing()
}