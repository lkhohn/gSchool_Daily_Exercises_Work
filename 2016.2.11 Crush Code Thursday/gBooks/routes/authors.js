 var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('knex')({
  client:'pg',
  connection: process.env.DATABASE_URL
});




router.get('/', function(req, res, next){
  knex('authors').select()
  .leftOuterJoin('author_book', 'authors.author_id', 'author_book.author_id')
  .leftOuterJoin('books', 'books.book_id', 'author_book.book_id')
  .then(function(postDetails){
    // console.log(postDetails);
    res.render('authors', {
      postDetails:postDetails
    });
  });
});

// SELECT * from authors LEFT OUTER JOIN author_book ON authors.author_id = author_book.author_id GROUP BY authors.author_id AS author_book.author_id;


router.get('/newAuthor', function(req, res, next){
  res.render('newAuthor');
});


router.post('/newAuthor', function(req, res, next){
  knex('authors').returning('author_id').insert({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    portraiturl: req.body.portraiturl,
    biography: req.body.biography
}).then(function(newID){
  var author_id = newID;
  knex('books').returning('book_id').insert({
    title: req.body.title
  }).then(function(newID){
    var book_id = newID;
    // console.log(parseInt(book_id))
    // console.log(author_id)
    knex('author_book').insert({
      book_id: parseInt(book_id),
      author_id: parseInt(author_id)
    }).then(function(result){
      res.redirect('/authors');
    });
  });
});
});


router.get('/:author_id', function(req, res, next){
  knex('authors').select()
  .leftOuterJoin('author_book', 'authors.author_id', 'author_book.author_id')
  .leftOuterJoin('books', 'books.book_id', 'author_book.book_id')
  .where('authors.author_id', req.params.author_id).first().then(function(result){
    // console.log(result);
        res.render('individualAuthor', { author:result });
  });
});


router.get('/:author_id/editAuthor', function(req, res, next){
  knex('authors').select()
  .leftOuterJoin('author_book', 'authors.author_id', 'author_book.author_id')
  .leftOuterJoin('books', 'books.book_id','author_book.book_id')
  .where('authors.author_id', req.params.author_id).first()
  .then(function (result) {
      // console.log(result);
      res.render('editAuthor', {author: result});
    });
});


router.post('/:author_id/editAuthor', function(req, res, next){
  knex('author_book').where('author_id', req.params.author_id)
  .then(function(joinData){
    console.log(joinData);
    knex('authors').where('author_id', joinData[0].author_id).update({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          portraiturl: req.body.portraiturl,
          biography: req.body.biography
    })
    .then(function(result){
      res.redirect( '/authors');
    });
  });
});



// this delete works but not for both tables
// router.post('/:author_id/delete', function(req, res, next){
//   knex('author_book').where('author_id', req.params.author_id).del()
//   .then(function(result){
//     res.redirect('/authors');
//   });
// });

router.post('/:author_id/delete', function(req, res, next){
  knex('authors').select()
  .where('authors.author_id', req.params.author_id).del()
  .then(function(result){
    knex('books').select()
    .leftOuterJoin('author_book', 'authors.author_id', 'author_book.author_id')
    .leftOuterJoin('books', 'books.book_id','author_book.book_id')
    .then(function(){
      res.redirect('/authors');
    });
  });
});
// SELECT * from authors LEFT OUTER JOIN author_book ON authors.author_id = author_book.author_id;
// DELETE FROM authors WHERE authors.author_id IN (SELECT author_book.author_id FROM author_book WHERE author_book.author_id = authors.author_id);
// DELETE FROM books WHERE books.book_id IN (SELECT author_book.book_id FROM author_book WHERE author_book.book_id = books.book_id);



module.exports = router;
