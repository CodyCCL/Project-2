const router = require('express').Router();

const userRoutes = require('./user-routes');
const foodRoutes = require('./food');

router.use('/users', userRoutes);
router.use('/food', foodRoutes);

module.exports = router;