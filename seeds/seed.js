const sequelize = require('../config/connection');
const { User, Activity, BeerIndex, Review, Pairing } = require('../models');
const userData = require('./userData.json');
const activityData = require('./activityData.json');
const reviewsData= require('./reviews.json')
const pairingData = require('./pairingData.json')
const beerData = require('./beerData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData,{
    individualHooks: true,
  });

  await BeerIndex.bulkCreate(beerData);

  await Activity.bulkCreate(activityData);

  await Pairing.bulkCreate(pairingData);

  await Review.bulkCreate(reviewsData);

  process.exit(0);
};

seedDatabase();
