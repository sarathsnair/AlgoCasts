// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar,
    maxCount = 0;
  let obj = str.split("").reduce((obj, char) => {
    obj[char] = obj[char] + 1 || 1;
    if (obj[char] && obj[char] > maxCount) {
      maxCount = obj[char];
      maxChar = char;
    }
    return obj;
  }, {});

  return maxChar;
}

module.exports = maxChar;
