var currentPage = 1;
var searchCount;

function Bike() {
}

Bike.prototype.next = function() {
  currentPage += 1;
}

Bike.prototype.previous = function() {
  currentPage -= 1;
}

Bike.prototype.getBikes = function(location, displayBikes) {
  $.get('https://bikeindex.org:443/api/v3/search?page=' + currentPage + '&per_page=25&location=' +
    location + '&distance=10&stolenness=proximity').then(function(response) {
      displayBikes(response.bikes);
    }).fail(function(error) {
      $('.bike-results').text(error.responseJSON.message);
    });
};

exports.bikeModule = Bike;
