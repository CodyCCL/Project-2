const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedFood = require('./foodData');
const seedExercise = require('./exerciseData');
const seedExceriseSet = require('./exerciseSetData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUser();
    await seedFood();
    await seedExercise();
    await seedExceriseSet();

    process.exit(0);
};

seedAll();