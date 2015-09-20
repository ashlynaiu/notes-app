'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesApp
 */
angular.module('notesApp').factory('notesData', function() {
    var data = query.all.then(function(notes) {
        return notes;
    });
    // [
    //     {
    //         'id': 1,
    //         'title': 'Note 1',
    //         'message': 'this is note #1'
    //     },
    //     {
    //         'id': 2,
    //         'title': 'Note 2',
    //         'message': 'this is note #2'
    //     }
    // ];
    return data;
  });