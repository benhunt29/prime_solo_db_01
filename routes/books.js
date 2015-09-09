var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var currentUsername, currentEmail;

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()){
    currentUsername = req.user.username;
    currentEmail = req.user.email;

    Book.find({}, function (err, books) {
      if (err) {
        console.log(err);
        next(err);
      } else {

        res.render('books',{books: books});
      }
    });

  }else{
      req.flash('unauthorizedUser','You Must Login to Access This Page!');
      res.redirect('../');
  }
});

router.get('/list', function(req,res,next){
    var userInformationToDisplay = [];

    if(req.isAuthenticated()) {
        Book.find({}, function (err, books) {
            if (err) {
                console.log(err);
                next(err);
            } else {
                books.forEach(function (book, index) {
                    userInformationToDisplay.push({
                        username: book.username,
                        bookAuthor: book.bookAuthor,
                        bookTitle: book.bookTitle,
                        email: book.email
                    });
                });
                res.json(userInformationToDisplay);
            }
        });
    }else{
        res.redirect('../');
    }
});

router.post('/add',function(req,res,next){
    var addedBook = {
        bookAuthor: req.body.bookAuthor,
        bookTitle: req.body.bookTitle,
        username: currentUsername,
        email: currentEmail
    };

    Book.create(addedBook, function(err,post){
        if(err) {
            next(err);
        }else {
            res.redirect('/books');
        }
    })
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('../');
});

module.exports = router;
