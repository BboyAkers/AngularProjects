(function(){
    'use strict';

    angular.module('templateStore')
        .service(templateService, ['$http', templateService]);

    function templateService($http){

        $http({
            method: 'GET',
            url: 'json/tempaltes.json'
        })
            .then(function(response){
               return response.data;
            });
    }





}());