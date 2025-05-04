const { addBook, books, updateBookTitle } = require('../bookManager');

describe('updateBookTitle', () => {
  beforeEach(() => {
    books.length = 0; // Reset the in-memory books array
    addBook('Old Title', 'Author Name');
  });

  it('should update the title of a book if it exists', () => {
    const updated = updateBookTitle('Old Title', 'New Title');
    expect(updated).toEqual({ title: 'New Title', author: 'Author Name' });
    expect(books).toContainEqual({ title: 'New Title', author: 'Author Name' });
    expect(books).not.toContainEqual({ title: 'Old Title', author: 'Author Name' });
  });

  it('should throw an error if the book does not exist', () => {
    expect(() => updateBookTitle('Nonexistent', 'Anything')).toThrow('Book not found');
  });
});
