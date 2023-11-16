const greet = require('../src/app.js');

// exe1
test('bob should return "Hello, Bob."', () => {
  expect(greet('Bob')).toBe('Hello, Bob.');
});

// exe2

// test 1
test('null should return Hello, my friend.', () => {
  expect(greet(null)).toBe('Hello, my friend.');
});

// test 2

test('undefined name should return Hello, my friend.', () => {
  expect(greet(undefined)).toBe('Hello, my friend.');
});

// test 3

test('empty name should return Hello, my friend.', () => {
  expect(greet('')).toBe('Hello, my friend.');
});
