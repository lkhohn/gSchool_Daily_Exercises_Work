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
