var wrapper = document.querySelector('div');
wrapper.style.display = "none";

var cityInput = document.querySelector('#cityInput');
var stateInput = document.querySelector('#stateInput');

readSearchData(cityInput, stateInput);

var button = document.querySelector('button');

button.addEventListener('click', function(event) {
  event.preventDefault();
  findTravelData();
});


// EXAMPLE OF PROMISES WITH AJAX REQUEST AND JQUERY
function findTravelData() {
  saveSearchData(cityInput.value, stateInput.value);
  var locationNode = document.querySelector('#location');

  var cityZip;
  var distance;
  var distanceNode;

  $.ajax('https://www.zipcodeapi.com/rest/js-kw0qquu6quYB6tAoscqgZ6CusdesoN4Ij58KzDRZ8PBejcCMp23o9GTBT74hU9Ze/city-zips.json/' + cityInput.value + '/' + stateInput.value, {
    
  }).then(function(cityZipData) {
    cityZip = cityZipData.zip_codes[0];

    return $.ajax('https://www.zipcodeapi.com/rest/js-kw0qquu6quYB6tAoscqgZ6CusdesoN4Ij58KzDRZ8PBejcCMp23o9GTBT74hU9Ze/distance.json/80524/' + cityZip + '/mile');
  }).then(function(distanceData) {
    distance = distanceData.distance;
    distanceNode = document.querySelector('#distance');

    return $.ajax('http://api.openweathermap.org/data/2.5/weather?zip=' + cityZip + ',us&appid=2de143494c0b295cca9337e1e96b00e0');
  }).then(function(weather) {
    var weatherNode = document.querySelector('#weather');
    weatherNode.innerHTML = convertKelvinToFahrenheit(weather.main.temp) + ' degrees Fahrenheit';

    distanceNode.innerHTML = distance;
    locationNode.innerHTML = cityInput.value + ', ' + stateInput.value;

    wrapper.style.display = "block";
  });
}



// EXAMPLE OF PROMISES WITH HTTP REQUEST AND JS
// function findTravelData() {
//   saveSearchData(cityInput.value, stateInput.value);
//
//   var locationNode = document.querySelector('#location');
//
//   var zipcodePromise = new Promise(
//     function(resolve, reject) {
//       var cityZipsReq = new XMLHttpRequest();
//       var cityZip;
//       cityZipsReq.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//           cityZip = JSON.parse(this.responseText).zip_codes[0];
//           resolve(cityZip);
//         }
//         if (this.readyState === 4 && this.status >= 400) {
//           reject(this.status);
//         }
//       }
//       cityZipsReq.open('GET', 'https://www.zipcodeapi.com/rest/js-kw0qquu6quYB6tAoscqgZ6CusdesoN4Ij58KzDRZ8PBejcCMp23o9GTBT74hU9Ze/city-zips.json/' + cityInput.value + '/' + stateInput.value);
//       cityZipsReq.send();
//     }).then(function(cityZipData){
//       console.log(cityZipData);
//     }).catch(function(statusCode){
//       console.log('error: status code ' + statusCode);
//     });
//   }


// COMMENTED OUT OLD CODE
// var cityZipsReq = new XMLHttpRequest();
// var cityZip;
// cityZipsReq.onreadystatechange = function() {
//   if (this.readyState === 4 && this.status === 200) {
//     cityZip = JSON.parse(this.responseText).zip_codes[0];
//
//     var distanceReq = new XMLHttpRequest();
//     distanceReq.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         var distance = JSON.parse(this.responseText).distance;
//         var distanceNode = document.querySelector('#distance');
//
//         var weatherReq = new XMLHttpRequest();
//         weatherReq.onreadystatechange = function() {
//           if (this.readyState === 4 && this.status === 200) {
//             var weather = JSON.parse(this.responseText);
//             // use weather from api to update page
//             var weatherNode = document.querySelector('#weather');
//             weatherNode.innerHTML = convertKelvinToFahrenheit(weather.main.temp) + ' degrees Fahrenheit';
//
//             distanceNode.innerHTML = distance;
//             locationNode.innerHTML = cityInput.value + ', ' + stateInput.value;
//
//             wrapper.style.display = "block";
//           }
//         }
//         weatherReq.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=' + cityZip + ',us&appid=2de143494c0b295cca9337e1e96b00e0');
//         weatherReq.send();
//       }
//     }
//     distanceReq.open('GET', 'https://www.zipcodeapi.com/rest/js-kw0qquu6quYB6tAoscqgZ6CusdesoN4Ij58KzDRZ8PBejcCMp23o9GTBT74hU9Ze/distance.json/80524/' + cityZip + '/mile');
//     distanceReq.send();
//   }
// }
// cityZipsReq.open('GET', 'https://www.zipcodeapi.com/rest/js-kw0qquu6quYB6tAoscqgZ6CusdesoN4Ij58KzDRZ8PBejcCMp23o9GTBT74hU9Ze/city-zips.json/' + cityInput.value + '/' + stateInput.value);
// cityZipsReq.send();
// }

function convertKelvinToFahrenheit(kelvinTemp) {
  var fahrenheitTemp = kelvinTemp * 9 / 5 - 459.67;
  return Math.round(fahrenheitTemp, '0');
}

function saveSearchData(cityData, stateData) {
  localStorage.setItem('city', cityData);
  localStorage.setItem('state', stateData);
}

function readSearchData(cityInput, stateInput) {
  cityInput.value = localStorage.getItem('city');
  stateInput.value = localStorage.getItem('state');
  if (cityInput.value.length > 0 && stateInput.value.length > 0) {
    findTravelData();
  }
}
