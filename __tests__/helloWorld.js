const greet = require('../src/app.js');

// exe1
test('bob should return "Hello, Bob."', () => {
  expect(greet('Bob')).toBe('Hello, Bob.');
});
