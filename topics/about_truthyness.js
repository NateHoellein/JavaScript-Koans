describe("About Truthyness",function() {
  
  it("for positive numbers", function() {
    var oneIsTruthy = 1 ? true : false;
    expect(oneIsTruthy).toBe(__);  // 'is one truthy?');
  });

  it("for negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;
    expect(negativeOneIsTruthy).toBe(__);  // 'is -1 truthy?');
  });

  it("for zero", function() {
    var zeroIsTruthy = 0 ? true : false;
    expect(zeroIsTruthy).toBe(__);  // 'is 0 truthy?');
  });

  it("for null", function() {
    var nullOneIsTruthy = null ? true : false;
    expect(nullOneIsTruthy).toBe(__);  // 'is null truthy?');
  });
});
