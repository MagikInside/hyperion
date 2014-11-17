/**
 * Created by luisma on 11/11/14.
 */
var hyperion = angular.module('hyperion',  ['angularCharts']);

hyperion.controller('MainCtrl', function ($scope,  $http) {
    $scope.name = 'MaGiK';

    // When the page loads, ask for the data
    //ciudades
    $http.get('/api/cities')
        .success(function(data) {
            $scope.cities = data;
           insertDataCities();
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
    //términos
    $http.get('/api/terms')
        .success(function(data) {
            $scope.terms = data;
            insertDataTerms();
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

//Charts
   // Cities chart Config
    $scope.config = {
        title: 'Ciudades con más ofertas de trabajo',
        tooltips: true,
        labels: false,
        mouseover: function() {},
        mouseout: function() {},
        click: function() {},
        legend: {
            display: true,
            //could be 'left, right'
            position: 'right'
        },
        colors: ['#0092B2','#B6E548','#5F5448','#F3FDA7','#FF530D','#80BDBF','#2E2C2C','#FF4A6D','#74807B','#5F5448','#F3FDA7','#FF4A6D','#74807B','#FF530D','#008272','#0092B2','#B6E548','#80BDBF','#2E2C2C','#C6C4C7' ]
    };

    $scope.data = {
        series: ['Ofertas'],
        data: []
    };

    //Terms chart config
    $scope.config2 = {
        title: 'Términos más frecuentes',
        tooltips: true,
        labels: false,
        mouseover: function() {},
        mouseout: function() {},
        click: function() {},
        legend: {
            display: true,
            //could be 'left, right'
            position: 'right'
        },
        colors: ['#0092B2','#B6E548','#5F5448','#F3FDA7','#FF530D','#80BDBF','#2E2C2C','#FF4A6D','#74807B','#5F5448','#F3FDA7','#FF4A6D','#74807B','#FF530D','#008272','#0092B2','#B6E548','#80BDBF','#2E2C2C','#C6C4C7' ]
    };

    $scope.data2 = {
        series: ['Número de apariciones'],
        data: []
    };



   function insertDataCities() {
       $scope.cities.push({_id:"resto de ciudades",num:14045});
       for (var i = 0; i < $scope.cities.length ;i++ ) {
           var city = {};
           city.x = $scope.cities[i]._id.toUpperCase();
           city.y = [$scope.cities[i].num];
           city.tooltip = $scope.cities[i]._id.toUpperCase() + ' - ' + $scope.cities[i].num;
           $scope.data.data.push(city);
       }

   }
    function insertDataTerms() {

        for (var i = 0; i < $scope.terms.length ;i++ ) {
            var term = {};
            term.x = $scope.terms[i]._id;
            term.y = [$scope.terms[i].value];
            term.tooltip = $scope.terms[i]._id + ' - ' + $scope.terms[i].value;
            $scope.data2.data.push(term);
        }

    }

});
