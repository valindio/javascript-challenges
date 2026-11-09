// function default parameter

function sayHello(name = "Guest") {
  return `Hello ${name}, good morning`;
}

const result = sayHello();
console.log(result); // Hello Guest, good morning
const result2 = sayHello("Dio");
console.log(result2); // Hello Dio, good morning
