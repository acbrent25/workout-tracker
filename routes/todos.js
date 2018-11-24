
var router = require('express').Router();
const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;


  router.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  router.post('/api/todos', todosController.create);
  router.get('/api/todos', todosController.list);
  
  // Todo Items Create
  router.post('/api/todos/:todoId/items', todoItemsController.create);

  module.exports = router;