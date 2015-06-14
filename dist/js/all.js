angular.module('app', ['angular-locker','ui.router','ngResource','ui.bootstrap']);



angular.module('app').config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', 
    {
        url:'/home',
		controller: 'HomeController',
		templateUrl: 'templates/home-template.html'
    });
	
	$stateProvider.state('category', 
    {
        url:'/category',
		controller: 'CategoryController',
		templateUrl: 'templates/category-template.html'
    });
		
	$stateProvider.state('categories', 
    {
        url:'/categories/:id',
    	controller: 'CategoriesController',
		templateUrl: 'templates/categories-template.html'
    });
	
	$stateProvider.state('product',
	{
		url:'/categories/:id#item:item',
		controller: 'CategoriesController',
		templateUrl: 'templates/categories-template.html'
	}
	);
	
	$stateProvider.state('checkout',
	{
		url:'/checkout',
		controller: 'CheckoutController',
		templateUrl: 'templates/checkout-template.html'
	}
	);
});
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
angular.module('app').factory('CategoriesResource', function($resource) {
    return $resource('http://smartninja.betoo.si/api/eshop/categories/:id/products');
});
angular.module('app').controller('CategoryController', function($scope,CategoryResource){
	$scope.categories = CategoryResource.query();
});
angular.module('app').factory('CategoryResource', function($resource) {
    return $resource('http://smartninja.betoo.si/api/eshop/categories');
});
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
angular.module('app').directive('header', function() {
    return {
        templateUrl: 'templates/header-template.html'
    };
});
angular.module('app').controller('HomeController', function($scope,HomeResource){
	$scope.items = HomeResource.query();
    $scope.interval = 3000;
});


angular.module('app').directive('home', function() {
    return {
        templateUrl: 'templates/home-template.html'
    };
});
angular.module('app').factory('HomeResource', function($resource) {
    return $resource('http://smartninja.betoo.si/api/eshop/products?onlyOnSale=true');
});
angular.module('app').directive('main', function() {
    return {
        template: '<ui-view></ui-view>'
    };
});