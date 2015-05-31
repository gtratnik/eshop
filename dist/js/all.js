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
angular.module('app').controller('domovController', function($scope){
	$scope.example = 'domov';
});


angular.module('app').directive('domov', function() {
    return {
        templateUrl: 'templates/domov-template.html'
    };
});
angular.module('app').directive('glava', function() {
    return {
        templateUrl: 'templates/glava-template.html'
    };
});
angular.module('app').controller('kategorijaController', function($scope){
});
angular.module('app').controller('kosaricaController', function($scope){
});
angular.module('app').controller('nakupController', function($scope){
});
angular.module('app').controller('onasController', function($scope){
});
angular.module('app').controller('produktController', function($scope){
});
angular.module('app').directive('telo', function() {
    return {
        template: '<ui-view></ui-view>'
    };
});