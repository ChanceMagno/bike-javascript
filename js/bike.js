var currentPage = 1;
var searchCount;
var bikeIds = [];
var bikeCords = [];

function Bike() {
}

Bike.prototype.next = function() {
  currentPage += 1;
}

Bike.prototype.previous = function() {
  currentPage -= 1;
}

Bike.prototype.getCoordinates = function() {
  bikeIds.forEach(function(id){
      $.get('https://bikeindex.org:443/api/v3/bikes/' + id).then(function(response) {
       bikeCords.push("{lat: " + response.bike.stolen_record.latitude + ", lng:" + response.bike.stolen_record.longitude + "},");
    });

  })
};

Bike.prototype.getBikes = function(location, displayBikes) {
  $.get('https://bikeindex.org:443/api/v3/search?page=' + currentPage + '&per_page=25&location=' +
    location + '&distance=2&stolenness=proximity').then(function(response) {
      response.bikes.forEach(function(bike){
        bikeIds.push(bike.id);
      });
      displayBikes(response.bikes);
    }).fail(function(error) {
      $('.bike-results').text(error.responseJSON.message);
    });
};







exports.bikeModule = Bike;
