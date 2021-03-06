module.exports = function (sequelize, DataTypes) {
    var orderItem = sequelize.define("orderItem", {
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

    orderItem.associate = function (models) {
        models.order.belongsToMany(models.Item, { through: orderItem });
        models.Item.belongsToMany(models.order, { through: orderItem });

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
    return orderItem;
};