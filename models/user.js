var bcrypt = require("bcryptjs");
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

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
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // hashes password
    User.addHook("beforeCreate", function (User) {
        User.password = bcrypt.hashSync(User.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};