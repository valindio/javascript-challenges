// nested object

const user = {
  name: "Dio",
  age: 20,
  family: {
    name: "Budi",
    age: 50,
    job: "Teacher",
  },
};

// access nested properties
console.log(user.family.job);
