'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesApp
 */
angular.module('notesApp')
  .controller('MainCtrl', function ($scope, notesData) {
    $scope.notes = notesData;

    $scope.delete = function(index) {
        $scope.notes.splice(index, 1);
    };
  });