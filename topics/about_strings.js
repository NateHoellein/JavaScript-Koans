describe("About Strings (topics/about_strings.js)",function() {
  it("delimiters", function() {
      var singleQuotedString = 'apple';
      var doubleQuotedString = "apple";
      expect(singleQuotedString).toBe(doubleQuotedString); // 'are the two strings equal?');
  });
  
  it("concatenation", function() {
      var fruit = "apple";
      var dish = "pie";
      expect(fruit + " " + dish).toBe("apple pie"); // 'what is the value of fruit + " " + dish?');
  });
  
  it("character Type", function() {
      var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
      expect(characterType).toBe("string"); // 'Javascript has no character type');
  });
  
  it("character Type", function() {
    var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    expect(characterType).toBe("string"); // 'Javascript has no character type');
  });

  it("escape character", function() {
    var stringWithAnEscapedCharacter  = "\u0041pple";
    expect(stringWithAnEscapedCharacter).toBe("Apple"); // 'what  is the value of stringWithAnEscapedCharacter?');
  });

  it("string.length", function() {
      var fruit = "apple";
      expect(fruit.length).toBe(5); // 'what is the value of fruit.length?');
  });

  it("slice", function() {
      var fruit = "apple pie";
      expect(fruit.slice(0,5)).toBe("apple"); // 'what is the value of fruit.slice(0,5)?');
  });
});

/*
module("About Strings (topics/about_strings.js)");

test("delimiters", function() {
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";
    equals(singleQuotedString === doubleQuotedString, __, 'are the two strings equal?');
});

test("concatenation", function() {
    var fruit = "apple";
    var dish = "pie";
    equals(fruit + " " + dish, __, 'what is the value of fruit + " " + dish?');
});

test("character Type", function() {
    var characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    equals(characterType, __, 'Javascript has no character type');
});

test("escape character", function() {
    var stringWithAnEscapedCharacter  = "\u0041pple";
    equals(stringWithAnEscapedCharacter, __, 'what  is the value of stringWithAnEscapedCharacter?');
});

test("string.length", function() {
    var fruit = "apple";
    equals(fruit.length, __, 'what is the value of fruit.length?');
});

test("slice", function() {
    var fruit = "apple pie";
    equals(fruit.slice(0,5), __, 'what is the value of fruit.slice(0,5)?');
});
*/
