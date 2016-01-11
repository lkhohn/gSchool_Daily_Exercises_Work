// Array Pair Sum

// Given an integer array, output all distinct pairs that sum up to a specific value k.
// Consider the fact that the same number can add up to k with its duplicates in the array.

// For example the array is [1, 1, 2, 3, 4] and the desired sum is 4. Should we output the pair (1, 3) twice or just once?
// Also do we output the reverse of a pair, meaning both (3, 1) and (1, 3)? Let's keep the output as short as possible and print each pair only once. So, we will output only one copy of (1, 3). Also note that we shouldn't output (2, 2) because it's not a pair of two distinct elements.

// Example
// f(10, [3, 4, 5, 6, 7]) // [ [4, 6], [3, 7] ]
// f(8, [3, 4, 5, 4, 4]) // [ [3, 5], [4, 4], [4, 4], [4, 4] ]
// f(10, [3, 5, 6, 8]) // []

// var sumPairs = [];

// function pairs(sum, array) {
// loop through the array
// at each position, add another position together
// if they equal the sum, then push to sumPairs array
//   for (var i = 0; i < array.length-2; i++) {
//     for (var j = 0; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         var sumNum = array[i] + array[j];
//         if (sumNum === sum) {
//           sumPairs.push(array[i], array[j]);
//         }
//       }
//     }
//   }
//   console.log(sumPairs);
// }

// pairs(10, [3, 4, 5, 6, 7]);
// pairs(8, [3, 4, 5, 4, 4]);



// var sumPairs = [];

// function pairs(sum, array) {
//   // loop through the array
//   // at each position, add another position together
//   // if they equal the sum, then push to sumPairs array
//   for (var i = 0; i < array.length - 1; i++) {
//     for (var j = 0; j < array.length - 1; j++) {
//       if (array[i] === array[j] && array.indexOf(i) !== array.indexOf(j)) {
//         // and arrayOne position !== arrayTwo position
//         // then push those to the array
//         var sumNum = array[i] + array[j];
//         if (sumNum === sum) {
//           sumPairs.push(array[i], array[j]);
//         }
//       } else if (array[i] !== array[j] && array.indexOf(i) === array.indexOf(j)) {
//         var sumNum = array[i] + array[j];
//         if (sumNum === sum) {
//           sumPairs.push(array[i], array[j]);
//         }
//       }
//     }
//   }
//   console.log(sumPairs);
// }

// pairs(10, [3, 4, 5, 6, 7]);
// pairs(8, [3, 4, 5, 4, 4]);
// pairs(10, [3, 5, 6, 8]);


// CORRECT ANSWER
function pairs(sum, array) {

  var sumPairs = [];
  var used = [];
  for (var i = 0; i < array.length; i++) {
    var first = pairs[i];
    used.push(true);
    for (var j = 0; j < array.length; j++) {
      if (sum === array[i] + array[j]) {
        if (!used[j]) {
          sumPairs.push(array[i], array[j]);
        }
      }
    }
  }
  console.log(sumPairs);
}

// pairs(10, [3, 4, 5, 6, 7]);
// pairs(8, [3, 4, 5, 4, 4]);
pairs(10, [3, 5, 6, 8]);
