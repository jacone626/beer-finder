$(window).on("load", function () {
  // Find the largest card height and width
  var largestHeight = 0;
  var largestWidth = 0;
  $(".card").each(function () {
    var cardHeight = $(this).height();
    var cardWidth = $(this).width();
    if (cardHeight > largestHeight) {
      largestHeight = cardHeight;
    }
    if (cardWidth > largestWidth) {
      largestWidth = cardWidth;
    }
  });

  // Set the height and width of all the cards to match the largest card
  $(".card").height(largestHeight);
  $(".card").width(largestWidth);
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


//addEventListener for menu dropdown selections
document.addEventListener("DOMContentLoaded", function (event) {
  var button = document.getElementById("logout");

  button.addEventListener("click", function () {
    document.location.href = window.location.origin + "/login";
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


const buttons = document.querySelectorAll(".new-review-form");

buttons.forEach((button) => {
  button.addEventListener("submit", (event) => {
    event.preventDefault();
    const content = button.querySelector("#new-review").value.trim();
    const emoji_starRating = button.querySelector("#new-star-rating").value.trim();
    const image = button.querySelector("#beerImage").value;
    const name = button.querySelector("#beerName").value;
    const strain = button.querySelector("#beerStrain").value;
    const activity = button.querySelector("#activityName").value;

    if (content && emoji_starRating) {
      fetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify({ content, emoji_starRating, image, name, strain, activity }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.ok) {
            document.location.replace("/");
          } else {
            alert("Failed to create a new review.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
});