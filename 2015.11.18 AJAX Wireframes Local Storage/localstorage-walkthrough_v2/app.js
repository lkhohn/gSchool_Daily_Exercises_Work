window.onload = function(){

  var submitButton = document.querySelector('form div:last-child input');
  var inputColors = document.querySelectorAll('input');
  var body = document.querySelector('body');

  // returns day of the week, with 0 being Sunday, 1 being Monday, 2 being Tuesday, etc
  var currentdate = new Date(Date.now());
  var today = currentdate.getDay();
  document.querySelector('#today').innerText = currentdate;

  var dayColors = {};

  getDayColorsFromLocalStorage();

  submitButton.addEventListener("click", function(event){
    event.preventDefault();
    updateDayColors();
    setColors();
    addToLocalStorage();
  });

  function setColors(){
    // set the background color to todays color
    var todaysColor = dayColors[today];
    // console.log(todaysColor);
    document.querySelector('body').style.backgroundColor=todaysColor;
  }

  function updateDayColors(){
    // loop through the input boxes that are type color
    // Get their values and ids
    // Add it to the dayColors object where the key is the id of each input i.e. monday's input id="1"
    for (var i = 0; i < inputColors.length -1; i++) {
      var colorValue = inputColors[i].value;
      // console.log(colorValue);
      var day = inputColors[i].id;
      // console.log(day);
      dayColors[day] = colorValue;
      // console.log(dayColors[day]);
    }
  }

  function addToLocalStorage(){
    // stringify the dayColors object
    data = JSON.stringify(dayColors);
    // console.log(data);
    // save it to localStorage as window.localStorage.colorData
    data = window.localStorage.colorData;
    //add to local storage **WHY USE JSON>stringify and not the variable data?
    localStorage.setItem('colorData', JSON.stringify(dayColors) );
  }

  function getDayColorsFromLocalStorage(){
    // check if window.localStorage.colorData is not undefined
      if(window.localStorage.colorData == 'undefined'){
        console.log('undefined');
    }
    // JSON.parse the colorData
    var colorData = JSON.parse(window.localStorage.colorData);
    console.log(colorData);
    // Updated the background color to todays color using the today as the key
    var todaysColor=colorData[today];
    document.querySelector('body').style.backgroundColor=todaysColor;
  }
};
