const fs = require("fs");

const books = [];

const addBook = (title, author) => {
  const book = { title, author };
  books.push(book);
  return book;
};

const removeBook = (title) => {
  const index = books.findIndex((book) => book.title === title);
  if (index === -1) throw new Error("Book not found");
  return books.splice(index, 1)[0];
};

const findBooksByAuthor = (author) => {
  return books.filter((book) => book.author === author);
};

const loadBooks = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("books.json", "utf8", (err, data) => {
      if (err) reject(err);
      else {
        books.push(...JSON.parse(data));
        resolve();
      }
    });
  });
};

const saveBooks = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile("books.json", JSON.stringify(books), "utf8", (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};
const updateBookTitle = (oldTitle, newTitle) => {
  const book = books.find((book) => book.title === oldTitle);
  if (!book) throw new Error("Book not found");
  book.title = newTitle;
  return book;
};

module.exports = {
  addBook,
  removeBook,
  findBooksByAuthor,
  loadBooks,
  saveBooks,
  updateBookTitle,
  books,
};


// bookManager.js
// const books = [];

// const addBook = (title, author) => {
//   const book = { title, author };
//   books.push(book);
//   return book;
// };

// const removeBook = (title) => {
//   const index = books.findIndex((b) => b.title === title);
//   if (index === -1) throw new Error('Book not found');
//   return books.splice(index, 1)[0];
// };

// const findBooksByAuthor = (author) => {
//   return books.filter((b) => b.author === author);
// };

// const updateBookTitle = (oldTitle, newTitle) => {
//   const book = books.find((b) => b.title === oldTitle);
//   if (!book) throw new Error('Book not found');
//   book.title = newTitle;
//   return book;
// };

// module.exports = {
//   addBook,
//   removeBook,
//   findBooksByAuthor,
//   updateBookTitle,
//   books,
// };
