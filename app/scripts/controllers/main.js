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
    $scope.notes = notesData.getNotes()
        .success(function(data) {
            $scope.notes = data;
            console.log(data);
        })
        .error(function(error) {
            console.log('Error >>>>', error);
        });
    console.log('test7');
    // $scope.delete = function(index) {
    //     $scope.notes.reverse();
    //     $scope.notes.splice(index, 1);
    //     $scope.notes.reverse();
    // };
    // $scope.toogleButton = function() {
    //     if ($scope.toogleModel === false) {
    //       $scope.toogleModel = true;
    //     }
    //     else {
    //       $scope.toogleModel = false;
    //     }
    // };
  });