var content = 'This is basically any String (or Buffer!) you want. There are some great strings out there so choose wisely though.';

fs.writeFile('fs_write_file_example.txt', content, function (err) {
  if (err) throw err;
  console.log('Saving the day! One file at a time.');
});
