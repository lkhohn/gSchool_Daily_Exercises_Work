var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {
    linkHome:'/home',
    linkApt: '/apt',
    linkProfile: '/profile',
    linkPref:'/preferences',
    linkLogout:'/logout'
  });
});

router.get('/apt', function(req, res) {
  res.render('index', {
    linkHome:'/home',
    linkApt: '/apt',
    linkProfile: '/profile',
    linkPref:'/preferences',
    linkLogout:'/logout'

  });
});

router.get('/profile', function(req, res) {
  res.render('index', {
    linkHome:'/home',
    linkApt: '/apt',
    linkProfile: '/profile',
    linkPref:'/preferences',
    linkLogout:'/logout'
  });
});

router.get('/preferences', function(req, res) {
  res.render('index', {
    linkHome:'/home',
    linkApt: '/apt',
    linkProfile: '/profile',
    linkPref:'/preferences',
    linkLogout:'/logout'
  });
});

router.get('/logout', function(req, res) {
  res.render('index', {
    linkHome:'/home',
    linkApt: '/apt',
    linkProfile: '/profile',
    linkPref:'/preferences',
    linkLogout:'/logout'
  });
});

module.exports = router;
