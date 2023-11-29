const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model {}

Exercise.init(
    {
        ExerciseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Sets: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Type:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        EntryDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Calories: {
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
        modelName: 'exercise'
    }
);

module.exports = Exercise;