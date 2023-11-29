const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class ExerciseSets extends Model {}

ExerciseSets.init(
    {
        SetId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        RepGoal: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        Weight:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        RepCount:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        EntryDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Exercise: {
            type: DataTypes.INTEGER,
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
        modelName: 'exercisesets'
    }
);

module.exports = ExerciseSets;
