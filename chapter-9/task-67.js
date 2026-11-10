const expenses = [5000, 10000, 15000, 20000, 25000];

const filterResult = expenses.filter((exp) => {
  return exp >= 10000;
});

const totalExpense = expenses.reduce((sum, currentExp) => {
  return sum + currentExp;
});

const avgExpense = totalExpense / expenses.length;

const newExpenses = expenses.map((exp) => {
  return exp + exp * 0.1;
});

console.log(filterResult);
console.log(totalExpense);
console.log(avgExpense);
console.log(newExpenses);
