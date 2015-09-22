/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
// Load Reqired Node Modules
module.exports = {

    saveChatData: function (req, res) {
        console.log("I am here");
        var data = req.params.all();
        console.log(JSON.stringify(data, null, 4));
        console.log(req.method);

        if(req.isSocket && req.method === 'POST'){

            // This is the message from connected client
            // So add new conversation
            Chat.create(data).exec(function(error,data_from_client){
                console.log(JSON.stringify(data_from_client, null, 4));
                Chat.publishCreate({id: data_from_client.id, message : data_from_client.message , user:data_from_client.fromUser});
            });
        } else if(req.isSocket){
            // subscribe client to model changes 
            Chat.watch(req.socket);
            console.log( 'User subscribed to ' + req.socket.id );
            Chat.find({"loggedUser": "12345678", "toUser": "123456"},function (err, chatdetails) {
                console.log(JSON.stringify(chatdetails, null, 4));
                if (chatdetails.length) {
                    return res.json({ success: 1, status: 1, chatdata: chatdetails });
                } else {
                    return res.json({ success: 1, status: 1, chatdata: {msg: 'No previous chat is there!'} });
                }
            });
        }
    }
};