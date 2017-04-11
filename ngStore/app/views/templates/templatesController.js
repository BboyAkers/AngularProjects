(function () {

    angular.module('templateStore')

        .controller('StoreController', ['$scope', 'templateService', StoreController]);

    function StoreController($scope, templateService) {
        vm = this;

        templateService.getInfo().then(function (obj) {
            $scope.id
        })


    }

}());