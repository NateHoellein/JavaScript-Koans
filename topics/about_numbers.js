describe("About Numbers (topics/about_numbers.js)", function() {

  it("types", function() {
      var typeOfIntegers = typeof(6);
      var typeOfFloats = typeof(3.14159);
      expect(typeOfIntegers).toBe(__); // 'are ints and floats the same type?');
      expect(typeOfIntegers).toBe(__); // 'what is the javascript numeric type?');
      expect(1.0, __); // 'what is a integer number equivalent to 1.0?');
  });

  it("NaN", function() {
      var resultOfFailedOperations = 7/'apple';
      expect(isNaN(resultOfFailedOperations)).toBe(__); // 'what will satisfy the equals assertion?');
      expect(resultOfFailedOperations).not.toEqual(__); // 'is NaN == NaN?');
  });
});
