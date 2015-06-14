angular.module('app').factory('CategoryResource', function($resource) {
    return $resource('http://smartninja.betoo.si/api/eshop/categories');
});