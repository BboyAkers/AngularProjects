(function () {

    angular.module('templateStore')

        .controller('StoreController', ['templateService', StoreController]);

    function StoreController(templateService) {
        vm = this;

        templateService.getInfo().then(function (names) {
            vm.names = names;
        })


    }
    StoreController.$inject = ['templateService']
}());