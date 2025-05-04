test("primitive values with toBe and toEqual", () => {
    expect(5).toBe(5); // Passes
    expect(5).toEqual(5); // Passes
  });
  
  // Below test is expected to FAIL!
  test("objects with toEqual and toStrictEqual", () => {
    const book1 = { title: "Title", author: "Author" };
    const book2 = { title: "Title", author: "Author" };
  
    expect(book1).toEqual(book2); // Passes
    //expect(book1).toBe(book2); // Fails
    expect(book1).toStrictEqual(book2); // Passes
  
    const book3 = { title: "Title", author: "Author", extra: undefined };
    expect(book1).toEqual(book3); // Passes
    //expect(book1).toStrictEqual(book3); // Fails
  });
  