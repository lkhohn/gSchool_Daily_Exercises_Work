document.getElementById('pallette1').style.backgroundColor='#ffffff';
document.getElementById('pallette2').style.backgroundColor='#cccccc';
document.getElementById('pallette3').style.backgroundColor='#f73636';
document.getElementById('pallette4').style.backgroundColor='#0a841c';
document.getElementById('pallette5').style.backgroundColor='#e590f7';
document.getElementById('pallette6').style.backgroundColor='#3f0e2a';
document.getElementById('pallette7').style.backgroundColor='#729593';
document.getElementById('pallette8').style.backgroundColor='#d97777';
document.getElementById('pallette9').style.backgroundColor='#242961';
document.getElementById('pallette10').style.backgroundColor='#752373';
document.getElementById('pallette11').style.backgroundColor='#89eac3';
document.getElementById('pallette12').style.backgroundColor='#324a15';
document.getElementById('pallette12').style.backgroundColor='#324a15';

var brushColor = 'red';
window.addEventListener('click', function(event){
    var itemClicked = event.target;
    //if event target class is pixel
    if(itemClicked.className === 'pixel'){
    //set pixel backgroundColor to brushColor
      itemClicked.style.backgroundColor = brushColor;
    }
    //if event target is pallette
    else if(itemClicked.className==='pallette'){
    //set brushColor equal to pallette backgroundColor
      brushColor = itemClicked.style.backgroundColor;
    }
  console.log(event.target);
});
