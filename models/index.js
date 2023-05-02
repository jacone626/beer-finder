const User = require('./User');
const CannabisIndex = require('./cannabisIndex');
const Activity = require('./activity');
const Pairing = require('./pairing');
const Review =require('./reviews')


User.hasMany(Pairing, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
})

Pairing.belongsTo(Review, {
  foreignKey: 'pairing_id'
 })

CannabisIndex.belongsToMany(Activity, {
  through: {model: Pairing, unique: true},
  as: 'cannabis_activity'
})

Activity.belongsToMany(CannabisIndex, {
  through: {model: Pairing, unique: true},
  as: "activity_cannabis"
})




module.exports = { User, CannabisIndex, Activity, Pairing, Review };

