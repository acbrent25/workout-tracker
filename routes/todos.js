
var router = require('express').Router();
const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

router.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
}));

/**************************
    TODO CRUD API
***************************/


// Create Todo
router.post('/api/todos', todosController.create);
  
// Read Todo (single)
router.get('/api/todos/:todoId', todosController.retrieve);

// Read Todos (all)
router.get('/api/todos', todosController.list);

// Update Todo
router.put('/api/todos/:todoId', todosController.update);

// Delete Todo 
router.delete('/api/todos/:todoId', todosController.destroy);

/**************************
    TODO ITEMS CRUD API
***************************/
// Todo Items Create
router.post('/api/todos/:todoId/items', todoItemsController.create);

// Todo Items Update
router.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);

// Todo Items Delete
router.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);
  

module.exports = router;