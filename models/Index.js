const ExerciseSets = require('./ExerciseSets');
const User = require('./User');
const Food = require('./Food');
const Results = require('./Results');
const Exercise = require('./Exercise');

User.hasMany(Food, {
    foreignKey: 'user_id',
});

Food.belongsTo(User, {
    foreignKey: 'UserId',
});


module.exports = {User, Food, Exercise, ExerciseSets, Results}