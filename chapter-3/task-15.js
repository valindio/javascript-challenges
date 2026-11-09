// Array

const programmingLanguage = ["Java", "Python", "Rust", "Go", "Javascript"];

// Array index start with 0
const firstIndex = programmingLanguage[0];
const thirdIndex = programmingLanguage[2];

console.log(firstIndex); // Java
console.log(thirdIndex); // Rust

programmingLanguage[1] = "C++" // ["Java", "C++", "Rust", "Go", "Javascript"]

programmingLanguage.push("C#") // add new data to end of array

console.log(programmingLanguage) // ['Java', 'C++', 'Rust', 'Go', 'Javascript', 'C#']