const bookManager = require("../bookManager");

test("spy on addBook", () => {
  const spy = jest.spyOn(bookManager, "addBook");

  bookManager.addBook("Spy Book", "Spy Author");
  expect(spy).toHaveBeenCalledWith("Spy Book", "Spy Author");

  spy.mockRestore();
});
