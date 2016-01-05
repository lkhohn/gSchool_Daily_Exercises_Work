// http://www.codewars.com/kata/559536379512a64472000053/train/javascript

function playPass(s, n) {
  // your code
  //   var splitWord = s.split('');
  //   console.log(splitWord);
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var lettersPos = Math.floor(Math.random() * letters.length);
  var sPos = Math.floor(Math.random() * s.length)
  var newString = s.replace(charAt(sPos), lettersPos)
  console.log(newString);


}

// Test cases
// Test.assertEquals(playPass("I LOVE YOU!!!", 1), "!!!vPz fWpM J")
// Test.assertEquals(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2),
// "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")




// http://www.codewars.com/kata/566859a83557837d9700001a/train/javascript
function getCount(n) {
  //n is an integer.
  //Code goes here!
  // loop through n and divide each integer by n[i]
  // count the number of times n was divisible by n[i]
  var count = 0;
  var numToString = n.toString();
  var splitString = numToString.split('');
  for (var i = 0; i < splitString.length; i++) {
    if (n % splitString[i] === 0) {
      count++;
    }
  }
  return count;
}

// Test cases
// Test.describe("GetCount", function() {
//   Test.it("Tests", function() {
//     Test.assertEquals(getCount(123),2);
//     Test.assertEquals(getCount(1230),5);
//     Test.assertEquals(getCount(1),0);
//     Test.assertEquals(getCount(1111111111),25);
//   });
// });
