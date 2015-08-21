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
    $scope.toogleModel = false;
    
    $scope.delete = function(index) {
        $scope.notes.splice(index, 1);
    };
    $scope.toogleButton = function() {
        if ($scope.toogleModel === false) {
          $scope.toogleModel = true;
        }
        else {
          $scope.toogleModel = false;
        }
    };
  });