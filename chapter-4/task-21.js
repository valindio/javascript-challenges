let age = 16;
let canTakeTest = false;
let canHaveLicense;
let isActiveStudent;
let haveStudentCard = true;

canHaveLicense = age > 18 && canTakeTest; // false
console.log(canHaveLicense);

age = 18;
canTakeTest = true;

canHaveLicense = age >= 18 && canTakeTest; // true
console.log(canHaveLicense);

age = 35;

isActiveStudent = age <= 18 || haveStudentCard;
console.log(isActiveStudent); // true

// change to opposite boolean value
console.log(!isActiveStudent); // false
