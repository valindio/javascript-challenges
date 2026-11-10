// splice() and slice() method, both return a new array

const fruits = ["Apel", "Pisang", "Jeruk", "Mangga"];

const sliceResult = fruits.slice(1, 3); // start at index 1 and end at index 3 (index 3 not included)
const spliceResult = fruits.splice(1, 3);

console.log(sliceResult); // ['Pisang', 'Jeruk']
console.log(spliceResult); // ['Pisang', 'Jeruk', 'Mangga']
