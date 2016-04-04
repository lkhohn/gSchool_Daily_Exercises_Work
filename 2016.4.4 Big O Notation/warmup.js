var time = process.hrtime();
// [ 1800216, 25 ]

setTimeout(() => {
  var diff = process.hrtime(time);
  // [ 1, 552 ]

  function loop(size){
    var sum = 0;
    for(var i = 0; i < size; i++){
      sum++;
    }
  }
  loop(1000);
  loop(50000);
  console.log('single loop benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
  // benchmark took 1000000527 nanoseconds
}, 1000);


var time = process.hrtime();
// [ 1800216, 25 ]

setTimeout(() => {
  var diff = process.hrtime(time);
  // [ 1, 552 ]

  function doubleLoop(size){
    var sum = 0;
    for(var i = 0; i < size; i++){
      for(var j = 0; j < size; j++){
          sum++;
      }
    }
  }
  doubleLoop(1000);
  doubleLoop(50000);
  console.log('double loop benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
  // benchmark took 1000000527 nanoseconds
}, 1000);


var time = process.hrtime();
// [ 1800216, 25 ]

setTimeout(() => {
  var diff = process.hrtime(time);
  // [ 1, 552 ]

  function tripleLoop(size){
    var sum = 0;
    for(var i = 0; i < size; i++){
      for(var j = 0; j < size; j++){
        for(var x = 0; x < size; x++){
        sum++;
        }
      }
    }
  }
  tripleLoop(1000);
  tripleLoop(50000);
  console.log('triple loop benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
  // benchmark took 1000000527 nanoseconds
}, 1000);



// var time = process.hrtime();
// // [ 1800216, 25 ]
//
// setTimeout(() => {
//   var diff = process.hrtime(time);
//   // [ 1, 552 ]
//
//   function quadLoop(size){
//     var sum = 0;
//     for(var i = 0; i < size; i++){
//       for(var j = 0; j < size; j++){
//         for(var x = 0; x < size; x++){
//           for(var y = 0; y < size; y++){
//           sum++;
//           }
//         }
//       }
//     }
//   }
//   quadLoop(1000);
//   quadLoop(50000);
//   console.log('quad loop benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
//   // benchmark took 1000000527 nanoseconds
// }, 1000);
