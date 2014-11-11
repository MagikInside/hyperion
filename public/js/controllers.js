/**
 * Created by luisma on 11/11/14.
 */
var hyperion = angular.module('hyperion', []);

hyperion.controller('MainCtrl', function ($scope,  $http) {
    $scope.name = 'MaGiK';

    // CWhen the page loads, ask for the data
    $http.get('/api/cities')
        .success(function(data) {
            $scope.cities = data;
           // console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

});
