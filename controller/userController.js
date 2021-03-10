const db = require("../models");

module.exports = {
    loginAdmin: function (req, res) {
        console.log("eyy")
        db.User.findOne(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    adminCheck: function (req, res) {
        console.log(req.user)
        if (req.user) {

            res.json({ adminLogin: true })
        }
        else {
            res.json({ adminLogin: false })
        }
    }
}