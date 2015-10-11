'use strict';

//Setting up route
angular.module('machigaeru').config(['$routeProvider',
    function($routeProvider, $window) {
        $routeProvider.
        when('/', {
            controller: 'IndexController',
            title: 'Machigaeru',
            resolve: {
                factory: isLoggedIn
            }
        }).
        when('/messagecenter', {
            templateUrl: '/templates/index.html',
            controller: 'ChatController',
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

var isLoggedIn = function ($q, $cookies, $location, $window) {
    console.log('*** resolving ****' + $cookies.loggedUser);
    var deferred = $q.defer();
    if ($cookies.loggedUser === undefined) {
        deferred.reject();
        $window.location.href = '/#!/';
    } else {
        $location.path("/messagecenter");
    }
    return deferred.promise;
}

// angular.module('machigaeru').run(['$location', '$rootScope', function($location, $rootScope) {
//     $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
//         //Change page title, based on Route information
//         $rootScope.pageTitle = current.$$route? current.$$route.title : 404;
//     });
// }]);
