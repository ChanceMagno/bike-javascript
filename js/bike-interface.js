var Bike = require('./../js/bike.js').bikeModule;

var displayBikes = function(bikeList) {
  bikeList.forEach(function(bike){
    var bikeThumb = "";
    if(bike.thumb == null) {
      bikeThumb = "http://www.holycitysinner.com/wp-content/uploads/2016/10/No-Bikes-SMALLER.jpg";
    } else {
      bikeThumb = bike.thumb;
    }
    $('.bike-results').append("<div class='row'> <div class='col-offset-md-2 col-md-6'>" + bike.title + "is a " + bike.serial + ". </div> <div class='col-md-2'> <img src='" + bikeThumb + "' alt='picture of a bike' />  </div> </div> <br>");
  });

};

$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#search').click(function() {
    var location = $('#location').val();
    $('#location').val("");
    $(".bike-results").empty();
    // var bikes = currentBikeObject.getBikes(location);
    currentBikeObject.getBikes(location, displayBikes);
  });
});
