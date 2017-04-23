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
    // weatherService.getMainObj().then(function (weather) {
    //    $scope.mainObj =  weather;
    // });

    weatherService.getWeatherObj().then(function (main) {
        $scope.weatherObj =  main;
    });




    // vm.weatherService = weatherService;
    // console.log(weatherService);

    // vm.githubService = function() {
    //     githubService.save(this.newGithub,function () {
    //
    //     });
    // };

    // vm.treehouseService = treehouseService.treehouseObj;
    // console.log(treehouseService);


}
     HomeController.$inject = [];

}());