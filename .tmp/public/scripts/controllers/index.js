'use strict';


// angular.module('machigaeru').controller('navigation', ['$scope', '$http', '$cookies', '$window', function ($scope, $http, $cookies, $window) {
//     if ($cookies.user === undefined)
//          $window.location.href = '/#!/login';

//     $scope.logout = function() {
//         $http.get('/logout').success(function() {
//             $cookies.user = undefined;
//             $window.location.href = '/';
//         });
//     };
// }]);

angular.module('machigaeru').controller('IndexController', ['$scope', '$http', '$cookies', '$window','$location', function ($scope, Global, $http, $cookies, $window, $location) {
    
    $scope.apps = [];
}]);


angular.module('machigaeru').controller('ChatController', ['$scope', '$http', '$cookies', '$window','$location', function ($scope, Global, $http, $cookies, $window, $location) {
    
    $scope.apps = [];
}]);