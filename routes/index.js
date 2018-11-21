const path = require("path");
var express = require('express');
var router = express.Router();


const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res, next) {
  res.render('index', { title: 'Mr. Champagne' });
});

module.exports = router;
