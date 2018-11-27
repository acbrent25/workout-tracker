var router = require('express').Router();

router.get("/dashboard", function(req, res){
   res.render("dashboard", {title: "Dashboard"});
});


module.exports = router;