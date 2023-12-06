const router = require('express').Router();
const { Exercise, ExerciseSets } = require('../../models');

router.post('/exercises', async (req, res) => {
    try {
        // Extract data from the request body
        const { date, name, calories, exerciseType, sets } = req.body;
        const userId = 1; // Hardcoded for the time being
        console.log(date + name + calories + exerciseType);
        console.log(sets);
        // Create a new exercise entry
        // const newExercise = await Exercise.create({
        //     Name: name,
        //     Calories: calories,
        //     Type: exerciseType,
        //     User: userId,
        //     EntryDate: date
        //     // Add other necessary Exercise fields
        // });

        // // Associate sets with the newly created exercise
        // if (sets && sets.length) {
        //     const setsData = sets.map(set => ({
        //         SetNumber: set.SetCount,
        //         ExerciseId: newExercise.ExerciseId,
        //         RepCount: set.RepCount,
        //         RepGoal: set.RepGoal,
        //         Weight: set.Weight,
        //         User: userId,
        //         EntryDate: date
        //         // Add other necessary ExerciseSets fields
        //     }));
        //     await ExerciseSets.bulkCreate(setsData);
        //}

        //res.redirect('/some-success-page'); // Redirect after successful creation
    } catch (err) {
        console.error('Error in creating exercise: ', err);
        res.status(500).send(err);
    }
});

module.exports = router;