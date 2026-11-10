const laptop = {
  brand: "Acer",
  ram: "8GB",
  storage: "1TB",
};

for (const key in laptop) {
  const element = laptop[key];
  console.log(`${key}: ${element} `);
}
