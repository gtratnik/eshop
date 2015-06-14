angular.module('app').factory('HomeResource', function($resource) {
    return $resource('http://smartninja.betoo.si/api/eshop/products?onlyOnSale=true');
});