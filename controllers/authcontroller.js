const db = require("../models");

// Defining methods for the booksController
module.exports = {
  signup: function(req, res) {
    res.render('signup');
  }
};
