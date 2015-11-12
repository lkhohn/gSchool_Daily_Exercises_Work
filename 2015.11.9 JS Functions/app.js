// Define a function called sum that takes two numbers as arguments and returns their sum.
// function sum(a,b){
//   y = a + b
// }
// sum(2,1);
// console.log(y);

// Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.
// function isEqual(x,y){
// if(x<5 && y<5){
//   console.log('true');
// }
// else {
//   console.log('false');
// }
// }
// isEqual(6,6);

// Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments).
// Return a warning if the discount amount is greater than 100 or less that 0 percent.

// function discountPercentage (a, b){
// var originalAmount = a;
// var discountPercentage = b;
// var discountAmount = (originalAmount)*((discountPercentage * 0.01));
// var totalCost= originalAmount-discountAmount;
//   if(discountAmount>=100 || discountAmount<=0){
//     console.log("warning");
//   }
//   else {
// console.log(totalCost);
// }
// }
// discountPercentage(100,100);

// Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized.
// Assume that each individual word is separated by only one space.
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
// stringCapitalize('hello world');

// Define a function called evenNumbers that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.
// function evenNumber(int){
//   var returnArray = [];
//   for(var i=0; i<=int; i+=2){
//     returnArray.push(i);
//   }
//   return returnArray;
// }
// console.log(evenNumber(Math.random()*99+1));


// Define a function called isDivisible that takes two arguments and returns a boolean.
// Return true if the first argument is divisible by the second; otherwise, return false
// function isDivisible(x,y){
// if(x%y===0){
//   console.log('true');
// }
// else {
//   console.log('false');
// }
// }
// isDivisible(12,5);

// Bonus: Write a function called oddNumbers that takes a random integer, from 0 to 100.
// If the number is greater than 40 then output all the odd integers from 40 to the random number.
// If the number is less than 40, output all the odd integers from 0 to 40.
// function evenNumber(int){
//   if(int>=40){
//     for(var i=40; i<=int; i++){
//       if(i %2===1){
//         console.log(i);
//   }
// }
// } else {
//     for(var i=0; i<=40; i++){
//       if(i %2===1){
//         console.log(i);
//       }
//     }
// }
// }
// (evenNumber(Math.random()*99+1));


// Define a function called oldestPerson that takes an object with names as keys and ages as values
// (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
// var directory = {
//   'Chuck':22,
//   'Brian':46,
//   'Lindsay':29
// };
// function oldestPerson (x, y){
// var names = Object.keys(directory);
// if(directory[x]<directory[y]){
//   console.log(y);
// }
// else if(directory[x]>directory[y]){
//   console.log(x);
// }
// }
// oldestPerson('Lindsay', 'Chuck');


// Define a function called longestWord that takes a string and returns the longest word in the string.
// function longestWord(string){
// var stringSeparator = string.split(" ");
// for(var i=0; i<stringSeparator.length; i++){
//     var stringCount = stringSeparator[i].length;
//     var max = Math.max(stringCount);
//     }
//     console.log(max);
// }
// longestWord("My name is Lindsay");


// Refactor the longestWord function so that it ignores punctuation.

// function longestWord(string){
// function longestWord(string){
// var removePunct = string.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g," ");
// var stringSeparator = removePunct.split(" ");
// for(var i=0; i<stringSeparator.length; i++){
//     var stringCount = stringSeparator[i].length;
//     var max = Math.max(stringCount);
//     }
//     console.log(max);
// }
// longestWord("My name is Lindsay !");


// Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.
// console.log(5*4*3*2*1);


// Bonus: Write a function called palindrome that takes a string as an argument and returns the string in reversed order.
// Return true if the string is the same as the reversed string, otherwise return false.

var palindromArray=['bob', 'cat'];













// sadfsd
