const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define a model that maps to the table in the database
class Activity extends Model {}
Activity.init({
  name: DataTypes.STRING,
  emoji: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Activity'
});


const displayActivities = async () => {
  try {
    const activities = await Activity.findAll({
      order: sequelize.random(),
      limit: 7
    });

    // Iterate over the activities and display them on the page
    const activityList = document.getElementById('activityList');
    activities.forEach(activity => {
      const activityItem = document.createElement('li');
      activityItem.innerText = activity.name;
      activityItem.addEventListener('mouseover', () => {
        activityItem.innerText = activity.emoji;
      });
      activityItem.addEventListener('mouseout', () => {
        activityItem.innerText = activity.name;
      });
      activityList.appendChild(activityItem);
    });
  } catch (error) {
    console.error(error);
  }
};

// Call the function to display the activities
displayActivities();

module.exports = Activity;
