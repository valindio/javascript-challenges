// summing all number inside array

const numberArr = [1, 55, 2, 66, 212, 7, 88];

const sum = numberArr.reduce((total, number) => {
  return (total = total + number);
}, 0);

console.log(sum);
