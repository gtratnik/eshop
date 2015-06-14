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