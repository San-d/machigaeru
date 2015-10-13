module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // Load Default layout 
  '/': 'ViewController.loadDefaultView',
  'get /chatwindow': 'ViewController.loadChatWindowView',
  /* Users */
  'post /login' : 'UsersController.login',
  'post /create/user' : 'UsersController.create_user',
  'post /user/profile' : 'UsersController.user_profile',
  'post /finduser' : 'UsersController.find_user',
  'post /create/verificationcode' : 'UsersController.create_verification_code',
  'post /verify/mobileno' : 'UsersController.verify_code',

  'get /loggeduserlist' : 'UsersController.logged_user_list',
  'post /chat/setconversation' : 'ChatController.setConversation'
};
