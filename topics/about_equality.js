describe("About Equality (topics/about_equality.js)", function() {
  it("shows numeric equality", function() {
    expect(3 + __).toBe(7);
  });

  it("shows string equality", function() {
    expect("3" + __).toBe("37");
  });

  it("shows equality without type coercion '==='", function() {
    var a = 3;
    var b = a;
    expect(a).toBe(__); // 'what is exactly equal to 3?');
  });

  it("shows equality with type coercion  '=='", function() {
    var a = 3;
    var b = a;
    expect(a).toEqual(__);  // 'what string is equal to 3, with type coercion?');
  });

  it("string literals", function() {
      expect("frankenstein").toBe('__'); // "quote types are interchangable, but must match.");
  });
});
