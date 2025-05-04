const fs = require('fs');
const path = require('path');
const {
  addBook,
  removeBook,
  findBooksByAuthor,
  loadBooks,
  saveBooks,
  updateBookTitle,
  books
} = require('../bookManager');

jest.mock('fs');

describe('Book Manager Module', () => {
  beforeEach(() => {
    books.length = 0; // Reset books array before each test
  });

  describe('addBook', () => {
    it('should add a book to the list', () => {
      const book = addBook('1984', 'George Orwell');
      expect(book).toEqual({ title: '1984', author: 'George Orwell' });
      expect(books).toContainEqual(book);
    });
  });

  describe('removeBook', () => {
    it('should remove a book by title', () => {
      addBook('1984', 'George Orwell');
      const removed = removeBook('1984');
      expect(removed).toEqual({ title: '1984', author: 'George Orwell' });
      expect(books).not.toContainEqual(removed);
    });

    it('should throw an error if book is not found', () => {
      expect(() => removeBook('Unknown')).toThrow('Book not found');
    });
  });

  describe('findBooksByAuthor', () => {
    it('should return all books by a given author', () => {
      addBook('1984', 'George Orwell');
      addBook('Animal Farm', 'George Orwell');
      addBook('Brave New World', 'Aldous Huxley');
      const result = findBooksByAuthor('George Orwell');
      expect(result).toHaveLength(2);
    });

    it('should return an empty array if no books found', () => {
      const result = findBooksByAuthor('Unknown');
      expect(result).toEqual([]);
    });
  });

  describe('loadBooks', () => {
    it('should load books from books.json', async () => {
      const fakeData = JSON.stringify([
        { title: 'Dune', author: 'Frank Herbert' },
        { title: 'Foundation', author: 'Isaac Asimov' }
      ]);
      fs.readFile.mockImplementation((file, enc, cb) => cb(null, fakeData));

      await loadBooks();
      expect(books).toHaveLength(2);
      expect(books[0].title).toBe('Dune');
    });

    it('should reject if readFile fails', async () => {
      fs.readFile.mockImplementation((file, enc, cb) => cb(new Error('Read error')));
      await expect(loadBooks()).rejects.toThrow('Read error');
    });
  });

  describe('saveBooks', () => {
    it('should save books to books.json', async () => {
      addBook('Dune', 'Frank Herbert');
      fs.writeFile.mockImplementation((file, data, enc, cb) => cb(null));
      await expect(saveBooks()).resolves.toBeUndefined();
      expect(fs.writeFile).toHaveBeenCalled();
    });

    it('should reject if writeFile fails', async () => {
      fs.writeFile.mockImplementation((file, data, enc, cb) => cb(new Error('Write error')));
      await expect(saveBooks()).rejects.toThrow('Write error');
    });
  });
});
