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