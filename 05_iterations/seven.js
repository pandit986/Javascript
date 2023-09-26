const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Every Time Return
// const newNums = myNumbers.map((item) => {
//   return item + 10;
// });

// console.log(newNums);

//chaining
const newnumbs1 = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num>=40);
console.log(newnumbs1);

