(function(){
'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('templateStore', ['ui.router']);

app.config(['$stateProvider', function ($stateProvider) {

  $stateProvider
      .state('store', {
          url: '/',
        templateUrl: '/views/templates/templates.html',
          controller:'StoreController',
          controllerAs: 'store'
      });
}]);
}());
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

(function () {

    angular.module('templateStore')

        .controller('StoreController', ['templateService', StoreController]);

    function StoreController($scope, templateService) {
        vm = this;

        templateService.getInfo().then(function (obj) {
            vm.names;
        })


    }
    StoreController.$inject = ['templateService']
}());
(function () {
'use strict';
    angular.module('templateStore')

        .controller('StoreController', ['templateService', StoreController]);

    function StoreController(templateService) {
        vm = this;

        // vm.templateService = templateService.


    }

}());