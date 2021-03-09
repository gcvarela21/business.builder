const db = require("../models");

module.exports = {
    createOrderItemCart: function (req, res) {
        db.OrderItem.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOrderItemCartById: function (req, res) {
        db.OrderItem.findOne({ where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};