var express = require('express');
var router = express.Router();
var url = require('url');

router.get('/', function(req, res, next) {
  res.json({
    movies: url.format({ protocol: req.protocol, host: req.get('host'), pathname: '/api/v1/movies' }),
    actors: url.format({ protocol: req.protocol, host: req.get('host'), pathname: '/api/v1/actors' }),
    appearances: url.format({ protocol: req.protocol, host: req.get('host'), pathname: '/api/v1/appearances' })
  })
});

module.exports = router;
