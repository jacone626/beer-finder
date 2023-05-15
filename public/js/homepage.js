$(window).on("load", function() {
  // Find the largest card height and width
  var largestHeight = 0;
  var largestWidth = 0;
  $(".card").not(".user-activities-card").each(function () { // exclude the user-activities-card from resizing
    var cardHeight = $(this).height();
    var cardWidth = $(this).width();
    if (cardHeight > largestHeight) {
      largestHeight = cardHeight;
    }
    if (cardWidth > largestWidth) {
      largestWidth = cardWidth;
    }
  });

  // Set the height and width of all the cards except user-activities-card to match the largest card
  $(".card").not(".user-activities-card").height(largestHeight);
  $(".card").not(".user-activities-card").width(largestWidth);
});

$(window).on('load', function () {
  var smallestHeight = null;
  var smallestWidth = null;
  // loop through all images and find the smallest height and width
  $('img').each(function () {
    var height = $(this).height();
    var width = $(this).width();
    if (smallestHeight === null || height < smallestHeight) {
      smallestHeight = height;
    }
    if (smallestWidth === null || width < smallestWidth) {
      smallestWidth = width;
    }
  });
  // set the height and width of all images to the smallest values
  $('img').height(smallestHeight);
  $('img').width(smallestWidth);
});

const selectedActivities = JSON.parse(localStorage.getItem("selectedActivities")) || [];
const uniqueActivityIds = new Set();
console.log(selectedActivities)
  console.log(uniqueActivityIds)
selectedActivities.forEach(activity => {
  if (!uniqueActivityIds.has(activity.id)) {
    uniqueActivityIds.add(activity.id);
    const button = document.createElement("button");
    button.classList.add("button", "is-rounded", "is-primary", "is-fullwidth", "is-size-5-desktop", "is-vcentered", "mx-2");
    button.style.marginBottom = "20px";
    button.textContent = activity.name;
    button.addEventListener("click", () => {
      window.location.href = window.location.origin + '/' + 'activity' + '/' + activity.id;
    });
    document.querySelector("#UserActivitiesContainer .card-content").appendChild(button);
  }
});

const DisplayActivities = document.getElementById("selected-activities");

// Check if there are any child elements
if (DisplayActivities.children.length > 0) {
  // If there are child elements, remove the is-hidden class from UserActivitiesContainer
  const userActivitiesContainer = document.getElementById("UserActivitiesContainer");
  userActivitiesContainer.classList.remove("is-hidden");
} else {
  // If there are no child elements, add the is-hidden class to UserActivitiesContainer
  const userActivitiesContainer = document.getElementById("UserActivitiesContainer");
  userActivitiesContainer.classList.add("is-hidden");
}










//addEventListener for menu dropdown selections
document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("logout");

  button.addEventListener("click", function () {
    document.location.href = window.location.origin + '/login';
  });

})


document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("Homepage");

  button.addEventListener("click", function () {
    document.location.href = window.location.origin;
  });
})


document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("Find an Activity");

  button.addEventListener("click", function () {
    document.location.href = window.location.origin + '/FindAnActivity';
  });
})


document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("Explore a Strain");

  button.addEventListener("click", function () {
    document.location.href = window.location.origin + '/strains';
  });
})

const ratingElements = document.querySelectorAll("#ReviewsContainer #Rating");
for (let i = 0; i < ratingElements.length; i++) {
  const ratingElement = ratingElements[i];
  const starCount = parseInt(ratingElement.textContent.match(/\d+/)[0]);
  const stars = "⭐".repeat(starCount);
  ratingElement.textContent += stars;
  ratingElement.textContent = ratingElement.textContent.replace(/\d+/g, "");
}
