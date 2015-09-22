'use strict';

//Setting up route
angular.module('machigaeru').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/templates/message_list.html',
            controller: 'IndexController',
            title: 'Machigaeru'
        }).
        when('/chatwindow/:chatid', {
            templateUrl: '/templates/message_detail.html',
            controller: 'ChatController',
            title: 'Machigaeru'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('machigaeru').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

// var isLoggedIn = function ($q, $cookies, $location) {
//     console.log('*** resolving ****' + $cookies.user);
//     console.log('*** prof status ****' + $cookies.profileStatus);
//     var deferred = $q.defer();
//     if ($cookies.user === undefined) {
//         deferred.reject();
//         $window.location.href = '/#!/login';
//     } else {
//         if ($cookies.profileStatus === 'approved') {
//             return true;
//         } else {
//             $location.path("/selectplan");
//         }
//     }
//     return deferred.promise;
// }

// angular.module('machigaeru').run(['$location', '$rootScope', function($location, $rootScope) {
//     $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
//         //Change page title, based on Route information
//         $rootScope.pageTitle = current.$$route? current.$$route.title : 404;
//     });
// }]);
