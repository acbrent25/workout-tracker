
const db = require("../models");

// Defining methods for the authControler
module.exports = {
  logIn: function(req, res) {
    res.render('login', { title: 'Log In' });
  },
};
