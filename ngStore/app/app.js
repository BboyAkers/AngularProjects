'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('templateStore', ['ui.router']);

app.config(['$stateProvider', function ($stateProvider) {

  $stateProvider
      .state('store', {
          url: '/',
        templateUrl: '/views/templates/templates.html',
          controller:'StoreController',
          controllerAs: 'store'
      });
}]);