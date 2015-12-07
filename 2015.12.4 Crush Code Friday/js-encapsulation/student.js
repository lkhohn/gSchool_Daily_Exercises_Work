function Student(firstName, lastName) {
  var _firstName= firstName;
  var _lastName = lastName;
  return{
  getFirstName: function(){
    return _firstName;
  },
  getLastName: function(){
    return _lastName;
  },
  fullName: function(){
    return _firstName + ' ' + _lastName;
  }
};
}

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Student;
