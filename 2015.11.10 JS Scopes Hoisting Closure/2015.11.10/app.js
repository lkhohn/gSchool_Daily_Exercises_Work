// Create an empty javascript file and import it into your HTML file.


// Use JS to add styles to error-low and error-high high to make their text red and bold.
// document.getElementsByClassName('error-low')[0].style['color'] = 'red';
// document.getElementsByClassName('error-low')[0].style['font-weight'] = 'bold';
//
// document.getElementsByClassName('error-high')[0].style['color']= 'red';
// document.getElementsByClassName('error-high')[0].style['font-weight']= 'bold';

// Use JS to add styles to success to make its text green and italicized.
// document.getElementsByClassName('success')[0].style['color']='green';
// document.getElementsByClassName('success')[0].style['font-style']='italic';

// Use JS to add styles that hide error-low, error-high and success
// document.getElementsByClassName('error-low')[0].style['display']='none';
// document.getElementsByClassName('error-high')[0].style['display']='none';
// document.getElementsByClassName('success')[0].style['display']='none';


// The JS should generate a random number between 1 & 100.
var randomNumber = Math.floor(Math.random()*10+1);
console.log(randomNumber);
var input = document.getElementsByClassName('text-box').value;

// The JS should select the button and add the following code to it:
  document.getElementById('click-me').addEventListener("click", function(){
      if(input>randomNumber){
        document.getElementsByClassName('error-high')[0].style['color']= 'red';
        document.getElementsByClassName('error-high')[0].style['font-weight']= 'bold';
        document.getElementsByClassName('error-low')[0].style['display']='none';
        document.getElementsByClassName('success')[0].style['display']='none';
      }
      else if(input=randomNumber){
        document.getElementsByClassName('success')[0].style['color']='green';
        document.getElementsByClassName('success')[0].style['font-style']='italic';
        document.getElementsByClassName('error-low')[0].style['display']='none';
        document.getElementsByClassName('error-high')[0].style['display']='none';
      }
      else if(input<randomNumber){
        document.getElementsByClassName('error-low')[0].style['color'] = 'red';
        document.getElementsByClassName('error-low')[0].style['font-weight'] = 'bold';
        document.getElementsByClassName('error-low')[0].style['display']='none';
      }
    //Add all the code you want to happen when the button is pressed here.
  });


// When a user inputs a number into the HTML and presses the button it should:
// if the number is too high make error-high visible, and hide all the other error and success divs
// if the number is too high make error-low visible, and hide all the other error and success divs
// if the number is too high make success visible, and hide all the other error and success divs
