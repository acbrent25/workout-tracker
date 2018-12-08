// Dependencies
// =============================================================
var router = require('express').Router();


// Routes
// =============================================================
//INDEX ROUTE - SHOW ALL TODOS
router.get('/todos', function(req, res) {

    res.render('todos', {title: 'Todos View'});

});


module.exports = router;


