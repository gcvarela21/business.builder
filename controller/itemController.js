const db = require("../models");

module.exports = {
  findAllItems: function (req, res) {
    db.item.findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findItemById: function (req, res) {
    db.item.findOne({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findByName: function (req, res) {
  //   // doublecheck this
  //   db.items.findAll({ where: { itemName: req.params.itemName } })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  createItem: function (req, res) {
    db.item.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateItem: function (req, res) {
    db.item.update({ where: { id: req.params.id } }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeItem: function (req, res) {
    db.item.destroy({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
