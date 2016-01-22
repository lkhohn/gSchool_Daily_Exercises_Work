angular.module("contactApp")
  .controller("ContactController", [ContactController]);

  function ContactController(){
    var vm = this;
    vm.addItem = addItem;
    vm.contacts = [
      { name:"Harry Potter",
        email:"harry@hogwars.com",
        phone:"123-445-4566"
      },
      { name:"Hermione Granger",
        email:"hermione@library.com",
        phone:"546-567-4345"
      },
      { name:"Ron Weasel",
        email:"ron@weasel.com",
        phone:"854-674-2346"
      }
  ];

    function addItem(){
      var individual = {
        name: vm.name,
        email: vm.email,
        phone: vm.phone
      }
      vm.contacts.push(individual)
      vm.name='';
      vm.email='';
      vm.phone='';
    }

  }
