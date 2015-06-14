angular.module('app').controller('CheckoutController', function($scope,$location,locker,$rootScope){
	$scope.validate = false;
	
	$scope.validateData = function(value){
		if(value){
			locker.empty();
			$rootScope.$broadcast('itemChanged');
			alert('Order successfully sent!');
			$location.path('home');
		}
		
		$scope.validate = !value;
	}
	

	  $scope.open = function($event) {
		$event.preventDefault();
		$event.stopPropagation();

		$scope.opened = true;
	  };

	  $scope.dateOptions = {
		formatYear: 'yy',
		startingDay: 1
	  };

	  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	  $scope.format = $scope.formats[0];
	 
	 
	 

});