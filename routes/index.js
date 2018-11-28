var express = require("express");
var router = express.Router();

const auth = require('./auth');
const todos= require('./todos');
const dashboard= require('./dashboard');

// Use Auth Routes
router.use(auth);
router.use(todos);
router.use(dashboard);

module.exports = router;
