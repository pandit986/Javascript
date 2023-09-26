//reduce js

const myNums = [1, 2, 3, 4];

// shoping Card Total

// const myTotal = myNums.reduce(function (acc, currentValue) {
//   console.log(`acc: ${acc} and CurrentValue ${currentValue}`);
//   return acc + currentValue;
// }, 0);

// console.log(myTotal);

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 999,
  },
  {
    itemName: "c++ course",
    price: 499,
  },
  {
    itemName: "DataScience course",
    price: "1999",
  },
];

const myTotal = shoppingCart.reduce((acc, item) => acc + Number(item.price), 0);

console.log(myTotal);
