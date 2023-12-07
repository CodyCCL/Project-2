const router = require('express').Router();
const { User, Food } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    console.log(req.body.username)
    const dbUserData = await User.create({
      Username: req.body.username,
      Email: req.body.email,
      Password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


// router.get('/:id', async (req, res) => {
//   try {
//     const dbUserData = await User.findByPk(req.params.id, {
//       include: [
//         {
//           model: Food,
//           attributes: [
//             'FoodId',
//             'Name',
//             'Calories',
//             'Protien',
//             'Carbs',
//             'Fat',
//             'EntryDate'
//           ],
//         },
//       ],
//     });
//     const user = dbUserData.get({ plain: true });
//     res.json(user);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
