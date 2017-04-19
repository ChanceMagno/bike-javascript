var Bike = require('./../js/bike.js').bikeModule;



var displayBikes = function(bikeList) {
  bikeList.forEach(function(bike){
    var bikeThumb = "";
    if(bike.thumb == null) {
      bikeThumb = "http://www.holycitysinner.com/wp-content/uploads/2016/10/No-Bikes-SMALLER.jpg";
    } else {
      bikeThumb = bike.thumb;
    }
    $('.bike-results').append("<div class='row'> <div class='col-offset-md-2 col-md-6'> <strong>Bike Model:</strong>" + bike.title + "<br> <strong>Serial Number:</strong> " + bike.serial + ". </div> <div class='col-md-2'> <img src='" + bikeThumb + "' alt='picture of a bike' />  </div> </div> <hr> <br>");
  });

};


var location;

$(document).ready(function() {
  var currentBikeObject = new Bike();

  $('#search').click(function() {
    location = $('#location').val();
    $('#location').val("");
    $(".bike-results").empty();
    currentBikeObject.getBikes(location, displayBikes);
  });

    $("#next").click(function(){
      currentBikeObject.next();
      $(".bike-results").empty();
      currentBikeObject.getBikes(location, displayBikes);
    })
});
