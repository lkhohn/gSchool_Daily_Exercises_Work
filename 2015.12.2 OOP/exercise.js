'use strict';

var keyFob = {
  battery: false,
  unlockButton: false,
  lockButton: true,
  panicButton: false,
  press: function(press) {
    if (this.battery) {
      if (this.unlockButton) {
        return 'car is unlocked';
      } else {
        return 'car is locked';
      }
    } else {
      return 'car is locked';
    }
  }
}
keyFob.battery = true;
keyFob.unlockButton = true;
console.log(keyFob.press());


var car = {
  engine: false,
  open: false,
  keyFobPress: function(){
    if(keyFob.unlockButton){
      this.open=true;
      return 'car is unlocked';
    }
    else{
      return 'car is locked';
    }
  }
}
console.log(car.keyFobPress());
console.log(car);


// 1) create an object
// 2) create a second object
// 3) have one of the objects change the state of another object
// 4) change it so the objects have functions to change their own status
