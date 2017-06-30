(function() {
    'use strict';
    angular.module('myDash')
        .controller('HomeController', ['$scope', 'githubService', 'weatherService', HomeController]);


function HomeController($scope, githubService, weatherService) {
    var vm = this;

    githubService.getAvatar().then(function(avatar_url) {
        vm.githubAvatar = avatar_url;
    });
    githubService.getRepoInfo().then(function(repos) {
        vm.githubRepo = repos;
    });

    //TODO: Need to link weather icon

    weatherService.getWeatherTemp().then(function (temp) {
        vm.weatherTemp =  temp;
    });

    weatherService.getWeatherDescription().then(function(desc){
        vm.weatherDesc = desc;
    });


}

}());