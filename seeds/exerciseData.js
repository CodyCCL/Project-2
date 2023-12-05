const { Exercise } = require("../models");

const exerciseData = [];

let date = new Date(2023, 10, 30); // 11-30-2023

for (let i = 1; i <= 20; i++) {
    const dayOffset = Math.floor((i - 1) / 4);
    const entryDate = new Date(date);
    entryDate.setDate(date.getDate() + dayOffset);

    exerciseData.push({
        ExerciseId: i, // Assuming ExerciseId is still needed as a unique identifier
        Name: `Exercise ${i}`,
        Type: i % 2 === 0 ? 'Strength' : 'Cardio', // Alternating between 'Cardio' and 'Strength'
        Calories: 50 * (i % 3), // 0, 50, or 100 calories
        EntryDate: entryDate.toISOString().split('T')[0], // Format date to YYYY-MM-DD
        User: 1 // Assuming a user_id of 1 for all entries
    });
}

const seedExcerise = () => Exercise.bulkCreate(exerciseData);

module.exports = seedExcerise;