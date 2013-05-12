// Jasmine overrides to handle '--' for this koans.

var __ = 'incomplete';

var originalToBe = jasmine.Matchers.prototype.toBe;
var originalToEqual = jasmine.Matchers.prototype.toEqual;
var originalToMatch = jasmine.Matchers.prototype.toMatch;

var OverrideExpect = function(that, expected, originalExpect) {
  if(expected === __ || that.actual.indexOf(__)) {
      that.message = function() {
        return "I see this spec is incomplete, you have more work to do.";
      }
      return false;
    } else {
      return originalExpect.call(that,expected);  
    };
};

jasmine.Matchers.prototype.toBe = function(expected) {
  OverrideExpect(this, expected,originalToBe);
};

jasmine.Matchers.prototype.toEqual = function(expected) {
  OverrideExpect(this,expected,originalToEqual);
};

jasmine.Matchers.prototype.toMatch = function(expected) {
  OverrideExpect(this,expected, originalToMatch);
};
