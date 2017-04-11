'use strict';
angular.module('myDash')
    .service('githubService', ['$http', githubService]);

function githubService($http) {

    this.getRepos = function () {
        return $http({
            method: 'GET',
            //Production URL
            url: 'https://api.github.com/users/BboyAkers/repos'

            //Dev URL
            //url:'json/githubRepos.json',
        })
            .then(function (response) {
                var data = response.data;

                if (typeof data === "string") {
                    data = JSON.parse(data);
                }
                data = {repos: data};
                return data;
            });
    };

    this.getAvatar = function () {
        return this.getRepos().then(function (data) {
            return data.repos[0].owner.avatar_url;
        });
    };
    this.getRepoInfo = function () {
        return this.getRepos().then(function (data) {
            return data.repos;
        });
    };


    return this;
}
