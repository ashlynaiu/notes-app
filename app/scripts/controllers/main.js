'use strict';

/**
 * @ngdoc function
 * @name ashlynTemplate.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ashlynTemplate
 */
angular.module('ashlynTemplate')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
