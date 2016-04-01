// function countStudents(students){
//   if(students.length === 1) {
//     return 1;
//   } else {
//     return countStudents(students.slice(students,1)) + 1;
//   }
// }
// var g17AfterHiringDay = 18;
// console.log(countStudents(g17AfterHiringDay));


function factorial(number){
  if(number === 0) {
    return 1;
  }
  else {
    return number * factorial(number - 1)
  }
}
console.log(factorial(10));


function factorialOther(number){
  while(number >=0) {
    return number * factorial(number - 1)
  }
}
console.log(factorialOther(10));


function anotherFactorial(number){
    var firstNumber = 1;
    for(var i = 1; i <= number; i++){
      firstNumber = firstNumber * i
    }
    return firstNumber;
  }
console.log(anotherFactorial(10));


function fibonacci(number){
  if(number <= 2 ){
    return 1
  }
  else {
    return fibonacci(number - 2) + fibonacci(number - 1)
  }
}
console.log(fibonacci(10))


function anotherFibonacci(number){
  var previous = 0;
  var current = 1;
  var hold = 0;
  if( number <= 1){
    return number;
  }
  else{
    for(var i = 1; i < number; i++){
      hold = previous;
      previous = current;
      current = previous + hold;
    }
  return current;
  }
}
console.log(anotherFibonacci(10));
