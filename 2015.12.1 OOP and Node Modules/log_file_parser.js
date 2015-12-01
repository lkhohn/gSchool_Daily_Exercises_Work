var fs = require('fs');
// process refers to this running node process
// argv is an array of the actual command typed space delimitted
// to run this program run the command "node <file name with the function> <file you want to load>"
// process.argv[0]===node
// process.argv[1]===file you are running
// process.argv[2]===file you want to load
var filename= process.argv[2];
//the first param to pass in is the path to the file we want to load
// the second param is a callback function that will be invoked once fs
//has finished attempting to read the file
fs.readFile(filename, function(err, data){
  // if error exists, it will be truthy
  if(err) throw err;
  // console.log(data);
  fs.writeFile(filename + 'warmupCopy.js', data, function(err){
    if(err) throw err;
    console.log('it worked! file copied!');
  });
  // gives a human readable file (before it will just be hexidemical)
  console.log(data.toString());
});
