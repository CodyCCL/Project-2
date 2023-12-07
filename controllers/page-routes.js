const router = require('express').Router();
const { Food, Exercise, ExerciseSets } = require('../models');

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/exercises', async (req, res) => {
    const date = req.query.date ? new Date(req.query.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
 // Use provided date or today's date

    try {
        const exerciseData = await Exercise.findAll({
            where: {
                EntryDate: date,
                // need to add condition to get current user id
            },
            include: [{
                model: ExerciseSets,
                as: 'sets'
            }]
        });

        const exercises = exerciseData.map(ex => ex.get({ plain: true }));
        res.render('exercise', { exercises, date }); // Pass the date to the template
    } catch (err) {
      console.log(err);
        res.status(500).send(err);
    }
});

router.get('/post-exercise', (req, res) => {
    try {
        // Render the post-exercise.handlebars template
        res.render('post-exercise', { });
    } catch (err) {
        console.error('Error rendering exercise form: ', err);
        res.status(500).send(err);
    }
});

router.post('/exercises', async (req, res) => {
  try {
      const { date, name, calories, exerciseType, sets } = req.body;
      const userId = 1; // Hardcoded for the time being

      //Create a new exercise entry
      const newExercise = await Exercise.create({
          Name: name,
          Calories: calories,
          Type: exerciseType,
          User: userId,
          EntryDate: date
      });

      // Associate sets with the newly created exercise
      if (sets && sets.length) {
        const setsData = sets.map(set => ({
            SetNumber: set.setCount,
            RepCount: set.repCount,
            RepGoal: set.repGoal,
            Weight: set.weight,
            ExerciseId: newExercise.ExerciseId,
            User: userId,
            EntryDate: date
        }));
          await ExerciseSets.bulkCreate(setsData);
      }
      // Redirect back to exercise diary after successful creation
      res.redirect('/exercises'); 
  } catch (err) {
      console.error('Error in creating exercise: ', err);
      res.status(500).send(err);
  }
});

router.get('/food-post', (req, res) => {
    try {
        res.render('food-post', {  });
    } catch (err) {
        console.error('Error rendering post-food form: ', err);
        res.status(500).send(err);
    }
});

router.post('/post-food', async (req, res) => {
    try {
        const { name, calories, protein, carbs, fat, mealType, date } = req.body;
        await Food.create({
            Name: name,
            Calories: calories,
            Protein: protein,
            Carbs: carbs,
            Fat: fat,
            MealType: mealType,
            EntryDate: date,
            UserId: 1//req.session.userId - fixed value for now
        });
        res.redirect('/food'); // Redirect to a success or food diary page
    } catch (err) {
        console.error('Error posting food:', err);
        res.status(500).send(err);
    }
});

router.get('/Food', async (req, res) => {
  try {
    // Use the provided date or default to today
    const selectedDate = req.query.date || new Date().toISOString().split('T')[0]; 
    const dbFoodData = await Food.findAll({
      where: {
        EntryDate: selectedDate
        // need to add condition to pull by current user id
      },
      order: [['MealType', 'ASC']] // Order by MealType
    });

    const foodData = dbFoodData.map(item => item.get({ plain: true }));

     let totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;

     // Calculate totals
     foodData.forEach(item => {
         totalCalories += item.Calories;
         totalProtein += item.Protein; 
         totalCarbs += item.Carbs;
         totalFat += item.Fat;
     });

    // Organize food by meal type for a list of each item
    const organizedFoodData = {
      Breakfast: foodData.filter(item => item.MealType === 'Breakfast'),
      Lunch: foodData.filter(item => item.MealType === 'Lunch'),
      Dinner: foodData.filter(item => item.MealType === 'Dinner'),
      Snack: foodData.filter(item => item.MealType === 'Snack')
    };
    const nutritionTotals = { totalCalories, totalProtein, totalCarbs, totalFat };

    res.render('food', { date: selectedDate, organizedFoodData, nutritionTotals, foodData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/food', (req, res) => {

//   res.render('food');
// });

router.get('/usergoals', (req, res) => {
  res.render('usergoals');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/results', (req, res) => {
  res.render('results');
});

module.exports = router;
