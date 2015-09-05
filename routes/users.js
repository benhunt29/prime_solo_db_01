var express = require('express');
var router = express.Router();
var Users = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()){
    Users.find({}, function (err, users) {
      if (err) {
        console.log(err);
        next(err);
      } else {
        console.log(users.firstName);
        res.render('users',{users: users});
      }
    });

  }
});

module.exports = router;
