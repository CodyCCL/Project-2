const { Food } = require('../models');

const foodData = [];
const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
const startDate = new Date(2023, 10, 30); 

//start at 11-30-23 and create 4 food items per meal type per day for 5 days
for (let day = 0; day < 5; day++) {
    const entryDate = new Date(startDate);
    entryDate.setDate(startDate.getDate() + day);

    mealTypes.forEach(mealType => {
        for (let item = 1; item <= 4; item++) {
            foodData.push({
                Name: `${mealType} Item ${item}`,
                Calories: 100 + 20 * item,
                Protein: 5 + item,
                Carbs: 10 + 2 * item,
                Fat: 3 + item,
                EntryDate: entryDate.toISOString().split('T')[0],
                MealType: mealType,
                user_id: 1
            });
        }
    });
}

//yum seeds
const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;