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

        res.render('users',{users: users});
      }
    });

  }else{
      res.redirect('../');
  }
});

router.get('/list', function(req,res,next){
    var userInformationToDisplay = [];

    if(req.isAuthenticated()) {
        Users.find({}, function (err, users) {
            if (err) {
                console.log(err);
                next(err);
            } else {
                users.forEach(function (user, index) {
                    userInformationToDisplay.push({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        username: user.username
                    });
                });
                res.json(userInformationToDisplay);
            }
        });
    }else{
        res.redirect('../');
    }
});

module.exports = router;
