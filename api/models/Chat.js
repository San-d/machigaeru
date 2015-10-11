/**
 * Chat.js
 *
 * @description :: This model will hold all the Chat details
 */
module.exports = {
    attributes: {
        loggedUser: {
            type: 'string'
        },
        toUser: {
            type: 'string'
        },
        chatArray: {
            type: 'array'
        }
    }
};