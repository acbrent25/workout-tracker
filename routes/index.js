var express = require("express");
var router = express.Router();

const auth = require('./auth');

//Home Page
router.get("/", function(req, res, next){
    res.render("index", {title: "Home"});
});


// Auth Routes
router.use(auth);

module.exports = router;
