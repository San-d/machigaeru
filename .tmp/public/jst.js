this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n    <div class="container main-box">\r\n        \t \r\n        <div class="header-box">\r\n            <div class="logo-box">\r\n                <img src="images/bar-code.jpg" alt="machigaeru">\r\n            </div>\r\n            \r\n            <div class="logo-content-box">\r\n                <h1 class="logo-title">Machigaeru Web</h1>\r\n                <h3 class="logo-subtitle">Use Machigaeru on your phone to scan the code</h3>\r\n                <p class="logo-text1"> <input type="checkbox" checked/>Keep me signed in</p>\r\n                <p class="logo-text2">To reduce data usage, connect your phone to Wi-Fi</p>\r\n            </div> \r\n            <div class="clearfix"></div>\r\n        </div>\r\n        \r\n        <div class="home-banner">\r\n        \t<img src="images/home-banner.png" alt="home banner">\r\n        </div>             \r\n                \r\n    </div>\r\n';

}
return __p
};

this["JST"]["assets/templates/message_detail.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n      \r\n        <div class="message-chat-box">\r\n        \r\n        \t<div class="chat-header">\r\n            \t\t\r\n                    <div class="chat-profile-group">\r\n                    \t<div class="chat-profile">\r\n                        \t<img src="images/profile-pic3.jpg" alt="chat profile picture">\r\n                        </div>\r\n                        <div class="chat-user">\r\n                        \t<h3>Alexis Miller</h3>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class="chat-navigation">\r\n                    \t<ul>\r\n                        \t<li><a href="#"><img src="images/attach-icon.png" alt="attach icon"></a></li>\r\n                            <li><a href="#"><img src="images/message-nav-icon.png" alt="nav icon"></a></li>\r\n                        </ul>                     \r\n                    </div>\r\n                    <div class="clearfix"></div>                \r\n            </div>\r\n            \r\n            <div class="chat-body" ng-repeat="chats in chatList">\r\n            \t<div class="chat-box1">\r\n                \t<div class="arrow-up"></div>\r\n                    {{ chats }}\r\n                </div>\r\n            \t\t\r\n                <!-- <div class="chat-box2" ng-if="chats.loggedUser == senderUser">\r\n                    <div class="arrow-down"></div>\r\n                </div>  -->\r\n                \r\n                   <div class="clearfix"></div> \r\n            </div>\r\n            \r\n            \r\n            <div class="chat-footer">                   \r\n                <form action="" method="post" ng-submit="sendMessage()">\r\n                \t<div class="footer-chat-textarea">\r\n                    \t<input type="text" placeholder="Type..." ng-model="message" />\r\n\t                    <div class="smiley-box"><img src="images/smiley-icon.png" alt="smiley"></div>\r\n                        <input type="submit" id="submit" value="Submit" />\r\n                    </div>\r\n                </form>\r\n            \t\r\n                <ul class="footer-navigation">\r\n                \t<li><a href="#"><img src="images/camera-icon.png" alt="camera icon"></a></li>\r\n                    <li><a href="#"><img src="images/voice-icon.png" alt="voice icon"></a></li>\r\n                    <li><a href="#"><img src="images/video-icon.png" alt="video icon"></a></li>\r\n                </ul>\r\n            \r\n            </div>\r\n       \r\n       </div>\r\n';

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