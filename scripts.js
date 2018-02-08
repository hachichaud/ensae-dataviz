// Highcharts super simple example

$(function () {
    $('#highchart-container-1').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});

// Import data
// Using d3js
d3.json('flavors_of_cacao.json', function(err, data) {
  $('#cacao-data-1').text(JSON.stringify(data, null, 2));
})
d3.json('data-to-transform.json', function(err, data) {
  $('#transformed-data-1').text(JSON.stringify(data, null, 2));

  var curatedData = _(data.data.inTheaters)
  .map('movies')
  .flatten()
  .map(function(movie){
    return {
      votes: movie.votes,
      title: movie.title,
      metascore: +movie.metascore,
      filmingLocationsCount: movie.filmingLocations.length
    };
  })
  .sortBy(function(movie) {return - movie.metascore})
  .value()

  $('#transformed-data-2').text(JSON.stringify(curatedData, null, 2))

})

// Import CSV data using PapaParse
Papa.parse('flavors_of_cacao.csv', {
  download: true,
  header: true,
  complete: function(results){
    $('#papa-data-1').text(JSON.stringify(results, null, 2));
  }
});
