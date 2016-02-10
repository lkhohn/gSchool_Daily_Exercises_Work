var fs = require('fs');

function Logger(){

}

Logger.prototype.init = function(fileName, callback){
  // the prototype is where information about the object is stored.
  // so here, we are storing another function to the object
  fs.writeFile(fileName, 'file contents', function(err){
    // when write file is done, it will callback this anoynomous function
    callback(err);
  });
};


module.exports = Logger;
