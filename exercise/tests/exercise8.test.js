const {
    addBook,
    removeBook,
    updateBookTitle,
    findBooksByAuthor,
    books,
  } = require('../bookManager'); // Adjust the path as needed
  
  beforeEach(() => {
    books.length = 0; // Clear books before each test
  });
  
  describe('Matchers Test Suite for bookManager.js', () => {
  
    test('toBe: addBook returns exact title', () => {
      const book = addBook('Moby Dick', 'Herman Melville');
      expect(book.title).toBe('Moby Dick');
    });
  
    test('toEqual: book object matches', () => {
      const book = addBook('Dracula', 'Bram Stoker');
      expect(book).toEqual({ title: 'Dracula', author: 'Bram Stoker' });
    });
  
    test('toContain: books array contains added book', () => {
      const book = addBook('Frankenstein', 'Mary Shelley');
      expect(books).toContainEqual(book);
    });
  
    test('toMatch: title matches pattern', () => {
      const book = addBook('Pride and Prejudice', 'Jane Austen');
      expect(book.title).toMatch(/Pride/);
    });
  
    test('toBeTruthy: found book by author exists', () => {
      addBook('Book A', 'Author X');
      const result = findBooksByAuthor('Author X');
      expect(result.length > 0).toBeTruthy();
    });
  
    test('toBeFalsy: no books returned for unknown author', () => {
      addBook('Book A', 'Author X');
      const result = findBooksByAuthor('Author Y');
      expect(result.length === 0).toBeTruthy(); // or expect(result).toHaveLength(0)
    });
  
    test('toThrow: removeBook throws error if book not found', () => {
      expect(() => removeBook('Nonexistent')).toThrow('Book not found');
    });
  
    test('toThrow: updateBookTitle throws error if book not found', () => {
      expect(() => updateBookTitle('Ghost Title', 'Real Title')).toThrow();
    });
  
  });
  