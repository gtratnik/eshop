angular.module('app').controller('HeaderController', function($scope, $modal,locker) {
	$scope.itemsCount = 0;
	
	$scope.$on('itemChanged', function() {
      setCount();
	});
	
	var setCount = function(){
		var items = locker.get('items',[]);
		if(items != undefined){
			$scope.itemsCount = items.length;
		}
	};
	setCount();
	
	
	$scope.openBasket = function(){
		var modalInstance = $modal.open({
			templateUrl: 'templates/basket-template.html',
			controller: 'BasketController'
		});
		
		$scope.$on('modalClose',function(){
			modalInstance.dismiss('cancel');
		});
	};
});