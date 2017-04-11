'use strict';

angular.module('templateStore')
    .service(templateService, ['$http', templateService]);

function templateService($http) {

    this.getTemplates = function () {
        return $http({
            method: 'GET',

            //Dev URL
            url: 'json/templates.json'
        })
            .then(function (response) {
                var data = response.data;

                if (typeof data === "string") {
                    data = JSON.parse(data);
                }
                data = {templates: data};
                return data;
            });
    };
    this.getInfo() = function () {
        return this.getTemplates().then(function (data) {
            return data;
        });
    };


    return this;
}


// 'use strict';
// angular.module('myDash')
//     .service('weatherService', ['$http', weatherService]);
//
// function weatherService($http) {
//
//
//     this.getTemplates = function () {
//         return this.getWeather().then(function (data) {
//             return data.weather;
//         });
//     };
//     this.getWeatherObj = function () {
//         return this.getWeather().then(function (data) {
//             return data.main;
//         });
//     };
//
//
//     return this;
// }

