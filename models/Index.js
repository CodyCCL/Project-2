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

Exercise.hasMany(ExerciseSets, {
    foreignKey: 'ExerciseId',
    as: 'sets' // Add this line to create an alias for the association
});

ExerciseSets.belongsTo(Exercise, {
    foreignKey: 'exercise_id',
    as: 'sets' // Also here if you plan to query in the reverse direction
});


module.exports = {User, Food, Exercise, ExerciseSets, Results}