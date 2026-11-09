let price = 1_500_000;
let quantity = 4;
let discount = 0.3;

const totalPrice = price * quantity;
const discountAmount = totalPrice * discount;
const finalPrice = totalPrice - discountAmount;

console.log(`Total Price: ${totalPrice}`);
console.log(`Discount Amount : ${discountAmount}`);
console.log(`Final Price : ${finalPrice}`);
