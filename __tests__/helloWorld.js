const greet = require('../src/app.js');

// exe1
// test 1

test('bob should return "Hello, Bob."', () => {
  expect(greet('Bob')).toBe('Hello, Bob.');
});

// Test 2

test('Bobette should return "Hello, Bobette."', () => {
  expect(greet('Bobette')).toBe('Hello, Bobette.');
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

// test 2

test('Resul and Marwan should return Hello, Resul and Marwan.', () => {
  const result = greet(['Resul', 'Marwan']);
  expect(result).toBe('Hello, Resul and Marwan.');
});

// exe 5

// test 1

test('Amy, Brian and Charlotte should return "Hello, Amy, Brianand and Charlotte."', () => {
  const result = greet(['Amy', 'Brian', 'Charlotte']);
  expect(result).toBe('Hello, Amy, Brian and Charlotte.');
});

// test 2

test('Killjoy, Viper and Fade should return "Hello, Killjoy, Viper and Fade."', () => {
  const result = greet(['Killjoy', 'Viper', 'Fade']);
  expect(result).toBe('Hello, Killjoy, Viper and Fade.');
});

// exe 6
// test 1

test('Amy, BRIAN and Charlotte should return "Hello, Amy, Brianand and Charlotte."', () => {
  const result = greet(['Amy', 'Charlotte', 'BRIAN']);
  expect(result).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!');
});

// test 2

test('REYNA, Raze and Viper should return "Hello, Raze and Viper. AND HELLO REYNA!"', () => {
  const result = greet(['REYNA', 'Raze', 'Viper']);
  expect(result).toBe('Hello, Raze and Viper. AND HELLO REYNA!');
});

// exe 7

// test 1
test('"Marie" and "fr" should return "Bonjour, Marie."', () => {
  const result = greet(['Marie', 'fr']);
  expect(result).toBe('Bonjour, Marie.');
});

// test 2
test('"Marie" and "fr" should return "Bonjour, Marie."', () => {
  const result = greet(['Marie', 'en']);
  expect(result).toBe('Hello, Marie.');
});

// test 2
test('"Marie" and "fr" should return "Bonjour, Marie."', () => {
  const result = greet(['Marie', 'nl']);
  expect(result).toBe('Hallo, Marie.');
});
