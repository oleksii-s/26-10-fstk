angular.module('HelloUserApp', [])
    .controller('HelloUserController', function($scope) {
        $scope.greeting = "Hello User!";
    });