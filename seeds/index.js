const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedFood = require('./foodData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUser();
    await seedFood();

    process.exit(0);
};

seedAll();