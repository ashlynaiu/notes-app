'use strict';

/**
 * @ngdoc function
 * @name notesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the notesApp
 */
angular.module('notesApp')
  .directive('createNote', function (notesData) {
    console.log('loaded directive');
    return {
        templateUrl: 'views/main.create.html',

        link: function ($scope) {
            //Create Scope for Data in Directive
            $scope.notes = notesData;

            //Submit new note
            $scope.submit = function() {
                var newID = $scope.notes.length + 1;
                if($scope.notes.title && $scope.notes.message) {
                    $scope.notes.push(
                        {
                            'id': newID,
                            'title': $scope.notes.title,
                            'message': $scope.notes.message
                        }
                    );
                    $scope.notes.title = '';
                    $scope.notes.message = '';
                    $scope.toogleCreate = false;
                    $scope.form.$setPristine();
                }
            };
        }
      };
  });