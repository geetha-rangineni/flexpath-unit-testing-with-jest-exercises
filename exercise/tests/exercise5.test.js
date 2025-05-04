const { addBook, removeBook } = require("../bookManager");

test("removeBook should remove a book from the collection", () => {
  addBook("Book to Remove", "Author");
  const removedBook = removeBook("Book to Remove");
  expect(removedBook.title).toBe("Book to Remove");
});

test("removeBook should throw an error if the book is not found", () => {
  expect(() => removeBook("Nonexistent Book")).toThrow("Book not found");
});
