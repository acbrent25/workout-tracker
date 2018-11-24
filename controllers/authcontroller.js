
const db = require("../models");

// Defining methods for the authControler
module.exports = {
  signUp: function(req, res) {
    res.render('signup', { title: 'Signup' });
  },
  logIn: function(req, res) {
    res.render('login', { title: 'Log In' });
  },
};
