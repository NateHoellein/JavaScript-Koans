// Jasmine overrides to handle '--' for this koans.

var __ = 'incomplete';
var message =  "Oops this spec has not been fixed, you have more work to do.";

var originalToBe = jasmine.Matchers.prototype.toBe;
var originalToEqual = jasmine.Matchers.prototype.toEqual;
var originalToMatch = jasmine.Matchers.prototype.toMatch;

var OverrideExpect = function(that, expected, originalExpect) {
  
  if(that.actual === undefined) {
    that.message = function() {
      return message;
    };
    return false;
  }

  if(objectTest(expected,that.actual)) {
    that.message = function() {
      return message;
    };
    return false;
  } 
  if(literalTest(expected,that.actual) || stringTest(expected,that.actual)) {
    that.message = function() {
      return message;
    }
    return false;
  } 
  
  return originalExpect.call(that,expected);  
   
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

var isString = function(value) {
  return typeof(value) === 'string';
};

var constantCheck = function(value) {
  return value === __;
};

var stringCheck = function(value) {
  if(isString(value)) {
    return value.indexOf('__') >= 0 || value.indexOf(__) >= 0; 
  }
};

var literalTest = function(expected,actual) {
    return constantCheck(expected) || constantCheck(actual); 
};

var stringTest = function(expected, actual) {
    return (stringCheck(expected) || stringCheck(actual)); 
};

var objectTest = function(expected, actual) {
  var isExpectedIncomplete = false
    ,isActualIncomplete = false;
  if(checkProperties(expected)) {
    isExpectedIncomplete = true;
  }

  if(checkProperties(actual)) {
    isActualIncomplete = true;
  }
  return isExpectedIncomplete || isActualIncomplete;
};

var checkProperties = function(myObject) {
  for(var key in myObject) {
    if(myObject.hasOwnProperty(key)) {
      var obj = myObject[key];
      if(stringCheck(obj) || constantCheck(obj) || stringCheck(key)) {
        return true;  
      }
    }
  }
};

