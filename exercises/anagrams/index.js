// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  //   var strA = stringA.replace(/[^\w]/, "").toLowerCase();
  //   var strB = stringB.replace(/[^\w]/, "").toLowerCase();

  //   if (strA.length !== strB.length) return false;

  //   var charsA = strA.split("").reduce((result, char) => {
  //     result[char] ? result[char]++ : (result[char] = 0);
  //     return result;
  //   }, {});

  //   var charsB = strB.split("").reduce((result, char) => {
  //     result[char] ? result[char]++ : (result[char] = 0);
  //     return result;
  //   }, {});

  //   for (var x in charsA) {
  //     if (charsB[x] !== charsA[x]) return false;
  //   }

  //   return true;

  var strA = stringA
    .replace(/[^\w]/, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  var strB = stringB
    .replace(/[^\w]/, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return strA === strB;
}

module.exports = anagrams;
