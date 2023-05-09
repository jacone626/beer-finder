//addEventListener for Strain types
document.addEventListener("DOMContentLoaded", function (event) {
    var button = document.getElementById("sativa-btn");
    button.addEventListener("click", function () {
        document.location.href = window.location.origin + "/strain/Sativa";
        
    });
})


document.addEventListener("DOMContentLoaded", function (event) {
    var button = document.getElementById("indica-btn");

    button.addEventListener("click", function () {
        document.location.href = window.location.origin + "/strain/Indica";
    });
})


document.addEventListener("DOMContentLoaded", function (event) {
    var button = document.getElementById("hybrid-btn");

    button.addEventListener("click", function () {
        document.location.href = window.location.origin + '/strain/Hybrid';
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