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
        console.log(req.isSocket);

        if(req.isSocket && req.method === 'POST') {

            // This is the message from connected client
            // So add new conversation
            // Chat.drop();
            Chat.find({"loggedUser": data.loggedUser, "toUser": data.toUser},function (err, chatdetails) {
                /*if(chatdetails.length > 0){
                    chatdetails[0].chatArray.push(data.chatArray[0]);
                    Chat.update({ id: 23 }, {chatArray : chatdetails[0].chatArray}, function(error,data_from_client){
                        console.log("data uploaded successfully!!");
                    });
                } else {
                    Chat.create(data).exec(function(error,data_from_client){
                        console.log(JSON.stringify(data_from_client, null, 4));
                        Chat.publishCreate({id: data_from_client.id, message : data_from_client.message , user:data_from_client.fromUser});
                    });
                }*/
                Chat.create(data).exec(function(error, data_from_client){
                    console.log(JSON.stringify(data_from_client, null, 4));
                    // Chat.message(req.param('room'), {room:{id:req.param('room')}, from: user, msg: req.param('msg')}, req.socket);
                    // Chat.message(data_from_client.toUser, {sender: data_from_client.loggedUser, message : data_from_client.chatArray[0].message});
                    Chat.publishCreate({id: data_from_client.id, message : data_from_client.chatArray[0].message , user:data_from_client.loggedUser});
                });
            });
        } else if(req.isSocket){
            // subscribe client to model changes 
            Chat.watch(req.socket);
            console.log( 'User subscribed to ' + req.socket.id );
            Chat.find({"loggedUser": "123456", "toUser": "1234567"},function (err, chatdetails) {
                console.log(JSON.stringify(chatdetails, null, 4));
                if (chatdetails.length) {
                    return res.json({ success: 1, status: 1, chatdata: chatdetails });
                } else {
                    return res.json({ success: 1, status: 1, chatdata: {msg: 'No previous chat is there!'} });
                }
            });
        }
    },

    loadChatData: function (req, res) {
        console.log("I am here in load chat data");
        var data = req.params.all();
        Chat.find({"loggedUser": data.loggedUser, "toUser": data.toUser},function (err, chatdetails) {
                console.log(JSON.stringify(chatdetails, null, 4));
                if (chatdetails.length) {
                    return res.json({ success: 1, status: 1, chatdata: chatdetails });
                } else {
                    return res.json({ success: 1, status: 1, chatdata: {msg: 'No previous chat is there!'} });
                }
            });
        
    }
};