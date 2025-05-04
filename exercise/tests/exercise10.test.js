jest.mock('fs'); // Automatically mock fs module

const fs = require('fs');
const { loadBooks, saveBooks, books } = require('../bookManager');

describe('Mock fs module in loadBooks and saveBooks', () => {
  beforeEach(() => {
    books.length = 0; // reset the books array
    jest.clearAllMocks();
  });

  test('loadBooks should load books from mocked fs.readFile', async () => {
    const fakeData = JSON.stringify([
      { title: "Mock Book 1", author: "Author A" },
      { title: "Mock Book 2", author: "Author B" },
    ]);

    fs.readFile.mockImplementation((path, encoding, callback) => {
      callback(null, fakeData);
    });

    await loadBooks();
    expect(books).toHaveLength(2);
    expect(books[0].title).toBe("Mock Book 1");
    expect(fs.readFile).toHaveBeenCalled();
  });

  test('saveBooks should write books using mocked fs.writeFile', async () => {
    books.push({ title: "Test Save", author: "Author X" });

    fs.writeFile.mockImplementation((path, data, encoding, callback) => {
      callback(null);
    });

    await expect(saveBooks()).resolves.toBeUndefined();
    expect(fs.writeFile).toHaveBeenCalledWith(
      "books.json",
      JSON.stringify(books),
      "utf8",
      expect.any(Function)
    );
  });
});
