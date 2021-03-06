module.exports = function (sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
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
    Order.associate = function (models) {

    };
    return Order;
};