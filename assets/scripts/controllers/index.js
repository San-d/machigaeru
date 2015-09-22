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

angular.module('machigaeru').controller('IndexController', [ '$scope', '$http', '$cookies', '$window','$location', function ($scope, $http, $cookies, $window, $location) {
    $scope.getviewwithdetails = function(userid){
        $location.url('/chatwindow/'+userid);
    }
}]);


angular.module('machigaeru').controller('ChatController', ['$scope', '$http','$routeParams', '$log', '$cookies', '$window','$location', function ($scope, $http,$routeParams, $log, $cookies, $window, $location) {
    console.log($routeParams.chatid);
    var socket = io.connect();
    var senderUser = '12345678',
        receiverUser = $routeParams.chatid;

    $scope.chatList = [];

    $scope.getAllchat = function(){

        io.socket.get('/chat/savechatdata', function (resData) {
            $scope.chatList = resData.chatdata[0].chatArray;
        });
    };

    $scope.getAllchat();

    io.socket.on('chat', function (msg) {

        // Let's see what the server has to say...
        switch(msg.verb) {

            case 'created':
                console.log("msg" + JSON.stringify(msg, null, 4));
                $scope.chatList.push(msg.data);
                $scope.$digest();
                break;

            default: return; // ignore any unrecognized messages
        }
    });

    $scope.sendMessage = function(){
        if($scope.message){
            var data = {
                loggedUser : senderUser,
                toUser: receiverUser,
                chatArray: [{
                    senderUser: senderUser,
                    receiverUser: receiverUser,
                    message: $scope.message
                }]
            };

            io.socket.post('/chat/savechatdata',data);

            $scope.message = "";

            console.log(JSON.stringify(data, null, 4));
        }
    }
}]);