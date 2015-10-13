/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
// Load Reqired Node Modules
var loggedinUser = "",
    receiverUser = "";

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
            Chat.drop();
            Chat.find({"loggedUser": data.loggedUser, "toUser": data.toUser},function (err, chatdetails) {
                console.log("chatdetails "+JSON.stringify(chatdetails, null, 4));
                if(chatdetails.length > 0){
                    chatdetails[0].chatArray.push(data.chatArray[0]);
                    Chat.update({ id: chatdetails[0].id }, {chatArray : chatdetails[0].chatArray}, function(error,data_from_client){
                        console.log(JSON.stringify(data_from_client, null, 4));
                        Chat.publishCreate({id: data_from_client[0].id, message : data.chatArray[0].message , user: data.loggedUser});
                        console.log("data uploaded successfully!!");
                    });
                } else {
                    Chat.find({"loggedUser": data.toUser, "toUser": data.loggedUser},function (err, chatData) {
                        console.log("chatData "+JSON.stringify(chatData, null, 4));
                        if(chatData.length >0){
                            chatData[0].chatArray.push(data.chatArray[0]);
                            Chat.update({ id: chatData[0].id }, {chatArray : chatData[0].chatArray}, function(error,data_from_client){
                                console.log(JSON.stringify(data_from_client, null, 4));
                                Chat.publishCreate({id: data_from_client[0].id, message : data.chatArray[0].message , user: data.toUser});
                                console.log("data uploaded successfully!!");
                            });
                        } else {
                            Chat.create(data).exec(function(error,data_from_client){
                                console.log(JSON.stringify(data_from_client, null, 4));
                                Chat.publishCreate({id: data_from_client.id, message : data_from_client.chatArray[0].message , user:data_from_client.loggedUser});
                                console.log("data created successfully!!");
                            });
                        }
                    });
                }
            });
        } else if(req.isSocket  && req.method === 'GET'){
            Chat.drop();
            // subscribe client to model changes 
            Chat.watch(req.socket);
            console.log( 'User subscribed to ' + req.socket.id );
            console.log("Again loggedUser "+ loggedinUser, "toUser "+ receiverUser);
            if(loggedinUser && receiverUser){
                Chat.find({"loggedUser": loggedinUser, "toUser": receiverUser},function (err, chatdetails) {
                    console.log(JSON.stringify(chatdetails, null, 4));
                    if (chatdetails.length > 0) {
                        return res.json({ success: 1, status: 1, chatdata: chatdetails });
                    } else {
                        Chat.find({"loggedUser": receiverUser, "toUser": loggedinUser},function (err, chatData) {
                            console.log("chatData "+JSON.stringify(chatData, null, 4));
                            if(chatData.length >0){
                               return res.json({ success: 1, status: 1, chatdata: chatData }); 
                            } else {
                                return res.json({ success: 1, status: 1, chatdata: {msg: 'No previous chat is there!'} });
                            }
                        });
                    }
                });
            }
        }
    },

    setConversation: function (req, res) {
        console.log("I am here in setConversation ");
        var data = req.params.all();
        console.log(data);
        loggedinUser = data.senderUser;
        receiverUser = data.receiverUser;
    }
};