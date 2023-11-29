const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Results extends Model {}

Results.init(
    {
        ResultsId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        CurrentWeight: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        EntryDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        User: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Results'
    }
);

module.exports = Results;