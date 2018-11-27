
var router = require('express').Router();
var passport = require("passport");
var authController = require('../controllers').authController;

router.get("/register", function(req, res){
   res.render("register", {title: "Register"});
});


module.exports = router;

