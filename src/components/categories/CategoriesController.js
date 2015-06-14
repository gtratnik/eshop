angular.module('app').controller('CategoriesController', function($scope,$stateParams,CategoriesResource,locker,$anchorScroll,$location,$timeout,$rootScope){
   $scope.alerts = [];
   $scope.categoryItems = CategoriesResource.query({id : $stateParams.id});
   $scope.loc = $location.hash().substr(4);
   
	
   $scope.currentPage = 1;
   $scope.$watch('currentPage', function() {
       window.scrollTo(0, 0);
   });

   $scope.addToBasket = function(item){  
	  var items = locker.get('items');
	  if(items != undefined){
		items.push(item);
	  }else{
		  items = [item];
	  }
	  locker.put('items',items);
	  
	  $scope.alerts.push({ type: 'info', msg: 'Item '+item.name+' successfully added to basket!' });
	  $rootScope.$broadcast('itemChanged');
   };
   
   //so we don't have to wait for elements to show :)
	$scope.scrollPage = function(last){
		if(last){
            $anchorScroll();
		}
	};
	
	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
});