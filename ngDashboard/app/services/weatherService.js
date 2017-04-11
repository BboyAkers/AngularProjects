'use strict';
angular.module('myDash')
    .service('weatherService', ['$http', weatherService]);

function weatherService($http) {

    this.getWeather = function () {
        return $http({
            method: 'GET',
            //Production URL
            url: 'http://api.openweathermap.org/data/2.5/weather?zip=75093',

            //Dev URL
            //url: 'json/weather.json',
            params: {
                mode: 'json',
                units: 'imperial',
                appid: 'API_KEY'
            }
        })
            .then(function (response) {
                var data = response.data;

                if (typeof data === "string") {
                    data = JSON.parse(data);
                }
                data = {weather: data};
                return data;
            });
    };

    this.getMainObj = function () {
        return this.getWeather().then(function (data) {
            return data.weather;
        });
    };
    this.getWeatherObj = function () {
        return this.getWeather().then(function (data) {
            return data.main;
        });
    };


    return this;
}

