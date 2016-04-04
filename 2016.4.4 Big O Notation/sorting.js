function getRandomList(length){
  var list = [];
  for(var i = 0; i < length; i++){
    list.push(Math.floor(Math.random() * length*2)+1);
  }
  return list;
}

function testPerformance(callback, args) {
  var t0 = process.hrtime();
  callback(args);
  var diff = process.hrtime(t0);
  return(diff[0] * 1e9 + diff[1]);
}

// bubble sort
function bubble(arr){
  var sorted = false;
  while(!sorted){
    sorted = true;
    for(var i = 0; i < arr.length - 1; i++){
      // console.log(arr[i]);
      // console.log(arr);
      if(arr[i] > arr[i + 1]){
         var temp = arr[i];
         arr[i] = arr[i + 1];
         arr[i + 1] = temp;
        //  console.log(arr);
         sorted = false;
      }
    }
  }
  return arr;
}
console.log('bubble sort ' + testPerformance(bubble, getRandomList(1000)));
console.log('bubble sort ' + testPerformance(bubble, getRandomList(10000)));
console.log('bubble sort ' + testPerformance(bubble, getRandomList(100000)));


// insertion sort
function insertionSort(arr){
  for(var i = 1; i < arr.length; i++){
    var j = i;
    while(j > 0 && arr[j - 1] > arr[j]){
      var temp = arr[j - 1];
      arr[j - 1] = arr[j]
      arr[j] = temp;
      j--;
    }
  }
  return arr;
}
console.log('insertion sort ' + testPerformance(insertionSort, getRandomList(1000)));
console.log('insertion sort ' + testPerformance(insertionSort, getRandomList(10000)));
console.log('insertion sort ' + testPerformance(insertionSort, getRandomList(100000)));


// selection sort
function selectionSort(arr){
  var current, isSmaller;
  for(current = 0; current < arr.length - 1; current++){
    var currentMin = current;
    for(isSmaller = current + 1; isSmaller < arr.length; isSmaller++){
      if(arr[isSmaller] < arr[currentMin]){
        currentMin = isSmaller;
      }
    }
    if(currentMin != current){
      var temp = arr[currentMin];
      arr[currentMin] = arr[current];
      arr[current] = temp;
    }
  }
  return arr;
}
console.log('selection sort ' + testPerformance(selectionSort, getRandomList(1000)));
console.log('selection sort ' + testPerformance(selectionSort, getRandomList(10000)));
console.log('selection sort ' + testPerformance(selectionSort, getRandomList(100000)));
