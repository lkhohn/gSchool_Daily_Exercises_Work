var express = require('express');
var router = express.Router;

// GET ‘/puppies’ - shows all resources
router.get('/puppies', function(req, res){
  res.render('index,' {
    title: 'Puppies',
  });
});


// GET ‘puppies/new’ - shows new create new resource page
router.get('/puppies/new'), function(req, res){
  res.render('/puppies/new', db);

});

// POST ‘puppies/new’ - creates individual
router.post('/puppies/new', function(req, res){
  res.send();
});

// GET ‘puppies/:id’ - shows individual resource
router.get('/puppies/:id', function(req, res){

});

// GET ‘puppies/:id/edit’ - shows edit page of individual resource
router.get('/puppies/:id/edit', function(req, res){

});

// PUT ‘puppies/:id’ - updates individual resource
router.put('/puppies/:id', function(req, res){
  db('puppies').update({ name: req.params.id});
});

// DELETE ‘puppies/:id’ - removes resource
router.delete('/puppies/:id', function(req, res){

});





module.exports = router;
