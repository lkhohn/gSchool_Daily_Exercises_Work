'use strict';

// 1) create an object
// 2) create a second object
// 3) have one of the objects change the state of another object
// 4) change it so the objects have functions to change their own status

// var keyFob = {
//     battery: true,
//     unlockButton: false,
//     lockButton: false,
//     panicButton: false,
//     press: function(press) {
//       if (this.battery) {
//         if (this.unlockButton) {
//           return 'car is unlocked';
//         } else if (this.panicButton) {
//           return 'grab that car thief!'
//         } else {
//           return 'car is locked';
//         }
//       } else {
//         return 'car is locked';
//       }
//     }
//   }
//   keyFob.unlockButton = true;
//   keyFob.panicButton = true;
// console.log(keyFob.press());
//
// var car = {
//   engine: false,
//   open: false,
//   keyFobPress: function() {
//     if (keyFob.unlockButton) {
//       this.open = true;
//       return 'car is unlocked';
//     } else if (keyFob.panicButton) {
//       return 'car locked to stop that thief!';
//     } else {
//       return 'car is locked';
//     }
//   }
// }
// console.log(car.keyFobPress());
// console.log(car);
// console.log(keyFob);




// inheritance
var keyFob = function(){
  return {
    battery: true,
    unlockButton: false,
    lockButton: false,
    panicButton: false,
    key: false,
    mykey: function(){
      this.key = true;
    }
  }
}

var newKeyFob = function(){
  var myKeyFob = keyFob();
  // myKeyFob.myKey= function(){
    if(this.key){
      return 'car unlocked with key';
    }
    else {
      return 'car unlocked with fob';
    }
  // }
}



// var keyFob = function(){
//   return {
//     battery: true,
//     unlockButton: false,
//     lockButton: false,
//     panicButton: false,
//     press: function(press) {
//       if (this.battery) {
//         if (this.unlockButton) {
//           return 'car is unlocked';
//         } else if (this.panicButton) {
//           return 'grab that car thief!'
//         } else {
//           return 'car is locked';
//         }
//       } else {
//         return 'car is locked';
//       }
//     }
//   }
// }
  // console.log(keyFob);
  // keyFob.unlockButton = true;
  // var newKeyFob = keyFob();
  // console.log(newKeyFob);
  // newKeyFob.lockButton = true;
  // console.log(newKeyFob);

// var newKeyFob = function(){
//   var myKeyFob = keyFob();
//   myKeyFob.key = true;
//   myKeyFob.access = function(){
//     if(this.key){
//       this.lockButton = true;
//       return 'car unlocked with key';
//     }
//     else {
//       this.lockButton = true;
//       return 'car unlocked with fob';
//     }
//   }
// }
// // console.log(newKeyFob);
