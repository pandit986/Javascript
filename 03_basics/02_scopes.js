// Scope
// var mostly avoid
// { } it is  scope in if else, for

//global Scope

//when you declare variable in global scope it can easely access in Block Scope

let myResult = 300;
if (true) {
  let myResult = 10;
  const rollNo = 20;
  var course = 30;
  //this is a Block Scope

  console.log("INNER", myResult);
}

console.log(myResult);
//console.log(rollNo);
console.log(course);

function one() {
  const username = "Abhishek";

  function two() {
    const website = "youtube";
    console.log(username);
    //chiels function alway acess the parent function
  }
  //   console.log(website);
  two();
}

one();

if (true) {
  const username = "Ravi";
  if (username == "Ravi") {
    const website = "Youtube";
    console.log(`${username} ${website}`);
  }
  //   console.log(website);
}

// ++++++++++++++++++++ interesting ++++++++++++
console.log(addone(5));
function addone(num) {
  return num + 1;
}

//addTwo();//not access
const addTwo = function (num) {
  return num + 2;
};
