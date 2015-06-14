angular.module('app').controller('HomeController', function($scope,HomeResource){
	$scope.items = HomeResource.query();
    $scope.interval = 3000;
});

