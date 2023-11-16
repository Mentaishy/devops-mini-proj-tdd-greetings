const greet = require('../src/app.js');

// exe1
test('bob should return "Hello, Bob."', () => {
  expect(greet('Bob')).toBe('Hello, Bob.');
});

//exe2 

//test 1
test('null should return Hello, my friend.', () => {
  expect(greet(null)).toBe('Hello, my friend.');
});
