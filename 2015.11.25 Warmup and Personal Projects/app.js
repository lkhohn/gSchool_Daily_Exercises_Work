
var $button = $('#button');
var $userInput = $('#userInput');
var $results = $('#results');
button.addEventListener('click', function(){
  event.preventDefault();
  $.ajax({
    url: 'http://www.omdbapi.com/?s='+userInput.value+'&plot=full&r=json',
    method: "GET",
    success: function(data) {
      var movieData = JSON.stringify(data);
      var movieObject=JSON.parse(movieData);
        console.log(movieObject);
      $( "#results" ).append(movieObject);
}
});
});
