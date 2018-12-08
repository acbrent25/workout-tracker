var router = require('express').Router();


const db = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');

// SHOW 
router.get('/api/weights', isAuthenticated, function(req, res) {
    db.Weight.findAll({
      include: [db.User]
    }).then(function(dbWeight) {
      res.json(dbWeight);
    });
  });

// CREATE 
router.post('/api/weights', isAuthenticated, function(req, res){
  db.Post.create(req.body).then(function(dbWeight) {
    res.json(dbWeight);
  });
});

// READ
router.get('/api/weights/:id', isAuthenticated, function(req, res) {
  db.Weight.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Author]
  }).then(function(weights) {
    Response.json(dbWeight);
  });
});

// UPDATE
router.put("/api/weights", isAuthenticated, function(req, res) {
  db.Weight.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbWeight) {
      res.json(dbWeight);
    });
});

// DELETE
router.delete("/api/weights/:id", isAuthenticated, function(req, res){
  db.Weight.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbWeight){
    res.json(dbWeight);
  });
});



  module.exports = router;