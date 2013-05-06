
describe("About Functions And Closure (topics/about_functions_and_closure.js)",function() {

  it("defining functions directly", function() {
      var result = "a";
      function changeResult() {
          // the ability to access a variables defined in the same scope as the function is known as 'closure'
          result = "b";
      };	
      changeResult();
      expect(result).toBe("b"); // 'what is the value of result?');
  });

  it("assigning functions to variables", function() {
      var triple = function(input) {
          return input * 3;
      };
      expect(triple(4)).toBe(12); // 'what is triple 4?');		
  });

  it("self invoking functions", function() {		
      var publicValue = "shared";

      // self invoking functions are used to provide scoping and to alias variables
      (function(pv) {
          var secretValue = "password";
          expect(pv).toBe("shared"); //'what is the value of pv?');
          expect(typeof(secretValue)).toBe("string"); // "is secretValue available in this context?");
          expect(typeof(publicValue)).toBe("string"); // "is publicValue available in this context?");
      })(publicValue);

      expect(typeof(secretValue)).toBe('undefined'); // "is secretValue available in this context?");
      expect(typeof(publicValue)).toBe("string"); // "is publicValue available in this context?");
  });

  it("arguments array", function() {
      var add = function() {
          var total = 0;
          for(var i = 0; i < arguments.length; i++) {
            total += arguments[i];
              // complete the implementation of this method so that it returns the sum of its arguments
              // __
          }
          // __
          return total;
      };

      expect(add(1,2,3,4,5)).toBe(15); // "add 1,2,3,4,5");
      expect(add(4,7,-2)).toBe(9); // "add 4,7,-2");
  });

  it("using call to invoke function",function(){
      var invokee = function( message ){
          return this + message;    
      };
      
      //another way to invoke a function is to use the call function which allows 
      //you to set the callers "this" context.  Call can take any number of arguments: 
      //the first one is always the context that this should be set to in the called
      //function, and the arguments to be sent to the function,multiple arguments are separated by commas.
      var result = invokee.call("I am this!", "Where did it come from?");
          
      expect(result).toBe("I am this!Where did it come from?"); // "what will the value of invokee's this be?");
  });

  it("using apply to invoke function",function(){
      var invokee = function( message1, message2 ){
          return this + message1 + message2;    
      };
      
      //similar to the call function is the apply function.  Apply only has two
      //arguments:  the first is the context that this should be set to in the called
      //function and and array of arguments to be passed into the called function.
      var result = invokee.apply("I am this!", ["I am arg1","I am arg2"]);
          
      expect(result).toBe("I am this!I am arg1I am arg2"); // "what will the value of invokee's this be?");
  });
});
/*
module("About Functions And Closure (topics/about_functions_and_closure.js)");

test("defining functions directly", function() {
    var result = "a";
    function changeResult() {
        // the ability to access a variables defined in the same scope as the function is known as 'closure'
        result = "b";
    };	
    changeResult();
    equals(result, __, 'what is the value of result?');
});

test("assigning functions to variables", function() {
    var triple = function(input) {
        return input * 3;
    };
    equals(triple(4), __, 'what is triple 4?');		
});

test("self invoking functions", function() {		
    var publicValue = "shared";

    // self invoking functions are used to provide scoping and to alias variables
    (function(pv) {
        var secretValue = "password";
        equals(pv, __, 'what is the value of pv?');
        equals(typeof(secretValue), "__", "is secretValue available in this context?");
        equals(typeof(publicValue), "__", "is publicValue available in this context?");
    })(publicValue);

    equals(typeof(secretValue), "__", "is secretValue available in this context?");
    equals(typeof(publicValue), "__", "is publicValue available in this context?");
});

test("arguments array", function() {
    var add = function() {
        var total = 0;
        for(var i = 0; i < arguments.length; i++) {
            // complete the implementation of this method so that it returns the sum of its arguments
            // __
        }
        // __
    };

    equals(add(1,2,3,4,5), 15, "add 1,2,3,4,5");
    equals(add(4,7,-2), 9, "add 4,7,-2");
});

test("using call to invoke function",function(){
    var invokee = function( message ){
        return this + message;    
    };
    
    //another way to invoke a function is to use the call function which allows 
    //you to set the callers "this" context.  Call can take any number of arguments: 
    //the first one is always the context that this should be set to in the called
    //function, and the arguments to be sent to the function,multiple arguments are separated by commas.
    var result = invokee.call("I am this!", "Where did it come from?");
        
    equals(result,__,"what will the value of invokee's this be?");
});

test("using apply to invoke function",function(){
    var invokee = function( message1, message2 ){
        return this + message1 + message2;    
    };
    
    //similar to the call function is the apply function.  Apply only has two
    //arguments:  the first is the context that this should be set to in the called
    //function and and array of arguments to be passed into the called function.
    var result = invokee.apply("I am this!", ["I am arg1","I am arg2"]);
        
    equals(result,__,"what will the value of invokee's this be?");
});
*/
