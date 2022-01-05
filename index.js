const _ = require('lodash');

console.log(_.last(['one', 'two']));

console.log('Hello, Almaz!');

function reverse(s) {
  return s && s[s.length - 1] + reverse(s.slice(0, -1));
}

console.log(reverse('motherFucker'));
