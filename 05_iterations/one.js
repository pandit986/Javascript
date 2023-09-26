// for

for (let index = 0; index <= 10; index++) {
  if (index == 5) {
    // console.log("5 is best number");
  }
  //   console.log(index);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`outer loop ${i}`);
  for (let k = 1; k <= 10; k++) {
    // console.log(`inner loop ${k} `);
    console.log(`${i} * ${k} = ${i * k}`);
  }
}

let myArray = ["flash", "batman", "superman"];


//break and continue

for (let index = 1; index < 20; index++) {
    if(index == 5){
        // break
        console.log("Detected 5");
        continue
        //like we play game continue the game
    }
   console.log(`value of i is ${index}`);
    
}