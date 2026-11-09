// nested loop

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let y = 1; y <= i; y++) {
    row += "*";
  }
  console.log(row);
}
