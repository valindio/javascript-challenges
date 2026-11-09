// even and odd number using if else

const number = 5;

// in this check using "===" because % return number, if check 0 to false
// we want even evaluate first for clarity, if not, delete "===" to check odd first
if (number % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is Odd");
}
