var header1 = document.createElement('h1');
var newElement = header1.innerText = "Checkerboard Exercise";
document.body.appendChild(header1);



var header2 = document.createElement('h2');
var newHeader2 = header2.innerText = "Checkerboard with Table";
document.body.appendChild(header2);

var body = document.getElementsByTagName('body')[0];

var tbl = document.createElement('table');

var tableHeader = document.createElement('th');
tbl.appendChild(tableHeader);
tableHeader.setAttribute('style', 'background-color:red; width:50px; height:50px');

var tableHeader = document.createElement('th');
tbl.appendChild(tableHeader);
tableHeader.setAttribute('style', 'background-color:black; width:50px; height:50px');

var tableHeader = document.createElement('th');
tbl.appendChild(tableHeader);
tableHeader.setAttribute('style', 'background-color:red; width:50px; height:50px');

var tableHeader = document.createElement('th');
tbl.appendChild(tableHeader);
tableHeader.setAttribute('style', 'background-color:black; width:50px; height:50px');

var tableHeader = document.createElement('th');
tbl.appendChild(tableHeader);
tableHeader.setAttribute('style', 'background-color:red; width:50px; height:50px');

for (var i = 0; i < 4; i++){
  var tableRow = document.createElement('tr');

  var tableData1 = document.createElement('td');
  tableData1.setAttribute('style', 'background-color:black; width:50px; height:50px');

  var tableData2 = document.createElement('td');
  tableData2.setAttribute('style', 'background-color:red; width:50px; height:50px');

  var tableData3 = document.createElement('td');
  tableData3.setAttribute('style', 'background-color:black; width:50px; height:50px');

  var tableData4 = document.createElement('td');
  tableData4.setAttribute('style', 'background-color:red; width:50px; height:50px');

  var tableData5 = document.createElement('td');
  tableData5.setAttribute('style', 'background-color:black; width:50px; height:50px');

  tableRow.appendChild(tableData1);
  tableRow.appendChild(tableData2);
  tableRow.appendChild(tableData3);
  tableRow.appendChild(tableData4);
  tableRow.appendChild(tableData5);
}
tbl.appendChild(tableRow);
document.body.appendChild(tbl);





var header3 = document.createElement('h2');
var newHeader3 = header3.innerText = "Checkerboard with divs"
document.body.appendChild(header3);

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:purple; width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:green; width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:purple; width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:green; width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:purple; width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:green; width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:purple; width:50px; height:50px;');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:green; width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:purple; width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:green; width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:purple; width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:green; width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'background-color:purple; width:50px; height:50px; float:left');


var header4 = document.createElement('h2');
var newHeader4 = header4.innerText = 'Checkerboard with random colors';
document.body.appendChild(header4);


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'width:50px; height:50px; float:left');

var div = document.createElement('div');
document.body.appendChild(div);
div.setAttribute('style', 'width:50px; height:50px; float:left');

var squares = document.querySelectorAll('div');
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = getRandomColor();
}





var headerClicks = document.createElement('article');
var newHeaderClicks = headerClicks.innerText = 'Click Events';
document.body.appendChild(headerClicks);
headerClicks.setAttribute('style', 'display:block');


$( "#target" ).click(function() {
  alert( "Handler for .click() called." );
});

$( "#other" ).click(function() {
  $( "#target" ).click();
});

$('#test').click(function(){
  console.log('test click');
  if(body.style.backgroundColor !== 'red'){
    $('body').css('background-color', 'red');
  }
  else{
  $('body').css('background-color', '');
  }
});
