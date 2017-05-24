(function () {

    angular.module('templateStore')

        .controller('StoreController', ['templateService', StoreController]);

    function StoreController($scope, templateService) {
        vm = this;

        templateService.getInfo().then(function (obj) {
            vm.names;
        })


    }

}());