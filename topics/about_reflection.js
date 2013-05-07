describe("About Reflection (topics/about_reflection.js)", function() {

  var A = function() {
      this.aprop = "A";    
  };

  var B = function() {
      this.bprop = "B";
  };

  B.prototype = new A();

  it("typeof", function() {
      expect(typeof({})).toBe(__); // 'what is the type of an empty object?');
      expect(typeof('apple')).toBe(__); // 'what is the type of a string?');
      expect(typeof(-5)).toBe(__); // 'what is the type of -5?');
      expect(typeof(false)).toBe(__); // 'what is the type of false?');		
  });

  it("property enumeration", function() {
      var keys = [];
      var values = [];
      var person = {name: 'Amory Blaine', age: 102, unemployed: true};
      for(propertyName in person) {
          keys.push(propertyName);
          values.push(person[propertyName]);
      }
      expect(keys).toEqual(['__','__','__']); // 'what are the property names of the object?');
      expect(values).toequal(['__','__','__']); // 'what are the property values of the object?');
  });

  it("hasOwnProperty", function() {
      var b = new B();

      var keys = [];
      for (propertyName in b) {
          keys.push(propertyName);
      }
      expect(keys.length).toBe(__); // 'how many elements are in the keys array?');
      expect(keys).toEqual(['__','__']); // 'what are the properties of the array?');

      // hasOwnProperty returns true if the parameter is a property directly on the object, 
      // but not if it is a property accessible via the prototype chain.
      var ownKeys = [];
      for(propertyName in b) {
          if (b.hasOwnProperty(propertyName)) {
              ownKeys.push(propertyName);
          }
      }
      expect(ownKeys.length).toBe(__); // 'how many elements are in the ownKeys array?');
      expect(ownKeys).toEqual(['__']); // 'what are the own properties of the array?');
  });

  it("constructor property", function () {
      var a = new A();
      var b = new B();
      expect(typeof(a.constructor)).toBe(__); // "what is the type of a's constructor?");
      expect(a.constructor.name).toBe(__); // "what is the name of a's constructor?");    
      expect(b.constructor.name).toBe(__); // "what is the name of b's constructor?");    
  });

  it("eval", function() {
      // eval executes a string
      var result = "";
      eval("result = 'apple' + ' ' + 'pie'");
      expect(result).toBe(__); // 'what is the value of result?');
  });
});
