var express = require("express");
var router = express.Router();


// API Routes
const auth = require('./auth');
const todos = require('./todos');
const dashboard = require('./dashboard');
const weights = require('./weights');
const users = require('./users');


// HTML Routes 
const staticHome = require('./html/home');
const staticTodo = require('./html/todos');
const staticWeights = require('./html/weights');

// Use API Routes Routes
router.use(auth);
router.use(todos);
router.use(dashboard);
router.use(weights);
router.use(users);

// USE HTML ROUTES
router.use(staticHome);
router.use(staticTodo);
router.use(staticWeights);



module.exports = router;
