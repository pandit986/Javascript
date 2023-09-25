// Function

function sayMyName() {
  console.log("Abhishek Pandit");
}

//sayMyName()

// function addTwoNumber(number1, number2) {//parametrs
//    console.log(number1 + number2);
// }

function addTwoNumber(number1, number2) {
  //parametrs
  return number1 + number2;
}
const result = addTwoNumber(3, 4); //pass the argument

console.log("Result", result);

function loginUserMessage(username = "Sam") {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just Logged In`;
}
//  console.log(loginUserMessage("Abhishek"))
console.log(loginUserMessage());
//if we not pass the value => undefined

// < ----------------------------- >

//shoping card we dont konw how item user add items

// ... is Spread / Rest Operator it depend on Used
function calculateCardPrice(val1, val2, ...num1) {
  //here we used rest operator
  return num1;
}

console.log(calculateCardPrice(200, 400, 500, 1000));

const user = {
  username: "Abhishek Pandit",
  prices: "199",
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.prices}`
  );
}

handleObject(user);

//array handler

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));