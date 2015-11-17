// every year whose number is perfectly divisible by four is a leap year.
// except for years which are both divisible by 100 and not divisible by 400.
// 1600 and 2000 are leap years, but the century years 1700, 1800, and 1900 are not.


// function isLeapYear (year){
//   var isLeap = false;
//   if(year%4===0){
//     isLeap = true;
//   }
//   if(year % 100 === 0 && year % 400 !== 0){
//     isLeap = false;
//   }
//   return isLeap;
// }
// module.exports = {
// isLeapYear:isLeapYear
// };

// Give the following tax system, what kind(s) of tests can we write?
// The first $10 is taxed at 10%
// The second $10 is taxed at 7%
// The third $10 is taxed at 5%
// Everything after that is taxed at 3%



function calculate(cost){
  var amountTaxed = 0;

  if(cost <= 10){
    amountTaxed = cost * 0.1;
  }else if(cost > 0){
    amountTaxed += 10 * 0.1;
  }
  cost -= 10;

  if(cost <= 10 && cost > 0){
    amountTaxed += cost * 0.07;
  }else if(cost > 0){
    amountTaxed += 10 * 0.07;
  }
  cost -= 10;

  if(cost <= 10 && cost > 0){
    amountTaxed += cost * 0.05;
  }else if(cost > 0){
    amountTaxed += 10 * 0.05;
  }
  cost -= 10;

  if(cost > 0){
    amountTaxed += cost * 0.03;
  }

  return amountTaxed;

}

module.exports = {
calculate:calculate
};
