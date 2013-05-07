describe("About Expects (topics/about_expects.js)", function(){
  
  it("looking for truthyness",function() {
      expect(false).toBeTruthy();
  });

  it("looking for falsyness", function() {
    expect('__').toBeFalsy();
  });

  it("looking for equality",function() {
    expect(1 + 1).toBe('__');
  });
});
