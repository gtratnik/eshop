angular.module('app').factory('CategoriesResource', function($resource) {
    return $resource('http://smartninja.betoo.si/api/eshop/categories/:id/products');
});