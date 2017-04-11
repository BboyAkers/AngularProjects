(function () {
    angular.module('myDash')
        .service('treehouseService', ['$http', treehouseService]);
    var service = {
        treehouseObj : {}
    };

    function treehouseService($http) {

        $http({
            method: 'GET',
            //Production URL
            //url: 'http://api.opentreehousemap.org/data/2.5/forecast/city?id=4719457',

            //Dev URL
            url:'json/treehouse.json'
            //  params: {
            //      mode: 'json',
            //      units: 'imperial',
            //      appid: 'f524e1aeeaeba7e6399719841c3ab164'
            // }
        })
            .then(function (response) {
                //cache answer in the service
                angular.copy(response.data, service.treehouseObj);
                return response.data;
            });
        return service;
    }

}());