const db = require('../models');

module.exports = {
  create(req, res) {
    return db.Weight
      .create(req.body)
      .then(dbWeight => res.json(dbWeight))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return db.Weight
    .findAll({
      include: [db.User],
      })
      .then(weights => res.status(200).send({weights:weights}))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return db.Weight
      .findById(req.params.weightId, {
        include: [db.User],
      })
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
    return db.Weight
      .findById(req.params.weightId, {
        include: [db.User],
      })
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
    return db.Weight
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