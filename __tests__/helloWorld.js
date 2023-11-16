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

// exe3

// test 1

test('JERRY should return "HELLO, JERRY!".', () => {
  expect(greet('JERRY')).toBe('HELLO, JERRY!');
});

// test 2

test('JERRY should return "HELLO, ANNA!".', () => {
  expect(greet('ANNA')).toBe('HELLO, ANNA!');
});

// exe 4
// test 1

test('Jill and Jane should return Hello, Jill and Jane.', () => {
  const result = greet(['Jill', 'Jane']);
  expect(result).toBe('Hello, Jill and Jane.');
});
