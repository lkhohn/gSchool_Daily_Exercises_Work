var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client:'pg',
  connection: process.env.DATABASE_URL
});


/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user){
    res.redirect('/users/userHome');
  } else {
  knex('posts').select().innerJoin('users', 'posts.user_id', 'users.id').then(function(postDetails){
    res.render('index', {
      title: 'BlueIt',
      postDetails: postDetails,
      addPost: '/addPost'
        });
    });
  }
});

// SELECT posts.user_id, users.username FROM posts INNER JOIN users ON (posts.user_id = users.id);

/* POST create a new post */
router.get('/addPost', function(req, res, next){
  if(req.session.user){
    res.render('addPost');
  } else {
    res.redirect('/login');
  }
});

router.post('/addPost', function(req, res, next){
  knex('posts').insert({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    user_id: req.session.user.id
  }).then(function(){
    res.redirect('/');
  });
});


/* GET similar category posts */
router.get('/:cat', function(req, res, next){
  console.log(req.params.cat);
  knex('posts').groupBy('id').having('category', '=', req.params.cat).then(function(postDetails){
  res.render('similarCat', {
    postDetails: postDetails
  });
});
});


/* GET individual post page */
router.get('/:id', function(req, res, next){
  knex('posts').where('id', req.params.id).then(function(data){
    res.render('individualPost', {
      id: data[0].id,
      title: data[0].title,
      content: data[0].content,
      category: data[0].category,
      user_id: data[0].user_id,
      editLink: req.params.id +'/editPost',
      deleteLink: req.params.id
    });
  });
});


/* DELETE individual posts */
router.post('/:id', function(req, res, next){
  knex('posts').where('id', req.params.id).delete().then(function(){
    res.redirect('/');
  });
});


/* POST edit individual posts */
router.get('/:id/editPost', function(req, res, next){
  knex('posts').where('id', req.params.id).then(function(data){
    res.render('editPost', {
      id: data[0].id,
      title: data[0].title,
      content: data[0].content,
      category: data[0].category,
      user_id: data[0].user_id
    });
  });
});

router.put('/:id/editPost', function(req, res, next){
  knex('posts').where('id', req.params.id).update({
    id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    user_id: req.body.user_id
  }).then(function(postDetails){
    res.redirect('/');
  });
});














module.exports = router;
