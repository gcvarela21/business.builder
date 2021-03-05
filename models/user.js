var bcrypt = require("bcryptjs");
module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {

        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: false
    });

    // checks if the password is correct
    user.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // hashes password
    user.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return user;
};