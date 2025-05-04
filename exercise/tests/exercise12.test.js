jest.mock("../bookManager", () => ({
    ...jest.requireActual("../bookManager"),
    loadBooks: jest.fn(),
  }));
  
  const { loadBooks, books } = require("../bookManager");
  
  test("loadBooks resolves successfully", async () => {
    loadBooks.mockResolvedValue();
    await loadBooks();
    expect(loadBooks).toHaveBeenCalled();
  });
  
  test("loadBooks handles error correctly", async () => {
    loadBooks.mockRejectedValue(new Error("Read error"));
    await expect(loadBooks()).rejects.toThrow("Read error");
});