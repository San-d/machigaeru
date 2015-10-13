'use strict';

angular.module('machigaeru').controller('IndexController', [ '$scope', '$http', '$cookies', '$window','$location', function ($scope, $http, $cookies, $window, $location) {
    if($cookies.loggedUser){
        $scope.isloggedin = true;
    } else {
        $scope.isloggedin = false;
    }

    $scope.logout = function() {
        $http.get('/logout').success(function() {
            $cookies.loggedUser = undefined;
            $window.location.href = '/#!/';
        });
    };

    $scope.getviewwithdetails = function(userid){
        $location.url('/chatwindow/'+$cookies.loggedUser+'/'+userid);
    }

    $scope.logintosite = function(phno){
        console.log(phno);
        var data = {
            mobNo: phno
        };
        console.log(data);
        $http.post('/login', data).success(function(resData){
            console.log(resData);
            if(resData.success == true){
                $cookies.loggedUser = resData.user;
                $scope.isloggedin = true;
                console.log($cookies.loggedUser);
                $location.url("/messagecenter");
            } else {
                $scope.isloggedin = false;
                $location.url("/#!/");
            }
        });
    }
}]);


angular.module('machigaeru').controller('ChatController', ['$scope', '$http','$routeParams', '$log', '$cookies', '$window','$location', function ($scope, $http,$routeParams, $log, $cookies, $window, $location) {
    var onlineuserlist = [];
    $scope.userlist = [];

    $http.get('/loggeduserlist').success(function(datalist){
        if(datalist.status){
            for(var i=0; i <= datalist.userList.length-1; i++){
                console.log("datalist.userList[i].id "+datalist.userList[i].id);
                console.log("$cookies.loggedUser.id "+$cookies.loggedUser);
                if(datalist.userList[i].mobNo != $cookies.loggedUser[0].mobNo){
                    $scope.userlist.push(datalist.userList[i]);
                }
            }
            $scope.userlist = datalist.userList;
        }
    });
    console.log($routeParams.receiverid);
    var socket = io.connect();
    var senderUser = $cookies.loggedUser,
        receiverUser = $routeParams.receiverid;
    if(receiverUser){
        var data = {
            senderUser : senderUser,
            receiverUser : receiverUser
        };

        $http.post('/chat/setconversation', data , function (resData) {
            console.log("resData "+resData);
        });
    }

    console.log($cookies);
    $scope.chatList = [];

    $scope.getAllchat = function() {
        io.socket.get('/chat/savechatdata', function (resData) {
            console.log(resData);
            if(resData.chatdata[0]) {
                $scope.chatList = resData.chatdata[0].chatArray;
                console.log("cas "+JSON.stringify($scope.chatList, null, 4));
            }
        });

        $http.get('/chat/savechatdata', function (resData) {
            console.log(resData);
            if(resData.chatdata[0]) {
                $scope.chatList = resData.chatdata[0].chatArray;
                console.log("cas "+JSON.stringify($scope.chatList, null, 4));
            }
        });
    };

    $scope.getAllchat();

    io.socket.on('chat', function (msg) {
        console.log(msg);
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