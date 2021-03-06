module.exports = function (sequelize, DataTypes) {
    var OrderItem = sequelize.define("OrderItem", {
        // orderItemID - given to shopper when shopper purchases order

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

    PrderItem.associate = function (models) {
        models.Order.belongsToMany(models.Item, { through: OrderItem });
        models.Item.belongsToMany(models.Order, { through: OrderItem });

        // models.orderItem.hasMany(models.item, {as: "orderItem", foreignKey: "itemID"})
        // models.item.belongsToMany(models.orderItem, {foreignKey: "itemID"})

        // models.orderItem.hasMany(models.order, {
        //     as: "orderItem", foreignKey: "orderID"
        // })
        // models.order.hasOne(models.orderItem, {
        //     foreignKey: "orderID"
        // })
        // order : orderItem
        // 1 : many
        // itemID
        // orderID
    };
    return OrderItem;
};