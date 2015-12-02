// A function called "intersection" that takes two arrays as arguments and returns an array of the items that are in both input arrays. For example intersection([1,2,3], [1,3,5]) should return [1,3].

// var newArray = [];
//
// function intersection(a, b) {
//   a.sort();
//   // console.log(a);
//   b.sort();
//   // console.log(b);
//   for (var i = 0; i < a.length; i += 1) {
//     if (b.indexOf(a[i]) > -1) {
//       // console.log(a[i]);
//       newArray.push(a[i]);
//       // console.log(newArray);
//     }
//   }
//   return newArray;
// }
// intersection([1, 2, 3], [1, 3, 5]);
// console.log(newArray);


// A function caleed "union" that takes two arrays as arguments and returns an array of items from both arrays. For example, union([1,2,3], [4,5,6]) should return [1,2,3,4,5,6].

// function union(a, b) {
//   a.sort();
//   // console.log(a);
//   b.sort();
//   // console.log(b);
//   var newArray = a.concat(b);
//   console.log(newArray);
// }
// union([1, 2, 3], [4, 5, 6]);


// A function caleed "zip" that takes two arrays as arguments and returns an array of items from both arrays combined in an alternating manner. For example, zip([1,2,3], [4,5,6]) should return [1,4,2,5,3,6].
var newArray = [];

function zip(a, b) {
  // alternate between indexs of both arrays and push to new array
  for (var i = 0; i < a.length; i++) {
    // console.log(a[i]);
    // console.log(b[i]);
    newArray.push(a[i]);
    newArray.push(b[i]);

  }
}
zip([1, 2, 3], [4, 5, 6]);
console.log(newArray);
