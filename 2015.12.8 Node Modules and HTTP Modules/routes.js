'use strict';

// module exports is our public interface
// it is what require returns
module.exports = {
  '/hello': function(req, res) {
    res.write('hello');
    res.end();
  },
  '/goodbye': function(req, res) {
    res.write('goodbye');
    res.end();
  },
  '/': function(req, res){
    res.write('default');
    res.end();
  }
}
