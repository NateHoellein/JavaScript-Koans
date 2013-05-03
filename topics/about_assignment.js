describe("About Assignment",function() {
  it("scopes local variables", function() {
    var temp = 1;
    expect(temp).toBe(1);
  });

  it("scopes global variables", function() {
    temp = 5;
    expect(temp).toBe(5);
  });
});

/*
module("About Assignment (topics/about_assignment.js)");

test("local variables", function() {
    var temp = __;
    equals(1, temp, "Assign a value to the variable temp");
});

test("global variables", function() {
    temp = 1;
    equals(temp, window.__, 'global variables are assigned to the window object');
});
*/
