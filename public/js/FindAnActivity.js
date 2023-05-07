

document.addEventListener("DOMContentLoaded", function () {
  const activities = [
    {
      "id": 1,
      "name": "Playing guitar"
    },
    {
      "id": 2,
      "name": "Snowboarding"
    },
    {
      "id": 3,
      "name": "Volunteering"
    },
    {
      "id": 4,
      "name": "Photography"
    },
    {
      "id": 5,
      "name": "Playing chess"
    },
    {
      "id": 6,
      "name": "Surf fishing"
    },
    {
      "id": 7,
      "name": "Cooking on a grill"
    },
    {
      "id": 8,
      "name": "Skydiving"
    },
    {
      "id": 9,
      "name": "Surfing on the internet"
    },
    {
      "id": 10,
      "name": "Meditating"
    },
    {
      "id": 11,
      "name": "Attending a concert"
    },
    {
      "id": 12,
      "name": "Scuba diving"
    }
  ];

  const randomActivities = activities.sort(() => 0.5 - Math.random()).slice(0, 5);

  // Generate buttons for each activity
  randomActivities.forEach(activity => {
    const button = document.createElement("button");
    button.classList.add("button", "is-rounded", "is-primary");
    button.textContent = activity.name;
    button.addEventListener("click", () => {
      window.location.replace(`activity/${activity.id}`);
    });
    document.getElementById("RandomButtons").appendChild(button);
  });
});

//addEventListener for menu dropdown selections
document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("logout");

  button.addEventListener("click", function () {
    document.location.href = 'http://localhost:3001/login';
  });
})


document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("Homepage");

  button.addEventListener("click", function () {
    document.location.href = 'http://localhost:3001/';
  });
})


document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("Find an Activity");

  button.addEventListener("click", function () {
    document.location.href = 'http://localhost:3001/FindAnActivity';
  });
})


document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("Explore a Strain");

  button.addEventListener("click", function () {
    document.location.href = 'http://localhost:3001/strains';
  });
})