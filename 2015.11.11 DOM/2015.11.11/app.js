// Define a function called stringCapitalize
// that takes a string as an argument and returns the same string with each letter of the first word capitalized.
// Use Array.map().

// function stringCapitalize (list){
// var newArray = [];
// var wholeWord = list.split(" ")
// for(var i=0; i<wholeWord.length; i++){
//   var firstLetter = wholeWord[i].charAt(0).toUpperCase();
//   var halfWord = wholeWord[i].slice(1);
//   newArray.push(firstLetter+halfWord);
// }
// console.log(newArray);
// }


// var arr = ['lindsay', 'hohn'];
// var newArray = arr.map(function(string){
//   return string.charAt(0).toUpperCase() + string.slice(1);
// })
// }
// console.log(newArray);

// function stringCapitalize(input){
// var arr = input.split(' ');
// var newArray = arr.map(function(string){
// return string.charAt(0).toUpperCase() + string.slice(1);
// })
// console.log(newArray);
// }
// stringCapitalize('lindsay hohn');


// Define a function called factorial that takes a number as an argument and returns the factorial. Use Array.reduce().
function factorial(num){
  var arr=[];
  for(i=num; i>1; i--){
    arr.push(i);
  }
var fact = arr.reduce(multiply);
return fact;
}
function multiply(num, currentValue){
  return num * currentValue;
}
console.log(factorial(10));
