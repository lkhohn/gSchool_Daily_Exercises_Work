// console.log('You\'re ready to begin!')

// httpRequest = new XMLHttpRequest();
// httpRequest.onreadystatechange = function(){
//     if (httpRequest.readyState === 4) {
//        if(httpRequest.status < 400) {
//          alert(httpRequest.responseText);
//        }
//     }
// };
// httpRequest.open('GET', 'index.html');
// httpRequest.send();


// httpRequest = new XMLHttpRequest();
// httpRequest.onreadystatechange = function(){
//     if (httpRequest.readyState === 4) {
//        if(httpRequest.status < 400) {
//          console.log(httpRequest.responseText);
//        }
//     }
// };
// httpRequest.open('GET', 'data.json');
// httpRequest.send();

httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === 4 && httpRequest.status < 400) {
      var data = JSON.parse(this.responseText);
      console.log(data['data']['children'][0]['data']['title']);
  }
};
httpRequest.open('GET', 'http://www.reddit.com/r/aww.json');
httpRequest.send();


//
// $.ajax({
//   method: "GET",
//   url: 'http://www.reddit.com/r/aww.json',
//   data: {get_param: 'title'},
//   dataType: 'json',
//   success: function(data) {
//     console.log(JSON.parse(data));
//   },
//   error: function(jqHXR) {
//     console.log("ERROR: ", jqHXR.status);
//   }
// });
