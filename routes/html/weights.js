// Dependencies
// =============================================================
var router = require('express').Router();


// Routes
// =============================================================
//INDEX ROUTE - SHOW ALL TODOS
router.get('/weights', function(req, res) {

    res.render('weights', {title: 'Weights View'});

});


module.exports = router;
