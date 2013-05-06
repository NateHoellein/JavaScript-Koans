
describe("About Scope (topics/about_scope.js)",function() {

  thisIsAGlobalVariable = 77;

  it("global variables", function() {
      expect(thisIsAGlobalVariable).toBe(77); // 'is thisIsAGlobalVariable defined in this scope?');
  });

  it("variables declared inside of a function", function() {
      var outerVariable = "outer";

      // this is a self-invoking function. Notice that it calls itself at the end ().
      (function() {
          var innerVariable = "inner";
          expect(outerVariable).toBe("outer"); // 'is outerVariable defined in this scope?');
          expect(innerVariable).toBe("inner"); // 'is innerVariable defined in this scope?');
      })();

      expect(outerVariable).toBe("outer"); // 'is outerVariable defined in this scope?');
      expect(typeof(innerVariable)).toBe('undefined'); // 'is innerVariable defined in this scope?');
  });
});
/*
module("About Scope (topics/about_scope.js)");

thisIsAGlobalVariable = 77;

test("global variables", function() {
    equals(thisIsAGlobalVariable, __, 'is thisIsAGlobalVariable defined in this scope?');
});

test("variables declared inside of a function", function() {
    var outerVariable = "outer";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function() {
        var innerVariable = "inner";
        equals(outerVariable, __, 'is outerVariable defined in this scope?');
        equals(innerVariable, __, 'is innerVariable defined in this scope?');
    })();

    equals(outerVariable, __, 'is outerVariable defined in this scope?');
    equals(typeof(innerVariable), __, 'is innerVariable defined in this scope?');
});
*/
