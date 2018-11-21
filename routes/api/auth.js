
var router = require('express').Router();
var authController = require('../../controllers/authcontroller.js');

module.exports = function(router) {
    //GET
    router.route('/signup')
      .get(authController.signup);
}

module.exports = router;

