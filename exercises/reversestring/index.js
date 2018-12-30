// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // solution 1
  // return str.split('').reverse().join('');

  // solution 2
  // var reversed = '';
  // for(var i=str.length-1;i>=0;i--) {
  //     reversed += str[i];
  // }

  // return reversed;

  // solution 3 - using reduce()
  debugger;
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

module.exports = reverse;
