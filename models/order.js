module.exports = function (sequelize, DataTypes) {
    var order = sequelize.define("order", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        orderID: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });
    order.associate = function (models) {

    };
    return order;
};