// calculate total using Array.reduce method, assume an array of numbers

const numbers = [12, 56, 2, 557, 241, 331, 12, 88, 29];

const totalResult = numbers.reduce((sum, currentNum) => {
  return sum + currentNum;
}, 0);

console.log(totalResult); // 1328
