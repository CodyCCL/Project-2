const { Food } = require('../models');

const foodData = [
    {
        Name: 'Cheese and Cheddar Crackers',
        Calories: 200,
        Protien: 3,
        Carbs: 24,
        Fat: 10,
        EntryDate: '11-30-2023',
        user_id: 1
    }
];

const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;