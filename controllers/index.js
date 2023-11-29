const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.add('/', homeRoutes);
router.add('/api', apiRoutes);

module.export = router;