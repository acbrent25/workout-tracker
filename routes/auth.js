
var router = require('express').Router();

var db = require("../models");
var passport = require("passport");



// SHOW REGISTER FORM
router.get("/register", function(req, res){
   res.render("register", {title: 'register'});
});

// SIGNUP LOGIC
router.post("/register", function(req, res){
   db.User.create({
     username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect("/login");
    }).catch(function(err) {
      console.log(err);
      return res.render("register", {title: "Register"});
    });
});

// SHOW LOGIN FORM
router.get("/login", function(req, res){
   res.render("login", {title: "Login"});
});

 
// LOGIN LOGIC
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
    }), function(req, res){
    
});


// Route for logging user out
router.get("/logout", function(req, res) {
   req.logout();
   res.redirect("/");
});
//
  // Route for getting some data about our user to be used client side
  router.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });





module.exports = router;

