const db = require("../models");

module.exports = {
    createPatron: function (req, res) {
        db.Patron.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findPatronById: function (req, res) {
        db.Patron.findOne({ where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updatePatron: function (req, res) {
        db.Patron.update({ where: { id: req.params.id } }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removePatron: function (req, res) {
        db.Patron.destroy({ where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};