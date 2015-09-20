'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesApp
 */
angular.module('notesApp').factory('notesData', function($http) {
    return  {
        getNotes : function() {
            return $http({
                url: '/notes',
                method: 'GET'
            });
        }
    };
});