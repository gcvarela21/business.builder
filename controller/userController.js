const db = require("../models");

module.exports = {
    loginUser: function (req, res) {
        db.user.findOne(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}