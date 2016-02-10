$.ajax({
  url: "https://galvanize-eats-api.herokuapp.com/menu",
  method: "GET",
  success: function(data){
    var menuData = JSON.stringify(data);
    var menuObject = JSON.parse(menuData);
    // console.log(menuObject.menu);
    for(var key in menuObject){
      var menuDetails = menuObject.menu;
      for(var i=0; i<menuDetails.length; i++){
      // console.log(menuDetails[i]);
      // console.log(menuDetails[i].type)
        if(menuDetails[i].type === 'pizza'){
          $('#menuItemsTablePizza').append('<tr><td>' + menuDetails[i].name + '</td><td>' + menuDetails[i].price + '</td></tr>');
          $("#menuItemsTablePizza").find("tr").addClass("menuItemsPizzaData" + [i]);
        }
        else {
          $('#menuItemsTableHamburger').append('<tr><td>' + menuDetails[i].name + '</td><td>' + menuDetails[i].price + '</td></tr>');
          $("#menuItemsTableHamburger").find("tr").addClass("menuItemsHamburgerData" + [i]);
        }
      }
    }
  }
});

// $('#menuItems').on('click', function(e){
  // console.log(e);
  // console.log(e.toElement)
//     $(e.toElement).clone().appendTo(shoppingCart);
// });

//event.currentTarget
//mouseevent to see what it selects
// $( "body" ).click(function( event ) {
//   console.log( event.currentTarget); // true
// });
// ('#menuItemsPizzaData'+[i]).click(function() {
//   $('#menuItemsPizzaData'+[i]).clone().appendTo(shoppingCart);
// })

// $('td').click(function(){
  // addClass('selected') -- then push whatever items have an class of selected to the second column
// })

function addItemsToCart(event, menuItemsHamburgerData, menuItemsPizzaData){
  $("#menuItemsTableHamburger").click(function(){
      var selected = $("#menuItemsTableHamburger");
      console.log(selected);
      // console.log(selected[0].firstElementChild);
      $(selected).clone().appendTo(shoppingCart);

  });
  $("#menuItemsTablePizza").click(function(){
      var selected = $("#menuItemsTablePizza");
      console.log(selected);
      console.log(selected[0].firstElementChild);
      $(selected).clone().appendTo(shoppingCart);
  });
}
addItemsToCart();







$('.error').hide();
$('#menuOrderButton').click(function(){
  event.preventDefault();
  var name = $('input#name').val();
  if(name === ''){
    $("label#name_error").show();
    $("input#name").focus();
      return false;
      }

  var phoneNumber = $('input#phoneNumber').val();
  if(phoneNumber === ''){
    $("label#phoneNumber_error").show();
    $('input#phoneNumber').focus();
    return false;
  }
  var address = $('input#address').val();
    if(address === ''){
      $('label#address_error').show();
      $('input#address').focus();
      return false;
    }

  var formData = {
          'name': name,
          'phoneNumber': phoneNumber,
          'address': address
      };
  $.ajax({
    url:"https://galvanize-eats-api.herokuapp.com/orders",
    method: "POST",
    data: formData,
    success: function(data){
      // alert('Order successful!');
      location.href='orderSuccessful.html';
    }
  });
});
