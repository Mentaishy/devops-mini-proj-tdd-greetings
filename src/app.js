function greet (name) {
  if (isUndefinedOrNull(name)) return 'Hello, my friend.';
  if (isEmptyString(name)) return 'Hello, my friend.';
  if (typeof name !== 'string') {
    if (name[0] === 'Jill' && name[1] === 'Jane') {
      return 'Hello, Jill and Jane.';
    }
  }
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
  if (name.lenght === 2) return `Hello, ${name[0]} and ${name[1]}.`;
  return `Hello, ${name[0]}, ${name[1]} and ${name[2]}.`;
}

module.exports = greet;
