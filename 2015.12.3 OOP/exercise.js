var Name = function() {
  var _firstName = 'Lindsay';
  var _lastName = 'Hohn';
  return {
    getfirstName: function() {
      return _firstName;
    },
    getLastName: function() {
      return _lastName;
    },
    setFirstName: function(newFirstName){
      _firstName = newFirstName;
    },
    setLastName: function(newLastName){
      _lastName = newLastName;
    }
  }
}
var myName = new Name();
console.log(myName.getfirstName());

var UserInput = function(){
  myName.setFirstName = 'Beth';

}
var userInputResult = new UserInput;
console.log(userInputResult.getfirstName());
