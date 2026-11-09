// factorial

const factorial = (a) => {
  let sum = 1;

  // using for loop
  //   for (let i = a; i >= 1; i--) {
  //     sum *= i;
  //   }

  //using while loop
  while (a >= 1) {
    sum *= a;
    a--;
  }

  return sum;
};

const result = factorial(5);
console.log(result);
