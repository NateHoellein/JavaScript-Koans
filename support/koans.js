// Jasmine overrides to handle '--' for this koans.

var __ = 'incomplete';

/*
 *
 * TODO: find a way to override toBe and toEqual and report a skipped spec.
originalToBe = jasmine.Matchers.prototype.toBe;

jasmine.Matchers.prototype.toBe = function(expected) {
  var that = this;
  this.actual = that.actual;
  var env = jasmine.getEnv();
  if(expected === '__') {
      console.log('Test needs to be completed.'); 
      this.spec.suite.queue.blocks[0].results_ = {
        id: this.id,
        status: 'disabled',
        description: this.description
        //fullName: this.getFullName()
      };
      return void 0;
    } else {
      return originalToBe.call(this,expected);  
    };
};
*/
