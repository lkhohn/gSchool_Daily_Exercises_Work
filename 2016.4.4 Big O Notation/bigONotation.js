function myFunc(input){
  var sum = 0;
  for(var i=0; i<input.length; i++){
    if(input[i]===15){
      return sum + input[i]
    }

  }
}
myFunc([1,2,3,4,15]);
