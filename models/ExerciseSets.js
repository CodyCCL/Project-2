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
        SetNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        ExerciseId: {
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
        modelName: 'ExerciseSets'
    }
);

module.exports = ExerciseSets;
