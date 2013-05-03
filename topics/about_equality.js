describe("About Equality", function() {
  it("shows numeric equality", function() {
    expect(3 + 4).toBe(7);
  });

  it("shows string equality", function() {
    expect("3" + "7").toBe("37");
  });

  it("shows equality without type coercion '==='", function() {
    var a = 3;
    var b = a;
    expect(a).toBe(b); // 'what is exactly equal to 3?');
  });

  it("shows equality with type coercion  '=='", function() {
    var a = 3;
    var b = a;
    expect(a).toEqual(b);  // 'what string is equal to 3, with type coercion?');
  });
});

/*
module("About Equality (topics/about_equality.js)");

test("numeric equality", function() {
    equals(3 + __,  7, 'hmmmm?');
});

test("string equality", function() {
    equals("3" + __, "37", "concatenate the strings");
});

test("equality without type coercion", function() {
    ok(3 === __, 'what is exactly equal to 3?');
});

test("equality with type coercion", function() {
    ok(3 == "__", 'what string is equal to 3, with type coercion?');
});

test("string literals", function() {
    equals("frankenstein", '__', "quote types are interchangable, but must match.");
});
*/
