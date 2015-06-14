angular.module('app').controller('BasketController', function($scope,locker,$rootScope,$location){
	$scope.items = locker.get('items',[]);
	$scope.totalValue = 0;

	$scope.removeItem = function(item){
		if($scope.items != undefined){
			$scope.items.splice(item,1);
			locker.put('items',$scope.items);
			$rootScope.$broadcast('itemChanged');
			loadItems();
		}
		
	};
	
	var loadItems =  function() {
		$scope.totalValue = 0;
      	angular.forEach($scope.items, function(value) {
			$scope.totalValue += value.price;
		});
	};
	loadItems();
	
	$scope.checkOut = function(){
		$rootScope.$broadcast('modalClose');
		$location.path('checkout');
	};
});