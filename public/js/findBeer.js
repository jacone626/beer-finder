$(window).on("load", function () {
    // Find the largest card height and width
    var largestHeight = 0;
    var largestWidth = 0;
    $(".card").each(function () {
      var cardHeight = $(this).height();
      var cardWidth = $(this).width();
      console.log("Card height: " + cardHeight);
      console.log("Card width: " + cardWidth);
      if (cardHeight > largestHeight) {
        largestHeight = cardHeight;
      }
      if (cardWidth > largestWidth) {
        largestWidth = cardWidth;
      }
    });
    console.log("Largest height: " + largestHeight);
    console.log("Largest width: " + largestWidth);
  
    // Set the height and width of all the cards to match the largest card
    $(".card").height(largestHeight);
    $(".card").width(largestWidth);


  });


//addEventListener for Strain types
document.addEventListener("DOMContentLoaded", function (event) {
    var button = document.getElementById("sour-btn");
    button.addEventListener("click", function () {
        document.location.href = window.location.origin + "/strain/Sour";
        
    });
})


document.addEventListener("DOMContentLoaded", function (event) {
    var button = document.getElementById("lager-btn");

    button.addEventListener("click", function () {
        document.location.href = window.location.origin + "/strain/Lager";
    });
})


document.addEventListener("DOMContentLoaded", function (event) {
    var button = document.getElementById("ale-btn");

    button.addEventListener("click", function () {
        document.location.href = window.location.origin + '/strain/Ale';
    });
})

//addEventListener for menu dropdown selections
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