(function(){
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

                // if (typeof data === "string") {
                //     data = JSON.parse(data);
                // }
                data = {templates: data};
                console.log(data);
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
}());
