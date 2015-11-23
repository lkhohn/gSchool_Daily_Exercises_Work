// Use the forEach method to implement a function that returns the average number within an array.
// Example:
// getAverage([1,2,3]); // => 2



function average (array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
      total += array[i];
  }
  var avg = total / array.length;
  console.log(avg);
}
average([1,2,3]);
