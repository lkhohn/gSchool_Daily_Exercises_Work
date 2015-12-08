// Typoglycemia
// sample input
// According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are,
// the only important thing is that the first and last letter be in the right place.
// The rest can be a total mess and you can still read it without a problem.
// This is because the human mind does not read every letter by itself, but the word as a whole.
// Such a condition is appropriately called Typoglycemia.

function Typoglycemia(input) {
  var input = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place.";
  var splitString = input.split("");
  for (var i = splitString.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temporaryValue = splitString[i];
    splitString[i] = splitString[j];
    splitString[j] = temporaryValue;
  }
  return splitString.join("");
}
console.log(Typoglycemia());



// for (var i = array.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//   }
//   return array;

function Typoglycemia(input) {
  var input = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place.";
  var words = input.split(" ");
  // console.log(words);
  var innerWord = words.slice(1, words.length -1);
  // console.log(innerWord);

  for (var i = innerWord.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temporaryValue = innerWord[i];
    innerWord[i] = innerWord[j];
    innerWord[j] = temporaryValue;
  }
  return innerWord.join(" ");
  }


console.log(Typoglycemia());
