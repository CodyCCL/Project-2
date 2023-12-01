const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Food extends Model {}

Food.init(
    {
        FoodId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Calories: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Protien: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Carbs: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Fat: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        EntryDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'UserId',
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'food'
    }
);

module.exports = Food;