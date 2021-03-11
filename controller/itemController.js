const db = require("../models");

module.exports = {
  findAllItems: function (req, res) {
    db.Item.findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findItemById: function (req, res) {
    db.Item.findOne({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function (req, res) {
    db.Item.findAll({ where: { itemCategory: req.params.itemCategory } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createItem: function (req, res) {
    db.Item.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateItem: function (req, res) {
    db.Item.update({ where: { itemName: req.params.itemName } }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeItem: function (req, res) {
    db.Item.destroy({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteItem: function (req, res) {
    console.log("item controller working")
    db.Item.destroy({ where: { itemName: req.body.itemName } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
