//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

// var numArray = [];
// for(var i=1; i<=1000; i++){
//    if(i%3===0 || i%5===0){
//       numArray.push(i);
// }
// }
// var total=0;
// for(var i in numArray) {
//   total += numArray[i];
// }
// console.log(total);


// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
var fArray= [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
var x=0;
var y=0;
while(x<1000000){
  x=fArray[fArray.length-1]+fArray[fArray.length-2];

  fArray.push(x);
}
fArray.forEach(evenAdd);
function evenAdd(element){
  if(element%2===0){
    y+= element;
  }
}
console.log(fArray);
console.log(y);