function num(){
  for (var i=1; i<=10; i++){
      if(i%2===0){
          console.log(i + "(even)");
      }
      else if(i%2!==0){
          console.log(i + "(odd)");
      }
  }
}
num(1);


function num(){
    var i=1;
    while (i<=10){
    if(i%2===0){
        console.log(i+ "(even)");
    }
    else if(i%2!==0){
        console.log(i + "(odd)");
    }
    i++;
    }
}
num(1);


function math(){
    for(i=1; i<=5;i++){
        var form = 11 * i
        console.log("11 times " + (i) + " equals " + (form));
    }
}
math();

var i=1;
while(i<=5){
    var form = 11 * i;
        console.log("11 times " + (i) + " equals " + (form));
        i++;
    }


    var i=1;
    for(var i=1; i<=4; i++){
        console.log("Conference " + i);
        var j=1;
        for(var j=1; j<=4; j++){
            console.log("team " +j)
        }
    }


    var i=1;
    while (i<=4){
        console.log("conference " + i);
        var j=1;
        while(j<=4){
            console.log("Team " +j);
            j++;
        }
        i++;
    }
