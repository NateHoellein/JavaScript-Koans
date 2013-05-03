
describe("About Expects (topics/about_expects.js)", function(){
  
  it("comparasion using 'toBe()'",function() {
      expect(true).toBe(true);
  });

  it("demonstrates how to negate 'toBe()'", function() {
    expect(false).not.toBe(true);
  });

  it("demonstrates equality",function() {
    expect(1 + 1).toBe(2);
  });
});
/*
test("ok", function() {
    ok(__, 'what will satisfy the ok assertion?');
});

test("not", function() {
    not(__, 'what is a false value?');
});

test("equals", function() {
    equals(1+1, __, 'what will satisfy the equals assertion?');
});
*/
