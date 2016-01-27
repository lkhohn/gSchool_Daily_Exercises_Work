// angular.module('app')
// .controller('MainController', ['person', 'square', MainController]);
//
// function MainController(person, square){
//   var vm = this;
//   vm.title = person.name;
//   vm.tree = person.getTree();
//
//   vm.squareValue = square(2);
// }

angular.module('app')
.controller('MainController', ['calculator', MainController]);

function MainController(calculator){
  var vm = this;
  vm.numbers = {
    firstNumber: '0',
    secondNumber: '0'
  };
  vm.sign='+';
  vm.result='0';
  vm.calculations = calculations;

  function calculations (sign, firstNumber, secondNumber){
      if(sign==='+'){
      vm.result = calculator.add(firstNumber, secondNumber);
    }
    else if(sign === '-'){
      vm.result = calculator.substract(firstNumber, secondNumber);
    }
    else if(sign === '*'){
      vm.result = calculator.multiply(firstNumber, secondNumber);
    }
    else if(sign === '/'){
      vm.result = calculator.divide(firstNumber, secondNumber);
    }
  }
}
