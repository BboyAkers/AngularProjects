'use strict';

// Declare app level module which depends on views, and components
 var app = angular.module('myDash', ['ui.router', 'auth0']);

app.config(['$locationProvider','$stateProvider', 'authProvider', function ($locationProvider, $stateProvider, authProvider) {

    // $locationProvider.html5Mode(true);

    authProvider.init({
        domain: 'mydomain.auth0.com',
        clientID: 'myClientID',
        loginUrl: '/login'
    });

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/views/home/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .state('portfolio', {
            // abstract: true,
            url: '/portfolio',
            templateUrl: '/views/portfolio/portfolio.html',
            controller: 'PortfolioController',
            controllerAs: 'portfolio'
        })
        //Nested portfolio states
        .state('portfolio.professionalProjects', {
            url: '/professional',
            templateUrl: '/views/portfolio/professionalProjects.html'
        })
        .state('portfolio.personalProjects', {
            url: '/personal',
            templateUrl: '/views/portfolio/personalProjects.html'
        })
        .state('portfolio.funProjects', {
            url: '/fun',
            templateUrl: '/views/portfolio/funProjects.html'
        })
        //Main tab
        .state('invoicing', {
            url: '/invoicing',
            templateUrl: '/views/invoicing/invoicing.html',
            controller: 'InvoiceController',
            controllerAs: 'invoice'
        })
        .state('email', {
            url: '/email',
            controller: 'EmailController',
            controllerAs: 'email'
        })
        .state('news', {
            url: '/news',
            templateUrl: '/views/news/news.html',
            controller: 'NewsController',
            controllerAs: 'news'
        });

}]);

app.run(function(auth) {
    auth.hookEvents();
});