// function helloWorld(){
//   return 'hello world';
// }
// var hello = helloWorld();
// console.log(hello);
// //
// function power (){
//     console.log(2*2);
// }
// power();

// function power (){
//   return (2*2);
// }
// var result = power();
// console.log(result);

// function square(num){
// var squared=num*num;
// return squared;
// }
// var result=square(square(2));
// console.log(result);

// function fareToCel(fare){
// var cel=(fare-32)*0.55;
// return cel;
// }
// var cel=fareToCel(65);
// console.log(cel);

// function power(num, pow){
//   if(typeof power==="undefined"){
//     pow=2;
//   }
//   var result=1;
//   for(var i=0; i< pow; i++){
//     result = result * num;
//   }
//   return result;
// }
// var result = power(2*2);
// console.log(result);

// function convertTemp(temp, fareToCel){
//   var result=0;
//   if(typeof fareToCel==="undefined" || fareToCel===true){
//     result=(temp-32)*5/9;
//   }
//   else{
//     result=temp*5/9+32;
//   }
//   return result;
// }
// console.log(convertTemp(32, true));
// console.log(convertTemp(0, false));
// console.log(convertTemp(32));

// function loopIt(){
//   for(var i=0; i< arguments.length; i++){
//     console.log(arguments[i]);
//   }
// }
// loopIt("Monday", "Tuesday", "Wednesday", "Thursday", "Friday");

function clothes(temp) {
  var message="";
  if (temp>=30){
  message = "2 tops, 1 bottom. long sleeve + vest + tights";
  }
  else if (temp >= 10 && temp <= 20){
    message = "2 tops, 2 bottoms. base layer + jacket + tights + pants";
  }
  else if (temp < 10 && temp >= 0) {
    message = "3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants";
  }
  else if (temp < 0 && temp > -20) {
  message = "3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask";
  }
  else if (temp <=-20){
  message = "don't run";
  }
  console.log(message);
}
clothes(-20);
