const sequelize = require('../config/connection');
const { User, Activity } = require('../models');

const userData = require('./userData.json');
const activityData = require('./activityData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Activity.bulkCreate(activityData.map(activity => ({
    ...activity,
    user_id: users[Math.floor(Math.random() * users.length)].id,
  })));

  process.exit(0);
};

seedDatabase();