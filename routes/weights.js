var router = require('express').Router();

const Weight = require('../models').Weight;
const User = require('../models').User;
const weightsController = require('../controllers').weights;
const isAuthenticated = require('../config/middleware/isAuthenticated');

//INDEX ROUTE - SHOW ALL TODOS
router.get('/weights', isAuthenticated, function(req, res) {
    Weight.findAll({
      include: [{
        model: User,
        as: 'users'
      }]
    })
    .then(function(weights) {
      res.render('weights', {
        title: 'Weight',
        weights: weights,
        userId: weights.userId,
      });
    });
  });

  router.post('/weights', isAuthenticated, function(req, res){
    Weight.create({
      weight: req.body.weight,
      userId: req.user.id,
    })
    .then(function(weight){
      res.render('weights', {title: 'Weights'});
    });
  });


  router.get('/weights/:id', isAuthenticated, function(req, res) {
    Weight.findOne({
      where: {
        id: req.params.id
      },
      include: ['user']
    })
    .then(function(weights) {
      res.render('weights', {
        title: 'Weight',
        weight: weight,
        user: user,
      });
    });
  });



/**************************
    Weight CRUD API
***************************/

// Create Weight
router.post('/api/weights', weightsController.create);

  module.exports = router;