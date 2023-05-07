$(document).ready(function () {
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

$(window).on('load', function() {
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
