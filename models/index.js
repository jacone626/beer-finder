const User = require('./User');
const BeerIndex = require('./beerIndex');
const Activity = require('./activity');
const Pairing = require('./pairing');
const Review =require('./reviews')


User.hasMany(Review, {
    foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Pairing.hasMany(Review, {
  foreignKey: 'pairing_id'
 });

Review.belongsTo(Pairing, {
  foreignKey: 'pairing_id'
 });

BeerIndex.belongsToMany(Activity, {
  through: {
    model: Pairing, 
    foreignKey: 'beerIndex_id',
    unique: true}
});

Activity.belongsToMany(BeerIndex, {
  through: {
    model: Pairing, 
    foreignKey: 'activity_id',
    unique: true}
});

Activity.hasOne(Pairing, {
  foreignKey: 'activity_id'
});

Pairing.belongsTo(Activity, {
  foreignKey: 'activity_id'
})

BeerIndex.hasOne(Pairing, {
  foreignKey: 'beerIndex_id'
});

Pairing.belongsTo(BeerIndex, {
  foreignKey: 'beerIndex_id'
})


module.exports = { User, BeerIndex, Activity, Pairing, Review };
