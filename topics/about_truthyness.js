describe("About Truthyness",function() {
  
  it("for positive numbers", function() {
    var oneIsTruthy = 1 ? true : false;
    expect(oneIsTruthy).toBe(true);  // 'is one truthy?');
  });

  it("for negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;
    expect(negativeOneIsTruthy).toBe(true);  // 'is -1 truthy?');
  });

  it("for zero", function() {
    var zeroIsTruthy = 0 ? true : false;
    expect(zeroIsTruthy).toBe(false);  // 'is 0 truthy?');
  });

  it("for null", function() {
    var nullOneIsTruthy = null ? true : false;
    expect(nullOneIsTruthy).toBe(false);  // 'is null truthy?');
  });
});
/*
module("About Truthyness (topics/about_truthyness.js)");

test("truthyness of positive numbers", function() {
    var oneIsTruthy = 1 ? true : false;
    equals(oneIsTruthy, __, 'is one truthy?');
});

test("truthyness of negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;
    equals(negativeOneIsTruthy, __, 'is -1 truthy?');
});

test("truthyness of zero", function() {
    var zeroIsTruthy = 0 ? true : false;
    equals(zeroIsTruthy, __, 'is 0 truthy?');
});

test("truthyness of null", function() {
    var nullIsTruthy = null ? true : false;
    equals(nullIsTruthy, __, 'is null truthy?');
});
*/
