
var router = require('express').Router();
const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;
const axios = require('axios');

const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

//INDEX ROUTE - SHOW ALL TODOS
router.get('/', async (req, res, next) => {
    //see message is passed to index.ejs and ejs will take care of rendering it
    //so same way you can load your api data here like:  
    try {
       const data = axios.get('/api/todos');
       console.log(Object.keys(data));
       //now pass apiData to index.ejs to take care of it
       res.render('index',{title:"Hello World!", data: data});
    }
    catch (e){
       //render your error.ejs here
    }
});


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