function parser(input){
  var stack = [];
  if(input.length % 2 !== 0 ){
    return false;
  }
  for(var i=0; i<input.length; i++){
    var character = input[i];
      if(character === '[' || character === '{' || character === '('){
        stack.push(character);
      }
      else {
        var stackCharacter = stack.pop();
        switch (stackCharacter) {
          case '[':
            if(character !== ']'){
              return false;
            }
            break;
          case '{':
            if(character !== '}'){
              return false;
            }
            break;
          case '(':
            if(character !== ')'){
              return false;
            }
            break;
          default:
            console.log('wtf');
            return false;
          }
        }
      }
  return true;
}
console.log(parser('({[]})'));
console.log(parser('({[}])'));
console.log(parser('({[]})()'));
