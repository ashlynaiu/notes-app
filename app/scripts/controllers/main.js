'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesApp
 */
angular.module('notesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.notes = [
        {
            "title": "Note 1",
            "message": "this is note #1"
        },
        {
            "title": "Note 2",
            "message": "this is note #2"
        }
    ];

    $scope.submit = function() {
        if($scope.notes.title && $scope.notes.message) {
            $scope.notes.push(
                {
                    "title": $scope.notes.title,
                    "message": $scope.notes.message
                }
            );
            $scope.notes.title = '';
            $scope.notes.message = '';
            $scope.toogleCreate = false;
            $scope.form.$setPristine();
        }
    };
    $scope.delete = function(index) {
        $scope.notes.splice(index, 1);
    };
    console.log('Main controller loaded')
  });
