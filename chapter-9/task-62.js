// find index a given value using Array.findIndex method

const animals = ["Cat", "Dog", "Lion", "Tiger"];

const indexResult = animals.findIndex((animal) => {
  return animal === "Dog";
});

console.log(indexResult); // return 1
