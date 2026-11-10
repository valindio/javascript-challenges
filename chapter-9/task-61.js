// find first item inside an array that meet the condition

const numbers = [5, 12, 18, 25, 30];

const findResult = numbers.find((number) => {
  return number > 20;
});

console.log(findResult); // return 25, because that first item greater than 20 inside an array
