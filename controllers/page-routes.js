const router = require('express').Router();
const { Food } = require('../models');

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/exercise', (req, res) => {
  res.render('exercise');
});

router.get('/exercisesets', (req, res) => {
  res.render('exercisesets');
});

router.get('/food', async (req, res) => {
  try {
    const dbFoodData = await Food.findAll({});
    const foodData = dbFoodData.map(item => item.get({ plain: true })); // Convert each object to plain data
    res.render('Food', { foodData });
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
