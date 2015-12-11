jest.dontMock('../app/testing');  // Don't create mock functions
var testing = require('../app/testing');

// Test to verify the testing.verifyAlphaNumeric() function
describe('verifyAlphaNumeric', function() {
  it('defines a verifyAlphaNumeric function', function() {
    expect(testing.verifyAlphaNumeric).toBeDefined();
  });
   it('function does an indexOf comparison to see if disallowed characters exist', function() {
    expect(testing.verifyAlphaNumeric("a b c")).toBe(true);
  });
   it('function does an indexOf comparison to see if disallowed character $ exists', function() {
    expect(testing.verifyAlphaNumeric("a b$ c")).toBe(false);
  });
   it('function does an indexOf comparison to see if disallowed character % exists', function() {
    expect(testing.verifyAlphaNumeric("a% b c")).toBe(false);
  });
   it('function does an indexOf comparison to see if disallowed character ^ exists', function() {
    expect(testing.verifyAlphaNumeric("a b ^ c")).toBe(false);
  });
   it('function does an indexOf comparison to see if disallowed character & exists', function() {
    expect(testing.verifyAlphaNumeric("a b & c")).toBe(false);
  });
   it('function does an indexOf comparison to see if disallowed character * exists', function() {
    expect(testing.verifyAlphaNumeric("a *b c")).toBe(false);
  });

});

// Test to verify the testing.duplicateCheck() function
describe('duplicateCheck', function() {
  it('defines a duplicateCheck function', function() {
    expect(testing.duplicateCheck).toBeDefined();
  });

  it('function iterates over the array and returns whether there are any identical values, returns true if no duplicates', function() {
    expect(testing.duplicateCheck(['a', 'b', 'c'])).toBe(true);
  });

  it('function iterates over the array and returns whether there are any identical values, returns true if no duplicates', function() {
    expect(testing.duplicateCheck(['a', 'a', 'c'])).toBe(false);
  });

  it('function iterates over the array and returns whether there are any identical values, returns true if no duplicates', function() {
    expect(testing.duplicateCheck(['a', 'a', 'a'])).toBe(false);
  });
});

// Test to verify the testing.checkWordCount() function
describe('checkWordCount', function() {
  it('defines a checkWordCount function', function() {
    expect(testing.checkWordCount).toBeDefined();
  });
  
  it('checkWordCount function compares array.length to see if less than 100', function() {
    expect(testing.checkWordCount(['a', 'asdf'])).toBeLessThan(100);
  });  
  it('checkWordCount function compares array.length to see if less than 100', function() {
    expect(testing.checkWordCount([])).toBeLessThan(100);
  });  



});