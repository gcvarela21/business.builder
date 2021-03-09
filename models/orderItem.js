module.exports = function (sequelize, DataTypes) {
    var OrderItem = sequelize.define("OrderItem", {
        // OrderItemID - given to shopper when shopper purchases order

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    });

    OrderItem.associate = function (models) {
        models.Order.belongsToMany(models.Item, { through: OrderItem });
        models.Item.belongsToMany(models.Order, { through: OrderItem });
    };
    return OrderItem;
};