// tests/exercise4.test.js

const { addBook, books } = require('../bookManager');

test('addBook should add a book to the books array', () => {
  // Clear books before test
  books.length = 0;

  const book = addBook('The Great Gatsby', 'F. Scott Fitzgerald');

  expect(book).toEqual({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  });

  expect(books).toContainEqual({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  });

  expect(books.length).toBe(1);
});
