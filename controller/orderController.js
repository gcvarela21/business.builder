const db = require("../models");

module.exports = {
    createOrder: function (req, res) {
        db.Order.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOrderById: function (req, res) {
        db.Order.findOne({ where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateOrder: function (req, res) {
        db.Order.update({ where: { id: req.params.id } }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeOrder: function (req, res) {
        db.Order.destroy({ where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};