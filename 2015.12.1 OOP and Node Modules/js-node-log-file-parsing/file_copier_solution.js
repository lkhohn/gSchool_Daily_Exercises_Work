fs.readFile(filename, function(err, data) {
  if (err) throw err;

  fs.writeFile(filename + '.copy', data, function(err) {
    if (err) throw err;
    console.log('file successfully copied');
  });
}); 
