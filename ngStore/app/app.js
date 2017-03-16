'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('templateStore', ['ui.router']);

app.config(['$stateProvider', function ($stateProvider) {

  $stateProvider
      .state('store', {
        templateUrl: '',
          controller:'StoreController',
          controllerAs: 'store'
      });
}]);