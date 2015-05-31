angular.module('app', ['ui.router']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('domov', 
    {
        url:'/domov',
		controller: 'domovController',
		templateUrl: 'templates/domov-template.html'
    });
	
	$stateProvider.state('kategorija', 
    {
        url:'/kategorija',
		controller: 'kategorijaController',
		templateUrl: 'templates/kategorija-template.html'
    });
	
	$stateProvider.state('kosarica', 
    {
        url:'/kosarica',
		controller: 'kosaricaController',
		templateUrl: 'templates/kosarica-template.html'
    });
	
	$stateProvider.state('onas', 
    {
        url:'/onas',
		controller: 'onasController',
		templateUrl: 'templates/onas-template.html'
    });
});