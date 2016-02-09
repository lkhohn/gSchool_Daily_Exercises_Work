var password = require('../app');
var chai = require('chai');

var expect = chai.expect;

describe('password check', function(){
  it('length should be 8 to 16 characters', function(){
    expect(password.lengthChecker('password')).to.be.within(8,16);
  });
  it("should contain upper and lower case, numbers, and the following symbols !,@,#,$,%,^,&,*,(,),_,-,+,=,?", function(){
    expect(password.characterChecker('abcdABCD!')).to.be.true;
  });
  it("should contain upper and lower case letters", function(){
    expect(password.characterChecker('abcdABCD23!')).to.be.true;
  });
  it("should contain numbers", function(){
    expect(password.characterChecker('abcdABCD23!')).to.be.true;
  });
  it("should contain the following symbols !,@,#,$,%,^,&,*,(,),_,-,+,=,?", function(){
      expect(password.characterChecker('abcdABCD23!')).to.be.true;
    });

  // it("should does not contain the right amount", function(){
  //   expect(password.characterChecker('abc')).to.be.false;
  // });
});
