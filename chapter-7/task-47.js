// calculator

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  return b === 0 ? "Cannot divide with 0" : a / b; // using ternary operator
};

console.log(add(2, 5));
console.log(subtract(5, 4));
console.log(multiply(5, 9));
console.log(divide(10, 2));
console.log(divide(10, 0)); // return "Cannot divide with 0"
