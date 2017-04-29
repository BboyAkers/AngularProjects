(function() {
    'use strict';
    angular.module('myDash')
        .controller('HomeController', ['$scope', 'githubService', 'weatherService', HomeController]);


function HomeController($scope, githubService, weatherService) {
    var vm = this;

    githubService.getAvatar().then(function(avatar_url) {
        $scope.githubAvatar = avatar_url;
    });
    githubService.getRepoInfo().then(function(repos) {
        $scope.githubRepo = repos;
    });

    //TODO: Need to debug

    weatherService.getWeatherTemp().then(function (temp) {
        $scope.weatherTemp =  temp;
    });

    weatherService.getWeatherDescription().then(function(desc){
        $scope.weatherDesc = desc;
    });


}

}());