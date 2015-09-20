'use strict';
angular.module('notesApp').factory('sequelize', function($http) { 
    return{
        db : function() {
            return $http({
                url: '/database/sequelize.js',
                method: 'GET'
            });
        }
    };    
});