// Kewl Interpreter

// For some more practice with the filesystem module, we'll spend some time creating a simple interpreter.
// An interpreter is a set of instructions that reads and handles code. Our interpreter will be simple and only handle one command - print.
// Follow the instructions in this document to create an interpreter for the kewl.js file.

// After completing the basic interpreter, follow the instructions so that print takes parentheses and then so that some characters are escaped.
// (Escaping a character just means that it's special meaning is ignored and the character is just output.)


// // in [sample.kewl](sample.kewl)
// print 'Good times'
// print 'Programming is awesome!'

// $:> node kewl.js sample.kewl
//  kewl: Good times
//  kewl: Programming is awesome!



// // include the fs module
// var fs = require("fs");
//
// // handle a command line argument for the filename
// var filename = process.argv[2];
//
// fs.readFile(filename, function(err, data) {
//   if (err) throw err;
//
//   // console.log(data.toString());
//
//   function interpreter(data) {
//     var dataString = data.toString()
//     var splitWords = dataString.split(' ');
//     // console.log(splitWords);
//
//     // whats the command that we are doing
//     // when the file is being read, anytime if reads the word "print
//     // that word needs to be changed to 'kewl:
//     for (var i = 0; i < splitWords.length; i++) {
//       // console.log(splitWords[i]);
//       // replace the word print with kewl
//       var newWord = splitWords[i].replace('print', 'kewl: ')
//       console.log(newWord);
//     }
//     // whats being passed through the command (argument)
//     // then take the argument and make that the new data value
//
//
//     // console log 'kewl: ' variable + the new data variable
//     // console.log(kewlVariable + data)
//   }
//   interpreter(data)
//
// });


// logans solution
// read the file
var fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, 'utf8', function(err, data) {
  // utf8 will encode the data and show as a string
  // console.log(data);
  if (err) throw err;

  // parse it
  var lines = data.split('\n');
  // remove the empty last line
  lines.pop();
  // console.log(lines);

  // parse through it a line at a time since each statement is on its own line
  // loop through each index of the lines array
  lines.forEach(function(line, lineIndex) {
    // console.log(line, lineIndex);

    // break line into characters
    // with each line, watch for commands and arguments

    var command = '';
    var arguments = [];
    var blob = '';
    var inArgument = false;
    var inString = false;
    var inCommand = true;

    for (var i = 0; i < line.length; i++) {

      // add letters as we go along until there is a space

      // watch for characters and then change what we're doing depending on character
      // command until a space
      // arguments usually separated by spaces
      // uneless contained in quotes - that's a string which is a single argument
      blob += line.charAt(i);
      if (inCommand && line.charAt(i) === ' ') {
        inCommand = false;
        inArgument = true;
        command = blob;
        blob = '';
      }
      if(line.charAt(i)===' ' || (i===line.length-1)){
        arguments.push(blob)
        blob = '';
      }
      if(inString && line.charAt(i)==="'"){
        inString=false;
      }
      if(!inString && line.charAt(i)==="'"){
        inString=true;
      }
    }
    console.log(command);
    console.log(arguments);
    console.log(blob)


  });
});







// do whatever the commands are
