const router = require('express').Router();

const userRoutes = require('./user-routes');
const foodRoutes = require('./food');
const exerciseRoutes = require('./exercises');

router.use('/users', userRoutes);
router.use('/food', foodRoutes);
router.use('/exercises', exerciseRoutes)

module.exports = router;