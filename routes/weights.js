var router = require('express').Router();

const Weight = require('../models').Weight;
const weightsController = require('../controllers').weights;
const isAuthenticated = require('../config/middleware/isAuthenticated');

//INDEX ROUTE - SHOW ALL TODOS
router.get('/weights', isAuthenticated, function(req, res) {
    Weight.findAll()
    .then(function(weights) {
      res.render('weights', {
        title: 'Weight',
        weights: weights,
      });
    });
  });

/**************************
    Weight CRUD API
***************************/

// Create Weight
router.post('/api/weights', weightsController.create);

  module.exports = router;