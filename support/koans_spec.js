describe("Spec for koans support",function() {
  xit("checks for '__' as expected", function() {
    this.actual = "something that doesn't match";
    var result = OverrideExpect(this,__,function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for '__' as actual", function() {
    this.actual = __;
    var result = OverrideExpect(this,__,function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for '__' within 'actual' string ", function() {
    this.actual = "something that doesn't __ match";
    var result = OverrideExpect(this,"boo",function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for '__' as the expected result", function() {
    this.actual = "something that doesn't match";
    var result = OverrideExpect(this,'__',function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for '__' within the expected result", function() {
    this.actual = "something that doesn't match";
    var result = OverrideExpect(this,'hey, I have a __ in me',function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for '__' as the actual result", function() {
    this.actual = "__";
    var result = OverrideExpect(this,'expected',function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for '__' as expected when dealing with numbers", function() {
    this.actual = 15;
    var result = OverrideExpect(this,__,function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for '__' as actual when dealing with numbers", function() {
    this.actual = __;
    var result = OverrideExpect(this,15,function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for '__' in the actual object value", function() {
    this.actual = {foo: "__"};
    var expected = {foo: "bar"};
    var result = OverrideExpect(this,expected,function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for a literal '__' in the actual object value", function() {
    this.actual = {foo: __};
    var expected = {foo: "bar"};
    var result = OverrideExpect(this,expected,function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for '__' in the expected object value", function() {
    this.actual = {foo: "bar"};
    var expected = {foo: "__"};
    var result = OverrideExpect(this,expected,function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for a literal '__' in the expected object value", function() {
    this.actual = {foo: "bar"};
    var expected = {foo: __};
    var result = OverrideExpect(this,expected,function() {});
    verifyResults(this.message.call(),result);
  });

  xit("checks for a literal '__' in the expected object property", function() {
    this.actual = {foo: "bar"};
    var expected = {__: "myvalue"};
    var result = OverrideExpect(this,expected,function() {});
    verifyResults(this.message.call(),result);
  });
  
  xit("checks for a '__' in the expected object property", function() {
    this.actual = {foo: "bar"};
    var expected = {"__": "myvalue"};
    var result = OverrideExpect(this,expected,function() {});
    verifyResults(this.message.call(),result);
  });

  it("object literal notation", function() {
      var person = {
          __:__,
          __:__
      };		
      this.actual = person;
      expect(person.name).toBe("Amory Blaine"); // 'what is the person\'s name?');
      expect(person.age).toBe(102); // 'what is the person\'s age?');
  });

  xit("checks for __ during equality tests",function() {
    expect(3 + __).toBe(7);
  });

  var verifyResults = function(failureMessage, result) {
    expect(failureMessage).toBe('Oops this spec has not been fixed, you have more work to do.');
    expect(result).toBeFalsy();
  };
});
