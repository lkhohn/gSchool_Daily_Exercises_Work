// Write a Node.js script that takes a command line argument for a filename,
// then uses fs.readFile and fs.writeFile to produce a copy of the file
// in which all of the lines have been reversed and the additional extension .reverse has been added.
// Possible errors (such as by running the script on a non-existent file) should be appropriately handled.
//
// Here is what usage looks like:
//
//   // in foo.txt
//   a
//   b
//   c
//   d
//
//   // at the CLI:
//   $:> node reverse_file.js foo.txt
//   $:> ls
//   foo.txt   foo.txt.reverse
//   $:> cat foo.txt.reverse
//   d
//   c
//   b
//   a

var fs = require('fs');

try {
  reverseDoc();
} catch(err){
  console.log(err);
}

function reverseDoc(){
fs.readFile(process.argv[2], 'utf-8', function(err, data){
  if (err){
    console.log(err.stack);
    console.log('could not read file');
    return;
  } else {
    fs.writeFile(process.argv[2], '.reverse', reverseLines(data), function(err) {
      if (err) {
        console.log(err.stack);
        console.log('could not read file');
        }
  });
}
})
}

function reverseLines(lines) {
  var newLines = lines.reverse().split('\n');
  console.log(newLines);
}
