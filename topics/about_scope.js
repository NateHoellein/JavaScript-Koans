
describe("About Scope (topics/about_scope.js)",function() {

  thisIsAGlobalVariable = 77;

  it("global variables", function() {
      expect(thisIsAGlobalVariable).toBe(__); // 'is thisIsAGlobalVariable defined in this scope?');
  });

  it("variables declared inside of a function", function() {
      var outerVariable = "outer";

      // this is a self-invoking function. Notice that it calls itself at the end ().
      (function() {
          var innerVariable = "inner";
          expect(outerVariable).toBe(__); // 'is outerVariable defined in this scope?');
          expect(innerVariable).toBe(__); // 'is innerVariable defined in this scope?');
      })();

      expect(outerVariable).toBe(__); // 'is outerVariable defined in this scope?');
      expect(typeof(innerVariable)).toBe(__); // 'is innerVariable defined in this scope?');
  });
});
