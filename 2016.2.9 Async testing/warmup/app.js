// Create a function that returns true or false if a password string is valid or not given the following criteria.
//
// Length between 8 and 16 characters
// Can only contain letters (upper and lower), numbers, and the following symbols !,@,#,$,%,^,&,*,(,),_,-,+,=,?, commas not included.
// Must contain at least 1 upper case, 1 lower case, 1 number, 1 symbol.
// This pattern is often used when checking for passwords complexity.
//
// Please use the red/green/refactor pattern to write the tests and functionality.


module.exports = {
  lengthChecker: function(input){
    return input.length;
  },
  characterChecker: function(input){
    if(input.match(/^(?=.​*[a-zA-Z\d].*​)$/){
      if(input.match(/^[a-zA-Z\d!@#$%&*]$/)){
        if(input.match(/^{8,16}$/)){
            return true;
          } else {return false;}
        } else { return false;}
      } else {return false;}
    }
  }
// ^(?=.​*[a-zA-Z\d].*​)[a-zA-Z\d!@#$%&*]{7,}$
