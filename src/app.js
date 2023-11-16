function greet (name) {
  if (isUndefinedOrNull(name)) return 'Hello, my friend.';
  if (isEmptyString(name)) return 'Hello, my friend.';
  if (isUpperCase(name)) return 'HELLO, ' + name + '!';
  return 'Hello, ' + name + '.';
}

function isUndefinedOrNull (name) {
  return name === undefined || name === null;
}

function isEmptyString (name) {
  return name === '';
}

function isUpperCase (name) {
  return name === name.toUpperCase();
}

module.exports = greet;
