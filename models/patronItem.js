module.exports = function (sequelize, DataTypes) {
    var PatronItem = sequelize.define("PatronItem", {
        // patronItemID - given to shopper when shopper purchases order

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

    PatronItem.associate = function (models) {
        models.Patron.belongsToMany(models.Item, { through: PatronItem });
        models.Item.belongsToMany(models.Patron, { through: PatronItem });
    };
    return PatronItem;
};