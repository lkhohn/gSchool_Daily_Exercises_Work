var chai = require('chai');
var Logger = require('../exercise1');
var fs = require('fs');

var expect = chai.expect;

describe('Testing logger object', function(){
  it('should initialize logger, check existing/empty file', function(done){
    var log = new Logger();
    var fileName = 'exercise1.log';
    log.init(fileName, function(err){
      // for the init, now you know it is done because it is calling the callback
      // any code that happens in here, is guaranteed to happen after init is finished
      if(err) done(err);
      fs.stat(fileName, function(err, stat){
        if(err){
          done(err);
        } else {
          expect(stat.isFile()).to.equal(true);
          fs.unlink(fileName, done());
        }
      });
    });
  });


  it('should preappend LOG to parameter and save to file');

  it('should preappend INFO to parameter and save to file');

  it('should preappend WARN to parameter and save to file');

  it('should preappend ERROR to parameter and save to file');

  it('should preappend DEBUG to parameter and save to file');

});
