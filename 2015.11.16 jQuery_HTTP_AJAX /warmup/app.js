// Write a function that takes an acronym as an argument and returns a sentence that it could represent.
// Example:
// backronym('ABCD'); // => April Building Caller District

// var backronym = {
//   'ABCD': 'April Building Caller District',
//   'OMG': 'Oh My God',
//   'LOL': 'Laugh Out Loud',
//   'TTYL': 'Talk To You Later',
//   'LYLAS': 'Love Ya Like A Sister'
// };
//
// function sentenceFinder(input){
// for(var key in backronym){
//   if(key===input){
//     console.log(backronym[key]);
//   }
// }
// }
// sentenceFinder('OMG');



var letterKey = {
  'A': 'Alfa',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliett',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'X-ray',
  'Y': 'Yankee',
  'Z': "Zulu"
}

var sentenceGenerator = [];
function letterFinder(input){
for(var key in letterKey){
  for(var i=0; i<input.length; i++){
    if(key===input[i]){
      sentenceGenerator.push(letterKey[key]);
      var backronym=sentenceGenerator.toString().replace(',', ' ');
    }
  }
}
console.log(backronym);
}
letterFinder('ABCD');
