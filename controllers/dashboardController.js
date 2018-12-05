const Weight = require('../models').Weight;


module.exports = {
  create(req, res) {
    return Weight
      .create({
        weight: req.body.weight,
      })
      .then(weight => res.status(201).send(weight))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Weight
    .findAll()
      .then(weights => res.status(200).send({weights:weights}))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Weight
      .findById(req.params.weightId)
      .then(weight => {
        if (!weight) {
          return res.status(404).send({
            message: 'Weight Not Found',
          });
        }
        return res.status(200).send(weight);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Wieght
      .findById(req.params.wieghtId)
      .then(weight => {
        if (!weight) {
          return res.status(404).send({
            message: 'Weight Not Found',
          });
        }
        return weight
          .update({
            title: req.body.title || weight.title,
          })
          .then(() => res.status(200).send(weight))  // Send back the updated weight.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Weight
      .findById(req.params.weightId)
      .then(weight => {
        if (!weight) {
          return res.status(400).send({
            message: 'Weight Not Found',
          });
        }
        return weight
          .destroy()
          .then(() => res.status(204).send({ message: 'Weight deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};