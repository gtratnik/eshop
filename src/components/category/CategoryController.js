angular.module('app').controller('CategoryController', function($scope,CategoryResource){
	$scope.categories = CategoryResource.query();
});