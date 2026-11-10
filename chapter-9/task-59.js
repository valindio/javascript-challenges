// manipulate item inside array and return new array using Array.map method

const numbers = [2, 7, 8, 2, 5];

// multiply each item by 2 and return it
const result = numbers.map((number) => {
  return number * 2;
});

console.log(result); // [4, 14, 16, 4, 10]
