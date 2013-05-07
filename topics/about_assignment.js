describe("About Assignment (topics/about_assignments.js)",function() {
  it("scopes local variables", function() {
    var temp = __;
    expect(temp).toBe(1);
  });

  it("scopes global variables", function() {
    temp = 5;
    expect(temp).toBe(window.__);
  });
});
