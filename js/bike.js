var bikeList =[];

function Bike() {
}

Bike.prototype.getBikes = function(location, displayBikes) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' +
    location + '&distance=10&stolenness=proximity').then(function(response) {
      displayBikes(response.bikes);
    }).fail(function(error) {
      $('.bike-results').text(error.responseJSON.message);
    });
};

exports.bikeModule = Bike;
