/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/

// var container = document.getElementById('container');
// function eventHandler (event) {
//  console.log('p clicked!');
// }
// container.addEventListener('click', eventHandler)

// with jQuery
// $('body').on('click', function () {
//     console.log('body clicked!')
// })

//Stop Button
// var makeRed = document.getElementById('stopButton');
// function changeColorRed (click){
//   document.getElementById('stopLight').style.backgroundColor='red';
//   document.getElementById('slowLight').style.backgroundColor='black';
//   document.getElementById('gopLight').style.backgroundColor='black';
// }
// makeRed.addEventListener('click', changeColorRed);

// with jQuery
var $makeRed = $('#stopButton');
$makeRed.on('click', function(){
  $('#stopLight').css('background-color', 'red');
  $('#slowLight').css('background-color', 'black');
  $('#goLight').css('background-color', 'black');
});


// //Slow Button
// var makeYellow = document.getElementById('slowButton');
// function changeColorYellow (click){
//   document.getElementById('slowLight').style.backgroundColor='yellow';
//   document.getElementById('goLight').style.backgroundColor='black';
//   document.getElementById('stopLight').style.backgroundColor='black';
// }
// makeYellow.addEventListener("click", changeColorYellow);

// with jQuery
var $makeYellow = $('#slowButton');
$makeYellow.on('click', function(){
  $('#stopLight').css('background-color', 'black');
  $('#slowLight').css('background-color', 'yellow');
  $('#goLight').css('background-color', 'black');
});


// //Go Button
// var makeGreen = document.getElementById('goButton');
// function changeColorGreen (click){
//   document.getElementById('goLight').style.backgroundColor='green';
//   document.getElementById('stopLight').style.backgroundColor='black';
//   document.getElementById('slowLight').style.backgroundColor='black';
// }
// makeGreen.addEventListener("click", changeColorGreen);

// with jQuery
var $makeGreen = $('#goButton');
$makeGreen.on('click', function(){
  $('#stopLight').css('background-color', 'black');
  $('#slowLight').css('background-color', 'black');
  $('#goLight').css('background-color', 'green');
});
