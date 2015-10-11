this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container message-main-box" ng-controller="IndexController">\r\n      <div class="chat-list-btn">\r\n        <span>Menu</span><img src="images/reponsive-nav.png" alt="main navigation">\r\n      </div>\r\n      \r\n      <div class="message-list-box">\r\n              \r\n        <div class="user-admin-box">\r\n          <div class="user-admin-profile">\r\n            <img src="images/myprofile-pic.jpg" alt="User Profile">                \r\n          </div>\r\n                  \r\n          <ul class="user-admin-icon-group">\r\n            <li><a href="#"><img src="images/message-icon.png" alt="message icon"></a></li>\r\n            <li><a href="#"><img src="images/message-nav-icon.png" alt="navigation icon"></a></li>\r\n          </ul>\r\n          <div class="clearfix"></div>               \r\n        </div>\r\n              \r\n        <div class="notification-box">\r\n                  \r\n          <div class="notification-icon-lt">\r\n            <img src="images/bell-icon.png" alt="notification icon">\r\n          </div>\r\n                  \r\n          <div class="notification-content-rt">\r\n            <h4>Get Notified of New massage</h4>\r\n            <p>Turn on desktop notifications</p>\r\n          </div>\r\n          <div class="clearfix"></div> \r\n        </div>\r\n              \r\n        <div class="search-box">\r\n          <input type="text" placeholder="Search or start new chat"/>\r\n          <button type="submit" class="search-btn"><img src="images/search-icon.png" alt="search icon"></button>\r\n        </div>\r\n               \r\n        <div class="user-message-list-group">\r\n               \r\n          <div class="user-message-row" ng-repeat="users in userlist" ng-click="getviewwithdetails(users.mobNo)">\r\n            \r\n            <div class="user-profile-pic">\r\n              <img src="images/profile-pic1.jpg" alt="user prifile picture">\r\n            </div>\r\n                      \r\n            <div class="user-profile-content" >\r\n              <h3>{{ users.fname }} {{ users.lname }}</h3>\r\n              <p>kikme.adam</p>\r\n            </div>\r\n                      \r\n            <div class="user-profile-time">\r\n              <p class="msg-time">11:38</p>\r\n            </div>\r\n            <div class="clearfix"></div>                    \r\n          </div>\r\n                  \r\n          <div class="clearfix"></div>\r\n        </div>\r\n               \r\n        <div class="user-btn-group">\r\n          <ul>\r\n            <li><a href="#">Recent</a></li>\r\n            <li><a href="#">Cantacts</a></li>\r\n          </ul>\r\n          <div class="clearfix"></div>      \r\n        </div>            \r\n         \r\n      </div>\r\n      <div class="message-group-box">     \r\n  <div class="showcase-banner">\r\n    <img src="images/message-img.jpg" alt="sowcase mobile">             \r\n  </div>   \r\n\r\n  <div class="showcase-banner-content">\r\n    <h1>Keep your phone connected</h1>\r\n    <p>Machigaeru web connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</p>\r\n  </div>\r\n</div>\r\n\r\n  </div>\r\n';

}
return __p
};

this["JST"]["assets/templates/message_detail.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n      \r\n        <div class="message-chat-box">\r\n        \r\n        \t<div class="chat-header">\r\n            \t\t\r\n                    <div class="chat-profile-group">\r\n                    \t<div class="chat-profile">\r\n                        \t<img src="images/profile-pic3.jpg" alt="chat profile picture">\r\n                        </div>\r\n                        <div class="chat-user">\r\n                        \t<h3>Alexis Miller</h3>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class="chat-navigation">\r\n                    \t<ul>\r\n                        \t<li><a href="#"><img src="images/attach-icon.png" alt="attach icon"></a></li>\r\n                            <li><a href="#"><img src="images/message-nav-icon.png" alt="nav icon"></a></li>\r\n                        </ul>                     \r\n                    </div>\r\n                    <div class="clearfix"></div>                \r\n            </div>\r\n            \r\n            <!-- <div class="chat-body" ng-repeat="chats in chatList"> -->\r\n            \t<!-- <div class="chat-box1">\r\n                \t<div class="arrow-up"></div>\r\n                    {{ chats.message }}\r\n                </div> -->\r\n            \t\t\r\n                <!-- <div class="chat-box2" ng-if="chats.loggedUser == senderUser">\r\n                    <div class="arrow-down"></div>\r\n                </div>  -->\r\n                \r\n            <!--        <div class="clearfix"></div> \r\n            </div> -->\r\n            \r\n            \r\n            <div class="chat-footer">                   \r\n                <form action="" method="post" ng-submit="sendMessage()">\r\n                \t<div class="footer-chat-textarea">\r\n                    \t<input type="text" placeholder="Type..." ng-model="message" />\r\n\t                    <div class="smiley-box"><img src="images/smiley-icon.png" alt="smiley"></div>\r\n                        <input type="submit" id="submit" value="Submit" />\r\n                    </div>\r\n                </form>\r\n            \t\r\n                <ul class="footer-navigation">\r\n                \t<li><a href="#"><img src="images/camera-icon.png" alt="camera icon"></a></li>\r\n                    <li><a href="#"><img src="images/voice-icon.png" alt="voice icon"></a></li>\r\n                    <li><a href="#"><img src="images/video-icon.png" alt="video icon"></a></li>\r\n                </ul>\r\n            \r\n            </div>\r\n       \r\n       </div>\r\n';

}
return __p
};

this["JST"]["assets/templates/message_list.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n  \r\n<div class="message-group-box">     \r\n  <div class="showcase-banner">\r\n    <img src="images/message-img.jpg" alt="sowcase mobile">             \r\n  </div>   \r\n\r\n  <div class="showcase-banner-content">\r\n    <h1>Keep your phone connected</h1>\r\n    <p>Machigaeru web connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</p>\r\n  </div>\r\n</div>\r\n';

}
return __p
};