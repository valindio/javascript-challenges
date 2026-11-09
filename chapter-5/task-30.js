// Discount calculator

const totalPurchase = 800_000;
const isMember = true;

if (totalPurchase >= 1_000_000 && isMember === true) {
  const finalPrice = totalPurchase - totalPurchase * 0.2;
  console.log(finalPrice);
} else if (totalPurchase >= 1_000_000) {
  const finalPrice = totalPurchase - totalPurchase * 0.1;
  console.log(finalPrice);
} else {
  console.log(totalPurchase);
}

switch (isMember) {
  case true:
    if (totalPurchase >= 1_000_000) {
      console.log(totalPurchase - totalPurchase * 0.2);
      break;
    }
    console.log(totalPurchase);
    break;
  case false:
    if (totalPurchase >= 1_000_000) {
      console.log(totalPurchase - totalPurchase * 0.1);
      break;
    }
    console.log(totalPurchase);
    break;
}
