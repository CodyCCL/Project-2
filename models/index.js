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
    as: 'sets' 
});

ExerciseSets.belongsTo(Exercise, {
    foreignKey: 'exercise_id', 
});


module.exports = {User, Food, Exercise, ExerciseSets, Results}
