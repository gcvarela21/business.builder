const db = require("../models");

module.exports = {
    createPatronItemCart: function (req, res) {
        db.PatronItem.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findPatronItemCartById: function (req, res) {
        db.PatronItem.findOne({ where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};