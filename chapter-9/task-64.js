// check item inside a array that meet condition using some() and every()
// both method return boolean (true | false)

const numbers = [2, 4, 6, 9];

// check at least one item meet condition
const someResult = numbers.some((num) => {
  return num % 2 !== 0;
});

// check all item must meet condition
const everyResult = numbers.every((num) => {
  return num % 2 === 0;
});

console.log(someResult); // true, 2, 4, 6 meet a condition
console.log(everyResult); // false, because 9 not meet condition
