const updateBookTitle = (oldTitle, newTitle) => {
    const book = books.find(book => book.title === oldTitle);
    if (!book) throw new Error('Book not found');
    book.title = newTitle;
  };

  
  module.exports = {
    addBook,
    removeBook,
    findBooksByAuthor,
    loadBooks,
    saveBooks,
    updateBookTitle, // add this line
    books,
  };
  