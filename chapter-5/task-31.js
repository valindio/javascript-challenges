// ATM Withdrawal

let balance = 500_000;
let withdrawal = 300_000;

console.log(`Initial Balance: ${balance}`);

if (withdrawal <= 0) {
  console.log("Invalid withdrawal amount");
} else if (withdrawal > balance) {
  console.log("Insufficient balance");
} else {
  balance -= withdrawal;
  console.log(`Current Balance: ${balance}`);
}
