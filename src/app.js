function greet (name) {
  if (isUndefinedOrNull(name)) return 'Hello, my friend.';
  if (isEmptyString(name)) return 'Hello, my friend.';
  if (name && typeof name === 'object') return multiName(name);
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

function multiName (name) {
  if (name.length === 2) {
    return `Hello, ${name[0]} and ${name[1]}.`;
  } else {
    return `Hello, ${name[0]}, ${name[1]} and ${name[2]}.`;
  }
}

module.exports = greet;
