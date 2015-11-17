//code is now equal to everything in our main file
// var code = require('../main');
// var expect = require('chai').expect;


// describe('', function(){
//   it('');
// });
// param1: name
// param2: test function that gets executed when I run the test


// describe('isLeapYear', function() {
  //english description of what the test does
  // it("if a number is divisible by 4 it is a leap year, expect when divisible by 100 and not 400", function(){
    // computer description of what the test does
//     expect(code.isLeapYear(1600)).to.equal(true);
//     expect(code.isLeapYear(2000)).to.equal(true);
//     expect(code.isLeapYear(1700)).to.equal(false);
//     expect(code.isLeapYear(1800)).to.equal(false);
//     expect(code.isLeapYear(1900)).to.equal(false);
//   });
// });


var code = require('../main');
var expect = require('chai').expect;

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calculate(1)).to.equal(0.1);
    expect(code.calculate(10)).to.equal(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calculate(15)).to.equal(1.35);
  });
  it('should tax 5% on the third $10', function(){
    expect(code.calculate(30)).to.equal(2.2);
  })
  it('should tax 3% on the fourth and on', function(){
    expect(code.calculate(40)).to.equal(2.5);
  });
});
