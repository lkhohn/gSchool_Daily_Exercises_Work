// Warmup Exercise
// Largest Palindrome Product

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.




function calculator(num1, num2){
  var product = num1 * num2;
  console.log(product);
  isPalindrome(product);

}
calculator(91, 99);


function isPalindrome (product) {
  var productToString = product.toString();
    if (productToString == productToString.split('').reverse().join('')) {
        console.log(productToString + ' is palindrome.');
    }
    else {
        console.log(productToString + ' is not palindrome.');
    }
}
