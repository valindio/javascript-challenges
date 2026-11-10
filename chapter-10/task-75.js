// array inside object

const student = {
  name: "Dio",
  subject: ["Math", "Biologi", "IT", "Bahasa Indonesia"],
};

// initial array
console.log(student.subject); // ['Math', 'Biologi', 'IT', 'Bahasa Indonesia']

// add new item to array inside object
student.subject.push("Sejarah");
console.log(student.subject); // ['Math', 'Biologi', 'IT', 'Bahasa Indonesia', 'Sejarah']
