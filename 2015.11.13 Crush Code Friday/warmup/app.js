Synth.setSampleRate(44100);
  Synth.setVolume(1.0);




  //create a piano instrument, other options are organ, edm or acoustic.
  var piano = Synth.createInstrument('piano');
  piano.play('C', 4, 1);


    //play a 4th octave C note for 2 seconds
    // piano.play('C', 4, 2);

    //play a 4th octave C# note for 2 seconds
    // piano.play('C#', 4, 2);


    // addEventListener("keydown", function() {
    //   piano.play('C', 4, 3);
    // });



window.addEventListener(keydown, function(){
  if(event.keyIdentifier == "u+0043"){
    piano.play('C', 4, 3);
  }
})




// C
//   var cKey = document.getElementById('c');
//   function cKeyClick (click) {
//     piano.play('C', 4, 3);
// }
//    cKey.addEventListener('click', cKeyClick);

// C Sharp
   var cSharpKey = document.getElementById('cSh');
   function cSharpKeyClick (click) {
     piano.play('C#', 4, 3);
 }
    cSharpKey.addEventListener('click', cSharpKeyClick);

// D
   var dKey = document.getElementById('d');
   function dKeyClick (click) {
     piano.play('D', 4, 3);
 }
    dKey.addEventListener('click', dKeyClick);

// D Sharp
    var dSharpKey = document.getElementById('dSh');
    function dSharpKeyClick (click) {
      piano.play('D#', 4, 3);
  }
     dSharpKey.addEventListener('click', dSharpKeyClick);

// E
    var eKey = document.getElementById('e');
    function eKeyClick (click) {
      piano.play('E', 4, 3);
  }
     eKey.addEventListener('click', eKeyClick);

// F
     var fKey = document.getElementById('f');
     function fKeyClick (click) {
       piano.play('F', 4, 3);
   }
      fKey.addEventListener('click', fKeyClick);

// F Sharp
      var fSharpKey = document.getElementById('fSh');
      function fSharpKeyClick (click) {
        piano.play('F#', 4, 3);
    }
       fSharpKey.addEventListener('click', fSharpKeyClick);

// G
      var gKey = document.getElementById('g');
      function gKeyClick (click) {
        piano.play('G', 4, 3);
    }
       gKey.addEventListener('click', gKeyClick);

// G Sharp
      var gSharpKey = document.getElementById('gSh');
      function gSharpKeyClick (click) {
        piano.play('G#', 4, 3);
      }
        gSharpKey.addEventListener('click', gSharpKeyClick);

// A
       var aKey = document.getElementById('a');
       function aKeyClick (click) {
         piano.play('A', 4, 3);
     }
        aKey.addEventListener('click', aKeyClick);

// A Sharp
        var aSharpKey = document.getElementById('aSh');
        function aSharpKeyClick (click) {
          piano.play('A#', 4, 3);
      }
         aSharpKey.addEventListener('click', aSharpKeyClick);

// B
        var bKey = document.getElementById('b');
        function bKeyClick (click) {
          piano.play('B', 4, 3);
      }
         bKey.addEventListener('click', bKeyClick);
