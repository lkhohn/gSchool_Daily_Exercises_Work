// set data to initially be hidden
var wrapper = document.querySelector('div');
wrapper.style.display = "none";

// get input from user
// select the dom input
var cityInput = document.querySelector('#cityInput');
var stateInput = document.querySelector('#stateInput');

readSearchData(cityInput, stateInput);

var button = document.querySelector('button');

// read input value after specific event
button.addEventListener('click', function(event){
  event.preventDefault();
  findTravelData();
});

function findTravelData(){

  saveSearchData(cityInput.value, stateInput.value);

  var locationNode = document.querySelector('#location');

// use city for api calls
// make api call to ZipCodeAPI for distance
  // we'll need zip code for distance api call
  // first make api call to city-zips for zip code
  var cityZipsReq = new XMLHttpRequest();
  var cityZip;
  cityZipsReq.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200) {
      cityZip = JSON.parse(this.responseText).zip_codes[0];

    // then use distance method for distance
    var distanceReq = new XMLHttpRequest();
    distanceReq.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        var distance = JSON.parse(this.responseText).distance;
        var distanceNode = document.querySelector('#distance');

        // make api call to OpenWeatherSomething for weather
        var weatherReq = new XMLHttpRequest();
        weatherReq.onreadystatechange = function(){
          if (this.readyState === 4 && this.status === 200) {
            var weather = JSON.parse(this.responseText);
            // use weather from api to update page
            var weatherNode = document.querySelector('#weather');
            weatherNode.innerHTML = convertKelvinToFahrenheit(weather.main.temp) + ' degrees Fahrenheit';

            // use distance from api to update page
            distanceNode.innerHTML = distance;
            locationNode.innerHTML = cityInput.value + ', ' + stateInput.value;

            // we have all our data, now show the wrapper element
            wrapper.style.display = "block";
          }
        }
        weatherReq.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip='+cityZip+',us&appid=2de143494c0b295cca9337e1e96b00e0');
        weatherReq.send();
      }
    }
    distanceReq.open('GET', 'https://www.zipcodeapi.com/rest/js-kw0qquu6quYB6tAoscqgZ6CusdesoN4Ij58KzDRZ8PBejcCMp23o9GTBT74hU9Ze/distance.json/80524/'+cityZip+'/mile');
    distanceReq.send();
    }
  }
  cityZipsReq.open('GET', 'https://www.zipcodeapi.com/rest/js-kw0qquu6quYB6tAoscqgZ6CusdesoN4Ij58KzDRZ8PBejcCMp23o9GTBT74hU9Ze/city-zips.json/'+cityInput.value+'/'+stateInput.value);
  cityZipsReq.send();
}

// use returned data to update page
// clean up user experience so that all data seems to come at once

function convertKelvinToFahrenheit(kelvinTemp) {
  var fahrenheitTemp = kelvinTemp * 9/5 - 459.67;
  return Math.round(fahrenheitTemp, '0');
}

function saveSearchData(cityData, stateData){
  localStorage.setItem('city', cityData);
  localStorage.setItem('state', stateData);
}

function readSearchData(cityInput, stateInput){
  cityInput.value = localStorage.getItem('city');
  stateInput.value = localStorage.getItem('state');
  if (cityInput.value.length>0 && stateInput.value.length>0) {
    findTravelData();
  }
}
