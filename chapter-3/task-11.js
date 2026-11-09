const name = "Dio";
const age = 20;
const isDeveloper = true;
const salary = 10_000_000n;
const address = null;
const email = undefined;
const symboltype = Symbol("Symbol")

// Output the variable type to stdout
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isDeveloper); // boolean
console.log(typeof salary); // bigint 
console.log(typeof address); // null
console.log(typeof email); // undefined
console.log(typeof symboltype) // symbol