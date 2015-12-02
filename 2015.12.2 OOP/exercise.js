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
  keyFobPress: false,
  open: function(){
    if(keyFob.unlockButton){
      return 'car is unlocked';
    }
    else{
      return 'car is locked';
    }
  }
}
console.log(car.open());
