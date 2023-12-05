const router = require('express').Router();
const { Exercise, ExerciseSets } = require('../../models');

router.post('/api/exercises', async (req, res) => {
    try {
        // Extract data from the request body
        const { name, calories, sets } = req.body;
        const userId = req.session.userId; // Assuming you have user session management

        // Create a new exercise entry
        const newExercise = await Exercise.create({
            Name: name,
            Calories: calories,
            User: userId
            // Add other necessary Exercise fields
        });

        // Associate sets with the newly created exercise
        if (sets && sets.length) {
            const setsData = sets.map(set => ({
                SetNumber: set,
                ExerciseId: newExercise.ExerciseId,
                User: userId
                // Add other necessary ExerciseSets fields
            }));
            await ExerciseSets.bulkCreate(setsData);
        }

        res.redirect('/some-success-page'); // Redirect after successful creation
    } catch (err) {
        console.error('Error in creating exercise: ', err);
        res.status(500).send(err);
    }
});

module.exports = router;