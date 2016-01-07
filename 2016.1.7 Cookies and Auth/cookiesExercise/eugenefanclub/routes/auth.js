var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    port     : 5432,
    user     : 'jroel',
    database : 'eugenefanclub'
  }
});

router.get('/signin', function(req, res, next) {
  data = {};
  res.render('signin', { title: 'Sign In', error: '', data: data});
});


router.post('/signin', function(req, res, next) {

  var username = req.body.username;
  var password = req.body.password;
  	
  
  knex('users').select().where({username: username})
  .then(function(userData){
      //SUCESS
      return new Promise(function(resolve, reject){
        var user = userData[0];
        console.log("Data from DB: ", data);
        console.log(password);
        resolve(user);
      });
  }).then(function(user){
      //Don't return a promise here...
      //compare our hashes
      bcrypt.compare(password, user.password, function(err, match) {
        if(match) {
          console.log('here');
          res.redirect('/');
        }else{
          res.render('signin', { title: 'Sign In',
            error: 'Username or password incorrect.',
            data: user
          });
        }
      });
  }).catch(function(err){//IF WE HAVE ERRORS
      console.log("ERROR: ", err);
      data = {};
      if (password !== '' && username !== '' ){
          res.render('signin', { title: 'Sign In', error: 'Cannot find user, please register.', data: data});
      } else {
          res.render('signin', { title: 'Sign In', error: '', data: data});
      }
  });
  //End knex

});


// function hashPassword(password, user, callback){
// 	bcrypt.genSalt(10, function(err, salt) {
//     	bcrypt.hash(user.password, salt, function(err, hash) {
//         	return hash;
//     	});
// 	});
// }

// function checkPassword(password, hash){
// 	bcrypt.compare(password, hash, function(err, res) {
//     	if(res) {
//     		return true;
//     	}else{
//     		return false;
//     	}
// 	});
// };



module.exports = router;