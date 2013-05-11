// Jasmine overrides to handle '--' for this koans.

var __ = 'incomplete';

var originalToBe = jasmine.Matchers.prototype.toBe;
var originalToEqual = jasmine.Matchers.prototype.toEqual;
var originalToMatch = jasmine.Matchers.prototype.toMatch;

jasmine.Matchers.prototype.toBe = function(expected) {
  var that = this;
  if(expected === __ || this.actual.indexOf(__)) {
      this.message = function() {
        return "I see this spec is incomplete, you have more work to do.";
      }
      return false;
    } else {
      return originalToBe.call(that,expected);  
    };
};

jasmine.Matchers.prototype.toEqual = function(expected) {
  var that = this;
  if(expected === __) {
      this.message = function() {
        return "I see this spec is incomplete, you have more work to do.";
      }
      return false;
    } else {
      return originalToEqual.call(that,expected);  
    };
};

jasmine.Matchers.prototype.toMatch = function(expected) {
  var that = this;
  if(expected === __) {
      this.message = function() {
        return "I see this spec is incomplete, you have more work to do.";
      }
      return false;
    } else {
      return originalToMatch.call(that,expected);  
    };
};
