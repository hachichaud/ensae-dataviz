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


// Using d3js


// Import data
d3.json('flavors_of_cacao.json', function(err, data) {
  $('#cacao-data-1').text(JSON.stringify(data, null, 2));
})
