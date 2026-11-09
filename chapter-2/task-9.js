// Bank Transfer Simulation

let balance = 2_000_000;

const firstDeposit = 500_000;
const withdraw = 300_000;
const secondDeposit = 200_000;

console.log(`Initial Balance : ${balance} Rupiah`)

balance += firstDeposit; // 2_500_000
balance -= withdraw; // 2_200_000
balance += secondDeposit; // 2_400_000

console.log(`Current Balance : ${balance} Rupiah`)