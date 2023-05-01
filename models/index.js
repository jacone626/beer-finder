const User = require('./User');
const CannabisIndex = require('./weed');


User.hasMany(CannabisIndex, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, CannabisIndex };

