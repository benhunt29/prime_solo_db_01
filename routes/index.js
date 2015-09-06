var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
//var flash = require('express-flash');
var test = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.flash());
  res.render('index',{ messages: req.flash() });

});

router.post('/', passport.authenticate('local',{
  successRedirect: '/users',
  failureRedirect: '/',
  failureFlash: true
})
);

module.exports = router;
