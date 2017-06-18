(function () {
    'use strict';
    angular.module('myDash')
        .controller('LoginController', ['$scope', 'auth']);


    function LoginController($scopte, auth) {
        var vm = this;

        $scope.signin = function() {
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



angular.module('myCoolApp').controller('LoginCtrl', function(auth) {
    $scope.signin = function() {
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
});