module.exports = function (sequelize, DataTypes) {
    var cart = sequelize.define("cart", {

    });
    cart.associate = function (models) {
        models.item.hasMany(models.cart, {
            as: "carts", foreignKey: "itemId"
        });

        models.cart.belongsTo(models.item, {
            foreignKey: "itemId"
        });

        models.user.hasMany(models.cart, {
            as: "carts", foreignKey: "userId"
        });

        models.cart.belongsTo(models.user, {
            foreignKey: "userId"
        });
    };

    return cart;
};