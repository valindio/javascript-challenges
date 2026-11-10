// object method

const user = {
  firstName: "Dio",
  lastName: "Ven",
  age: 20,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getAge() {
    return this.age;
  },
  greeting: () => {
    return `Hello my ${this.firstName} i'm ${this.age} year old`;
  },
};

console.log(user.getFullName());
console.log(user.getAge());
console.log(user.greeting()); // this is will return undefined because using arrow function inside object
