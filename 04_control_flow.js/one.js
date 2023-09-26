// if
const isUserloggedIn = true;

// if (isUserloggedIn) {
//   console.log("Hii");
// }

// < , > , <== , == , != ,===

const temperature = 41;

// if (temperature < 50) {
//   console.log("temperature less than 50");
// } else {
//   console.log("temperature greater than 50");
// }

const score = 200;

// if (score > 110) {
//   const power = "fly";
//   console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);

//shot hand notes
const balance = 1000;

// if (balance > 500) console.log("test");

// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("balance less than 750");
// } else {
//   console.log("balance less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoggle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("Allow to buy Courses");
}

if (loggedInFromEmail || loggedInFromGoggle) {
  console.log("user logged in ");
}
