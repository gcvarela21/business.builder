const db = require("../models");

module.exports = {
    createUser: function (req, res) {
        db.user.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}