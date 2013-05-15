// Jasmine overrides to handle '--' for this koans.

var __ = 'incomplete';

var originalToBe = jasmine.Matchers.prototype.toBe;
var originalToEqual = jasmine.Matchers.prototype.toEqual;
var originalToMatch = jasmine.Matchers.prototype.toMatch;

var OverrideExpect = function(that, expected, originalExpect) {
  if(literalTest(expected,that.actual)) {
      that.message = function() {
        return "Oops this spec has not been fixed, you have more work to do.";
      }
      return false;
    } 
    if(stringTest(expected,that.actual)) {
      that.message = function() {
        return "Oops this spec has not been fixed, you have more work to do.";
      };
      return false;
    }  
    else {
      return originalExpect.call(that,expected);  
    };
};

jasmine.Matchers.prototype.toBe = function(expected) {
  return OverrideExpect(this, expected,originalToBe);
};

jasmine.Matchers.prototype.toEqual = function(expected) {
  return OverrideExpect(this,expected,originalToEqual);
};

jasmine.Matchers.prototype.toMatch = function(expected) {
  return OverrideExpect(this,expected, originalToMatch);
};

var literalTest = function(expected,actual) {
  return expected === __ || (actual.indexOf(__) >= 0); 
};

var stringTest = function(expected, actual) {
  return expected === '__' || (actual.indexOf('__') >= 0); 
};
