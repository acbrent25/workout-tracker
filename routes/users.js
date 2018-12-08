// Dependencies
// =============================================================
var router = require('express').Router();
const db = require('../models');

// Routes
// =============================================================

router.get("/api/users", function(req, res){

  db.User.findAll({
    include: [db.Weight]
  }).then(function(dbUser){
    res.json(dbUser);
  });

});


module.exports = router;