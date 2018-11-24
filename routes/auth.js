
var router = require('express').Router();
var authController = require('../controllers/authcontroller');

router.route("/signup").get(authController.signUp);

module.exports = router;

