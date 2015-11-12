var header1 = document.createElement('h1');
var newElement = header1.innerText = "Animals";
document.body.appendChild(header1);

var animals = {
  'dog': 'bark',
  'cat': 'meow',
  'horse': 'neigh',
  'mouse': 'squeek',
  'giraffe': 'gulp',
  'hippo':'roar'
};

var body = document.getElementsByTagName('body')[0];

//create table
var tbl = document.createElement('table');

//headers within the table body element
var tableHeader = document.createElement('th');
var headerDetails = tableHeader.innerText = 'Animal';
tbl.appendChild(tableHeader);

var tableHeader = document.createElement('th');
var headerDetails = tableHeader.innerText = 'Sound';
tbl.appendChild(tableHeader);

var animalSounds = [];
for(var key in animals){
  var animalKey=animals[key];
    animalSounds.push(animalKey);
  }

//rows within the table body element
for (var i = 0; i < animalSounds.length; i++){

  var tableRow = document.createElement('tr');

  var tableData1 = document.createElement('td');
  var tableData2 = document.createElement('td');

  //create place to put text and inputing into table details
  var text1 = document.createTextNode(Object.keys(animals)[i]);

  var text2 = document.createTextNode(animalSounds[i]);

  //appending table details into the table body
  tableData1.appendChild(text1);
  tableData2.appendChild(text2);
  tableRow.appendChild(tableData1);
  tableRow.appendChild(tableData2);
  tbl.appendChild(tableRow);
}

//append the table into the body
document.body.appendChild(tbl);
