// merge sorting
// note: the arrays must be sorted first for this to work
function merge(arr1, arr2){
  var mergedArr = [];
  var arr1_index = 0;
  var arr2_index = 0;
  while(arr1_index < arr1.length && arr2_index < arr2.length){
      if(arr1[arr1_index] < arr2[arr2_index]){
        mergedArr.push(arr1[arr1_index]);
        arr1_index++;
      } else if(arr1[arr1_index] > arr2[arr2_index]){
        mergedArr.push(arr2[arr2_index]);
        arr2_index++;
      } else if(arr1[arr1_index] === arr2[arr2_index]){
        mergedArr.push(arr1[arr1_index]);
        mergedArr.push(arr2[arr2_index]);
        arr1_index++;
        arr2_index++;
      }
  }
  if(arr1_index < arr1.length){
    mergedArr = mergedArr.concat(arr1.slice(arr1_index));
  }
  if(arr2_index < arr2.length){
    mergedArr = mergedArr.concat(arr2.slice(arr2_index));
  }
  return mergedArr;
}
// console.log(merge([1,5,7,10,11], [2,8,9]));


function mergeSort(list){
  if(list.length < 2){
    return list;
  }
  var middle = Math.floor(list.length / 2);
  var left = list.slice(0, middle);
  var right = list.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
// console.log(mergeSort([7,9,5,2,8,6,42,73,81,1,1047,12]));
console.log('merge sort ' + testPerformance(mergeSort, getRandomList(10)));
console.log('array.sort ' + testPerformance(arraySort, getRandomList(10)));

console.log('merge sort ' + testPerformance(mergeSort, getRandomList(100)));
console.log('array.sort ' + testPerformance(arraySort, getRandomList(100)));

console.log('merge sort ' + testPerformance(mergeSort, getRandomList(1000)));
console.log('array.sort ' + testPerformance(arraySort, getRandomList(1000)));

console.log('merge sort ' + testPerformance(mergeSort, getRandomList(10000)));
console.log('array.sort ' + testPerformance(arraySort, getRandomList(10000)));

console.log('merge sort ' + testPerformance(mergeSort, getRandomList(100000)));
console.log('array.sort ' + testPerformance(arraySort, getRandomList(100000)));



function arraySort(input){
  return input
}


function testPerformance(callback, args) {
  var t0 = process.hrtime();
  callback(args);
  var diff = process.hrtime(t0);
  return(diff[0] * 1e9 + diff[1]);
}

function getRandomList(length){
  var list = [];
  for(var i = 0; i < length; i++){
    list.push(Math.floor(Math.random() * length*2)+1);
  }
  return list;
}
