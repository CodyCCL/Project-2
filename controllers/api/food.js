const router = require('express').Router();
const { Food } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
      const dbFoodData = await Food.findByPk(req.params.id);
      const food = dbFoodData.get({ plain: true });
      res.json(food);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;