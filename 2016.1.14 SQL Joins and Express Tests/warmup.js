function evaluate(arr){
  // var stringNum=arr.toString();
  var stringNum = arr.join('');
  // console.log(stringNum);
  console.log(eval(stringNum));
}


evaluate(['10', '+', '20', '*','3']);
evaluate(['10', '+', '20', '*','3', '+', '30']);
evaluate(['10', '+', '20', '*','3', '*']);


// Test.assertSimilar(evaluate(['10', '+', '20', '*','3']), 70);
// Test.assertSimilar(evaluate(['10', '+', '20', '*','3', '+', '30']), 100);
// Test.assertSimilar(evaluate(['10', '+', '20', '*','3', '*']), undefined);
// Test.assertSimilar(evaluate(['+', '10', '+', '20', '*','3']), undefined);
// Test.assertSimilar(evaluate(['10', '10', '+', '20', '*','3']), undefined);
