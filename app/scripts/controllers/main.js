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
    $scope.notes = [];
    $scope.toogleModel = false;

    notesData.getNotes()
        .success(function(data){
            $scope.notes = data;
        })
        .error(function(err) {
            console.log('Error >>>>', err);
        })
    $scope.delete = function(index) {
        $scope.notes.reverse();
        $scope.notes.splice(index, 1);
        $scope.notes.reverse();
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