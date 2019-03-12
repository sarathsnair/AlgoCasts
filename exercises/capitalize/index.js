// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var words = str.split(" ");
  //   return words
  //     .reduce((result, word) => {
  //       var capitalizedWord = word[0].toUpperCase() + word.slice(1);
  //       return result + " " + capitalizedWord;
  //     }, "")
  //     .trim();

  //   var result = "";
  //   for (var i = 0; i < words.length; i++) {
  //     result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
  //   }
  //   return result.trim();

  //   var capitalized = [];
  //   words.forEach(element => {
  //     capitalized.push(element[0].toUpperCase() + element.slice(1));
  //   });
  //   return capitalized.join(' ');

  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = capitalize;
