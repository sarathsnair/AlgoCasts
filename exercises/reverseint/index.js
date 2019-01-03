// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //   let number = Math.abs(n);
  //   let reversed = 0;
  //   let digit = 0;

  //   while (number) {
  //     digit = number % 10;
  //     reversed = reversed * 10 + digit;
  //     number = Math.floor(number/10);
  //   }

  //   return reversed * Math.sign(n);
  const reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
