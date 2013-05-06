describe("About Reflection (topics/about_reflection.js)", function() {

  var A = function() {
      this.aprop = "A";    
  };

  var B = function() {
      this.bprop = "B";
  };

  B.prototype = new A();

  it("typeof", function() {
      expect(typeof({})).toBe("object"); // 'what is the type of an empty object?');
      expect(typeof('apple')).toBe("string"); // 'what is the type of a string?');
      expect(typeof(-5)).toBe("number"); // 'what is the type of -5?');
      expect(typeof(false)).toBe("boolean"); // 'what is the type of false?');		
  });

  it("property enumeration", function() {
      var keys = [];
      var values = [];
      var person = {name: 'Amory Blaine', age: 102, unemployed: true};
      for(propertyName in person) {
          keys.push(propertyName);
          values.push(person[propertyName]);
      }
      expect(keys).toEqual(['name','age','unemployed']); // 'what are the property names of the object?');
      expect(values).toEqual(['Amory Blaine',102,true]); // 'what are the property values of the object?');
  });

  it("hasOwnProperty", function() {
      var b = new B();

      var keys = [];
      for (propertyName in b) {
          keys.push(propertyName);
      }
      expect(keys.length).toBe(2); // 'how many elements are in the keys array?');
      expect(keys).toEqual(['bprop','aprop']); // 'what are the properties of the array?');

      // hasOwnProperty returns true if the parameter is a property directly on the object, 
      // but not if it is a property accessible via the prototype chain.
      var ownKeys = [];
      for(propertyName in b) {
          if (b.hasOwnProperty(propertyName)) {
              ownKeys.push(propertyName);
          }
      }
      expect(ownKeys.length).toBe(1); // 'how many elements are in the ownKeys array?');
      expect(ownKeys).toEqual(['bprop']); // 'what are the own properties of the array?');
  });

  it("constructor property", function () {
      var a = new A();
      var b = new B();
      expect(typeof(a.constructor)).toBe('function'); // "what is the type of a's constructor?");
      expect(a.constructor.name).toBe(''); // "what is the name of a's constructor?");    
      expect(b.constructor.name).toBe(''); // "what is the name of b's constructor?");    
  });

  it("eval", function() {
      // eval executes a string
      var result = "";
      eval("result = 'apple' + ' ' + 'pie'");
      expect(result).toBe('apple pie'); // 'what is the value of result?');
  });
});
/*
module("About Reflection (topics/about_reflection.js)");

var A = function() {
    this.aprop = "A";    
};

var B = function() {
    this.bprop = "B";
};

B.prototype = new A();

test("typeof", function() {
    equals(typeof({}), __, 'what is the type of an empty object?');
    equals(typeof('apple'), __, 'what is the type of a string?');
    equals(typeof(-5), __, 'what is the type of -5?');
    equals(typeof(false), __, 'what is the type of false?');		
});

test("property enumeration", function() {
    var keys = [];
    var values = [];
    var person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(propertyName in person) {
        keys.push(propertyName);
        values.push(person[propertyName]);
    }
    ok(keys.equalTo(['__','__','__']), 'what are the property names of the object?');
    ok(values.equalTo(['__',__,__]), 'what are the property values of the object?');
});

test("hasOwnProperty", function() {
    var b = new B();

    var keys = [];
    for (propertyName in b) {
        keys.push(propertyName);
    }
    equals(keys.length, __, 'how many elements are in the keys array?');
    deepEqual(keys, [__, __], 'what are the properties of the array?');

    // hasOwnProperty returns true if the parameter is a property directly on the object, 
    // but not if it is a property accessible via the prototype chain.
    var ownKeys = [];
    for(propertyName in b) {
        if (b.hasOwnProperty(propertyName)) {
            ownKeys.push(propertyName);
        }
    }
    equals(ownKeys.length, __, 'how many elements are in the ownKeys array?');
    deepEqual(ownKeys, [__], 'what are the own properties of the array?');
});

test("constructor property", function () {
    var a = new A();
    var b = new B();
    equals(typeof(a.constructor), __, "what is the type of a's constructor?");
    equals(a.constructor.name, __, "what is the name of a's constructor?");    
    equals(b.constructor.name, __, "what is the name of b's constructor?");    
});

test("eval", function() {
    // eval executes a string
    var result = "";
    eval("result = 'apple' + ' ' + 'pie'");
    equals(result, __, 'what is the value of result?');
});
*/
