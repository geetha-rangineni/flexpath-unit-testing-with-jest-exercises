// tests/exercise6.test.js


const {
  addBook,
  removeBook,
  findBooksByAuthor,
  loadBooks,
  saveBooks,
  updateBookTitle,
  books
} = require('../bookManager');
  
  beforeEach(() => {
    books.length = 0; // Reset books before each test
  });
  
  describe('addBook', () => {
    test('adds a book to the books array', () => {
      const book = addBook('Dune', 'Frank Herbert');
      expect(book).toEqual({ title: 'Dune', author: 'Frank Herbert' });
      expect(books).toContainEqual(book);
    });
  });
  
  describe('removeBook', () => {
    test('removes a book by title', () => {
      addBook('Dune', 'Frank Herbert');
      const removed = removeBook('Dune');
      expect(removed).toEqual({ title: 'Dune', author: 'Frank Herbert' });
      expect(books).not.toContainEqual(removed);
    });
  
    test('throws an error when the book is not found', () => {
      expect(() => removeBook('Nonexistent')).toThrow('Book not found');
    });
  });
  
  describe('updateBookTitle', () => {
    test('updates the title of an existing book', () => {
      addBook('Old Title', 'Author');
      const updated = updateBookTitle('Old Title', 'New Title');
      expect(updated).toEqual({ title: 'New Title', author: 'Author' });
    });
  
    test('throws an error when the book is not found', () => {
      expect(() => updateBookTitle('Not Here', 'New')).toThrow('Book not found');
    });
  });
  
  describe('findBooksByAuthor', () => {
    test('returns all books by a given author', () => {
      addBook('Book A', 'Author X');
      addBook('Book B', 'Author X');
      addBook('Book C', 'Author Y');
  
      const results = findBooksByAuthor('Author X');
      expect(results).toHaveLength(2);
      expect(results).toEqual([
        { title: 'Book A', author: 'Author X' },
        { title: 'Book B', author: 'Author X' },
      ]);
    });
  
    test('returns an empty array if no books match', () => {
      addBook('Solo Book', 'Only Author');
      expect(findBooksByAuthor('Unknown')).toEqual([]);
    });
  });
  

//   module.exports = {
//     removeBook,
//     books,
//     addBook,
//     // other functions...
//   };