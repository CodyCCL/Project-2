const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/exercise', (req, res) => {
  res.render('exercise');
});

router.get('/exercisesets', (req, res) => {
  res.render('exercisesets');
});

router.get('/food', (req, res) => {
  res.render('food');
});

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
