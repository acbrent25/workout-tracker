var router = require('express').Router();

const db = require('../models');
const weightsController = require('../controllers/weightsController');
const isAuthenticated = require('../config/middleware/isAuthenticated');

/**************************
    Weight CRUD API
***************************/


// Create Weight
router.post('/api/weights/', isAuthenticated, function(req,res){

  var currentUser = req.user.id;
  console.log('currentUser: ' + currentUser);
  var weight = req.body.weight;

  var newWeight = {
    UserId: currentUser,
    weight: weight
  }

  db.Weight
    .create(newWeight)
    .then(function(newWeight) {
      res.json(newWeight);
    });
});

router.get('/weights', function(req, res){

  db.Weight.findAll({
    include: [db.User],
    }).then(function(weights){
      console.log(weights)
      res.render("weights", {
        weights:weights,
        title: "Weight Tracker"
      });
    })
});

  
// Read Weight (single)
router.get('/api/weights/:weightId', weightsController.retrieve);

// Read Weights (all)
router.get('/api/weights', weightsController.list);

// Update Weight
router.put('/api/weights/:weightId', weightsController.update);

// Delete Weight 
router.delete('/api/weights/:weightId', weightsController.destroy);

module.exports = router;