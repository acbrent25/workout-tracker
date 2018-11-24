
var router = require('express').Router();
var authController = require('../controllers').authController;

router.route("/signup").get(authController.signUp);

router.route("/login").get(authController.logIn);

module.exports = router;

