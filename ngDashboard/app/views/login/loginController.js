    (function () {
    'use strict';
    angular.module('myDash')
        .controller('LoginController', ['$scope', 'auth']);


    function LoginController($scopte, auth) {
        var vm = this;

        vm.signin = function() {
            auth.signin({
                authParams: {
                    scope: 'openid name email' // Specify the scopes you want to retrieve
                }
            }, function(profile, idToken, accessToken, state, refreshToken) {
                $location.path('/user-info')
            }, function(err) {
                console.log("Error :(", err);
            });
        }
    }
}());
