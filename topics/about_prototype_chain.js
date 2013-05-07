// demonstrate objects prototype chain

// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain

describe("About Prototype Chain (topics/about_prototype_chain.js)",function() {


var father = {
  b: 3,
  c: 4
};

var child = Object.create(father);
child.a = 1;
child.b = 2;

/*
 * ---------------------- ---- ---- ----
 *                      [a]  [b]  [c]
 * ---------------------- ---- ---- ----
 * [child]               1    2
 * ---------------------- ---- ---- ----
 * [father]                   3    4
 * ---------------------- ---- ---- ----
 * [Object.prototype]
 * ---------------------- ---- ---- ----
 * [null]
 * ---------------------- ---- ---- ----
});
*/
  it("Is there an 'a' and 'b' own property on child?", function () {
    expect(child.hasOwnProperty('a')).toBe(__); // 'child.hasOwnProperty(\'a\')?');
    expect(child.hasOwnProperty('b')).toBe(__); // 'child.hasOwnProperty(\'b\')?');
  });

  it("Is there an 'a' and 'b' property on child?", function () {
    expect(child.a).toBe(__); // 'what is \'a\' value?');
    expect(child.b).toBe(__); // 'what is \'b\' value?');
  });

  it("If 'b' was removed, whats b value?", function () {
    delete child.b;
    expect(child.b).toBe(__); // 'what is \'b\' value now?');
  });

  it("Is there a 'c' own property on child?", function () {
    expect(child.hasOwnProperty('c')).toBe(__); // 'child.hasOwnProperty(\'c\')?');
  });

// Is there a 'c' own property on child? No, check its prototype
// Is there a 'c' own property on child.[[Prototype]]? Yes, its value is...
  it("Is there a 'c' property on child?", function () {
    expect(child.c).toBe(__); // 'what is the value of child.c?');
  });

// Is there a 'd' own property on child? No, check its prototype
// Is there a 'd' own property on child.[[Prototype]]? No, check it prototype
// child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
  it("Is there an 'd' property on child?", function () {
    expect(child.d).toBe(__); // 'what is the value of child.d?');
  });

});
