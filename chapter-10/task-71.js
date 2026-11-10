// change and add object properties

const books = {
  title: "JavaScript Advanced",
  author: "Dio",
  pages: 340,
  isAvailable: true,
};

// add properties
books.yearPublished = 2026;

// change isAvailable properties value
books.isAvailable = false;

// delete properties
delete books.pages;

console.log(books);
// {title: 'JavaScript Advanced', author: 'Dio', isAvailable: false, yearPublished: 2026}
