// filter item inside array and return item that fullfiel condition inside callback

const numbers = [12, 17, 20, 25, 15, 30];

// return items if greater than 18
const filterResult = numbers.filter((number) => {
  return number >= 18;
});

console.log(filterResult); // [20, 25, 30]

// return if items is even
const filterResult2 = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(filterResult2); // [12, 20, 30]
