
var router = require('express').Router();
const todosController = require('../controllers').todos;


  router.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  router.post('/api/todos', todosController.create);

  module.exports = router;