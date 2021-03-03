module.exports = function (sequelize, DataTypes) {
    var item = sequelize.define("Item", {

        itemName: {
            type: DataTypes.STRING,
            allowNull: true
        },

        itemPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },

        itemDesc: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return item;
};