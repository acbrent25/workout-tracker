const Weight = require('../models').Weight;

module.exports = {
  create(req, res) {
    return Weight
      .create({
        weight: req.body.weight,
      })
      .then(todo => res.redirect('/weights'))
      .catch(error => res.status(400).send(error));
  },
};