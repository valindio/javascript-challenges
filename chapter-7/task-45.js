// return maximum of given number parameter

function returnMaxNumber() {
  let maxNumber = arguments[0];

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxNumber) {
      maxNumber = arguments[i];
    }
  }

  return maxNumber;
}

// simple form
function findMax(...args) {
  return Math.max(...args);
}

const maxNumber = returnMaxNumber(25, 100, 40);
console.log(maxNumber); // 40

const maxNumber2 = findMax(45, 24, 67, 22, 105, 18, 91, 28, 99);
console.log(maxNumber2); // 105
