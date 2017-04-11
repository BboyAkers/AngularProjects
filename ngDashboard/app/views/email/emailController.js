(function(){
    'use strict';
    angular.module('myDash')

        .controller('EmailController', EmailController);

    function EmailController() {
        var vm = this;
    }

    EmailController.$inject = [];

}());