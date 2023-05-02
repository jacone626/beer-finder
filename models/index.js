const User = require('./User');
const CannabisIndex = require('./cannabisIndex');
const Activity = require('./activity');
const Pairing = require('./pairing');
const Review =require('./reviews')


User.hasMany(Pairing, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Pairing.belongsTo(Review, {
  foreignKey: 'pairing_id'
 })



CannabisIndex.belongsToMany(Activity, {
  through: {model: Pairing, unique: true}})

Activity.belongsToMany(CannabisIndex, {
  through: {model: Pairing, unique: true}})



// module.exports = { User, CannabisIndex, Activity, Reviews };
module.exports = { User, CannabisIndex, Activity, Pairing, Review };

