// create shoopingCart object and doing calculation

const shoopingCart = {
  customerId: 514,
  customerName: "Dio",
  items: [
    {
      productId: 34,
      productName: "MacBook Pro M5",
      price: 15_000_000,
      quantity: 1,
    },
    {
      productId: 102,
      productName: "Printer 3D",
      price: 9_000_000,
      quantity: 1,
    },
    {
      productId: 284,
      productName: "GPU RTX 5090",
      price: 57_000_000,
      quantity: 1,
    },
  ],
};

// print customer name
console.log(shoopingCart.customerName);

// print shooping item using loops
shoopingCart.items.forEach((item) => {
  console.log(`ID : ${item.productId}`);
  console.log(`Name : ${item.productName}`);
  console.log(`Price: ${item.price}`);
  console.log(`Qty: ${item.quantity}`);
});

// calculate total price inside cart
const totalPrice = shoopingCart.items.reduce((sum, currentItem) => {
  return sum + currentItem.price;
}, 0);
console.log(`Total Price: Rp.${totalPrice}`);

// create item object
const newItem = {
  productId: 106,
  productName: "Samsung Galaxy Fold",
  price: 25_000_000,
  quantity: 1,
};

// add new item object to shoopingCart items array
shoopingCart.items.push(newItem);

// verified if items succesfuly added
shoopingCart.items.forEach((item) => {
  console.log(`ID : ${item.productId}`);
  console.log(`Name : ${item.productName}`);
  console.log(`Price: ${item.price}`);
  console.log(`Qty: ${item.quantity}`);
});
