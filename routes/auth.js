
var authController = require('../controllers/authcontroller.js');

module.exports = function (app) {
    //GET
    app.get('/signup', authController.signup)
}

