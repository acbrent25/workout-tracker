// Dependencies
// =============================================================
var router = require('express').Router();
const todosController = require('../../controllers').todos;
const todoItemsController = require('../../controllers').todoItems;


//INDEX ROUTE - HOME
router.get('/', function(req, res) {
  
    res.render('index', { title: 'The Champagne App'});

});


module.exports = router;
