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
                appid: 'f524e1aeeaeba7e6399719841c3ab164'
            }
        })
            .then(function (response) {
                var data = response.data;

                // if (typeof data === "string") {
                //     data = JSON.parse(data);
                // }
                data = {weather: data};
                // console.log(data);
                return data;
            });
    };

    this.getWeatherTemp = function () {
        return this.getWeather().then(function (data) {
            return data.weather.main.temp;
        });
    };
    
    this.getWeatherDescription = function () {
        return this.getWeather().then(function (data) {
            return data.weather.weather[0].description;
        });
    };


    return this;
}

