const User = require('./User');
const CannabisIndex = require('./cannabisIndex');
const Activity = require('./activity');
const Pairing = require('./pairing');
const Review =require('./reviews')


User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});


Review.belongsTo(Pairing, {
  foreignKey: 'pairing_id'
 });

Pairing.hasMany(Review, {
  foreignKey: 'pairing_id'
 })



CannabisIndex.belongsToMany(Activity, {
  through: {model: Pairing, unique: true}
});

Activity.belongsToMany(CannabisIndex, {
  through: {model: Pairing, unique: true}
});


module.exports = { User, CannabisIndex, Activity, Pairing, Review };

