// Part One
// Create a function that takes in a number and calculates its factorial.

// Part Two
// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Find the sum of all numbers which are equal to the sum of the factorial of their digits.
// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

var num=0;
function factorial(num) {
   if(num == 0) {
     return 1;
   }
   if(num < 0 ) {
     return undefined;
   }
   for(var i = num; --i; ) {
      num *= i;
   }
   return num;
}
console.log(factorial(5));


var factArray = [];
function factSum(num1){
  // if the return of factorial function === returns the sum of the digits


  for(var i = num1; i--;){
    num1 +=1
  }
console.log(num1);
}
factSum(145);
