var wrapper = document.querySelector('div');
wrapper.style.display = 'none';

var cityInput = document.querySelector('#cityInput');
var stateInput = document.querySelector('#stateInput');
var button = document.querySelector('button');
button.addEventListener('click', function(event){
  event.preventDefault();

  // city name to zip
  $.ajax({
    url: 'https://www.zipcodeapi.com/rest/js-VFAEHOjaSeLAQwxQEzupdIEC1j4He1iaGSOoH7zzlk9bQH2vgwUuez7gScX7dghU/city-zips.json/'+cityInput.value+'/'+stateInput.value,
    method: "GET",
    success: function(data) {
      var allZip = JSON.stringify(data);
      var nashvilleZipObject = JSON.parse(allZip);
      nashZip = nashvilleZipObject['zip_codes'][0];
      // distance between zip codes
        $.ajax({
          url: 'https://www.zipcodeapi.com/rest/js-VFAEHOjaSeLAQwxQEzupdIEC1j4He1iaGSOoH7zzlk9bQH2vgwUuez7gScX7dghU/distance.json/80524/'+nashZip+'/mile',
          method: "GET",
          success: function(data) {
            var distanceData = JSON.stringify(data);
            var distanceObject = JSON.parse(distanceData);
            $('#distance').append(distanceObject.distance);
          },
          error: function(errorObject, textStatus) {
            console.log(errorObject);
            console.log(textStatus);
          }
        });
      // current weather based on zip and country code
        $.ajax({
          url: 'http://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+',840&APPID=d6cf401d582e33e634bca26a32b22f60',
          method: "GET",
          success: function(data) {
            var weatherData = JSON.stringify(data);
            var weatherObject = JSON.parse(weatherData);
            $('#weather').append(weatherObject.weather[0].description);
          },
          error: function(errorObject, textStatus) {
            console.log(errorObject);
            console.log(textStatus);
          }
        });
    },
    error: function(errorObject, textStatus) {
      console.log(errorObject);
      console.log(textStatus);
    }
  });
  wrapper.style.display = 'block';

});
