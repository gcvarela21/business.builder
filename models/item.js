module.exports = function (sequelize, DataTypes) {
    var item = sequelize.define("item", {

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
        },

        itemCategory: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: false
    });

    return item;
};