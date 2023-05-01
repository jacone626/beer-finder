const User = require('./User');
const CannabisIndex = require('./cannabisIndex');
// const Activity = require('./activity')
// const Reviews =require('./reviews')


User.hasMany(CannabisIndex, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


// module.exports = { User, CannabisIndex, Activity, Reviews };
module.exports = { User, CannabisIndex};

