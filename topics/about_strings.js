describe("About Strings (topics/about_strings.js)",function() {
  it("delimiters", function() {
      var singleQuotedString = 'apple';
      var doubleQuotedString = "apple";
      expect(singleQuotedString).toBe(__); // 'are the two strings equal?');
  });
  
  it("concatenation", function() {
      var fruit = "apple";
      var dish = "pie";
      expect(fruit + " " + dish).toBe(__); // 'what is the value of fruit + " " + dish?');
  });
  
  it("character Type", function() {
      var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
      expect(characterType).toBe(__); // 'Javascript has no character type');
  });
  
  it("character Type", function() {
    var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    expect(characterType).toBe(__); // 'Javascript has no character type');
  });

  it("escape character", function() {
    var stringWithAnEscapedCharacter  = "\u0041pple";
    expect(stringWithAnEscapedCharacter).toBe(__); // 'what  is the value of stringWithAnEscapedCharacter?');
  });

  it("string.length", function() {
      var fruit = "apple";
      expect(fruit.length).toBe(__); // 'what is the value of fruit.length?');
  });

  it("slice", function() {
      var fruit = "apple pie";
      expect(fruit.slice(0,5)).toBe(__); // 'what is the value of fruit.slice(0,5)?');
  });
});
