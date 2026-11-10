// sorting the array using Array.sort method

let numbers = [24, 56, 12, 78, 22];

// becareful of sorting a number
numbers.sort();
console.log(numbers);

// recommended way
numbers.sort((a, b) => {
  return a - b; // acsd
});
console.log(numbers);

numbers.sort((a, b) => {
  return b - a; // Decs
});
console.log(numbers);
