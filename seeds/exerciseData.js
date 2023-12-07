const { ExerciseSets } = require("../models");

const exerciseSetData = [];

let date = new Date(2023, 10, 30); // 11-30-2023

for (let i = 1; i <= 20; i++) {
    const dayOffset = Math.floor((i - 1) / 4);
    const entryDate = new Date(date);
    entryDate.setDate(date.getDate() + dayOffset);

    const numberOfSets = (i % 3) + 1; // 1-3 sets
    for (let j = 1; j <= numberOfSets; j++) {
        exerciseSetData.push({
            SetNumber: j, // Unique identifier for each set
            ExerciseId: i, // Foreign key linking to the Exercise
            RepCount: 10 * j, // 10, 20, 30 reps
            RepGoal: 10 * j,
            EntryDate: entryDate.toISOString().split('T')[0], // Format date to YYYY-MM-DD
            Weight: i % 2 === 0 ? 5 * j : 0, // Weight for Strength exercises
            User: 1 // Assuming a user_id of 1 for all entries
            // Add other fields if necessary
        });
    }
}
const seedExceriseSet = () => ExerciseSets.bulkCreate(exerciseSetData);

module.exports = seedExceriseSet;