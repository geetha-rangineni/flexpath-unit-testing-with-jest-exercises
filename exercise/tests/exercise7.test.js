const {
    addBook,
    removeBook,
    updateBookTitle,
    findBooksByAuthor,
    books,
} = require('../bookManager'); // Adjust path if needed
  
  describe('Book Manager with Setup/Teardown Hooks', () => {
    beforeAll(() => {
      console.log('📚 Starting test suite...');
    });
  
    afterAll(() => {
      console.log('✅ Test suite completed.');
    });
  
    beforeEach(() => {
      // Clear books before each test
      books.length = 0;
    });
  
    afterEach(() => {
      console.log('🧹 Cleaned up after test');
    });
  
    describe('addBook', () => {
      test('should add a book to the array', () => {
        const book = addBook('1984', 'George Orwell');
        expect(books).toHaveLength(1);
        expect(books[0]).toEqual(book);
      });
    });
  
    describe('removeBook', () => {
      test('should remove a book by title', () => {
        addBook('Brave New World', 'Aldous Huxley');
        const removed = removeBook('Brave New World');
        expect(books).toHaveLength(0);
        expect(removed.title).toBe('Brave New World');
      });
    });
  
    describe('updateBookTitle', () => {
      test('should update a book title', () => {
        addBook('Old Title', 'Author');
        const updated = updateBookTitle('Old Title', 'New Title');
        expect(updated.title).toBe('New Title');
      });
    });
  
    describe('findBooksByAuthor', () => {
      test('should find books by author', () => {
        addBook('Book 1', 'Author X');
        addBook('Book 2', 'Author X');
        const results = findBooksByAuthor('Author X');
        expect(results).toHaveLength(2);
      });
    });
  });
  