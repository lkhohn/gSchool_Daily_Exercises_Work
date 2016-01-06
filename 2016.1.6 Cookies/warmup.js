// Warmup Exercise
// Largest Palindrome Product

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

var palindromes = [];

function calculator(num, num2) {
  for (var num = 100; num < 999; num++) {
    for (var num2 = 100; num2 < 999; num2++) {
      var product = num * num2;
      isPalindrome(product);
    }
  }
}
calculator(100, 100)

function isPalindrome(product) {
  var productToString = product.toString();
  if (productToString == productToString.split('').reverse().join('')) {
    palindromes.push(productToString);
  }
}
getMaxOfArray(palindromes);


function getMaxOfArray(palindromes) {
  var maxNum = Math.max.apply(null, palindromes);
  console.log(maxNum);
}
