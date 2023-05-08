
// // get search bar element
// const searchInput = document.getElementById("searchInput");

// // store name elements in array-like object
// const namesFromDOM = document.getElementsByClassName("name");

// // listen for user events
// searchInput.addEventListener("keyup", (event) => {
//     const { value } = event.target;

//     // get user search input converted to lowercase
//     const searchQuery = value.toLowerCase();

//     for (const nameElement of namesFromDOM) {
//         // store name text and convert to lowercase
//         let name = nameElement.textContent.toLowerCase();

//         // compare current name to search input
//         if (name.includes(searchQuery)) {
//             // found name matching search, display it
//             nameElement.style.display = "block";
//         } else {
//             // no match, don't display name
//             nameElement.style.display = "none";
//         }
//     }
// });




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