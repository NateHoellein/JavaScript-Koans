describe("About Arrays (topics/about_arrays.js)",function() {
  
  it("array literal syntax and indexing", function() {
      var favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
      expect(favouriteThings[0]).toBe("cellar door"); // 'what is in the first position of the array?');
      expect(favouriteThings[1]).toBe(42); // 'what is in the second position of the array?');
      expect(favouriteThings[2]).toBe(true); // 'what is in the third position of the array?');
  });

  it("array type", function() {
      expect(typeof([])).toBe("object"); // 'what is the type of an array?');
  });
  
  it("length", function() {
    var collection = ['a','b','c'];
    expect(collection.length).toBe(3); // 'what is the length of the collection array?');
  });

  it("splice", function() {
      var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      var workingWeek = daysOfWeek.splice(0,5);
      expect(workingWeek).toEqual(['Monday', 'Tuesday','Wednesday', 'Thursday','Friday']); // 'what is the value of workingWeek?');
      expect(daysOfWeek).toEqual(['Saturday','Sunday']); //'what is the value of daysOfWeek?');
  });

  it("stack methods", function() {
      var stack = [];
      stack.push("first");
      stack.push("second");

      expect(stack.pop()).toBe("second"); // 'what will be the first value popped off the stack?');
      expect(stack.pop()).toBe("first"); // 'what will be the second value popped off the stack?');
  });
});

/*
module("About Arrays (topics/about_arrays.js)");

test("array literal syntax and indexing", function() {
    var favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
    equals(favouriteThings[0], __, 'what is in the first position of the array?');
    equals(favouriteThings[1], __, 'what is in the second position of the array?');
    equals(favouriteThings[2], __, 'what is in the third position of the array?');
});

test("array type", function() {
    equals(typeof([]), __, 'what is the type of an array?');
});

test("length", function() {
    var collection = ['a','b','c'];
    equals(collection.length, __, 'what is the length of the collection array?');
});

test("splice", function() {
    var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var workingWeek = daysOfWeek.splice(__, __);
    ok(workingWeek.equalTo([__]), 'what is the value of workingWeek?');
    ok(daysOfWeek.equalTo([__]), 'what is the value of daysOfWeek?');
});

test("stack methods", function() {
    var stack = [];
    stack.push("first");
    stack.push("second");

    equals(stack.pop(), __, 'what will be the first value popped off the stack?');
    equals(stack.pop(), __, 'what will be the second value popped off the stack?');
});
*/
