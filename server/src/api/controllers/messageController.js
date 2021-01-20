/*
Import custom packages
*/
const dataService = require('../../services/dataService');
const { HTTPError, handleHTTPError } = require('../../utils');

/*
Get all messages
*/
const getMessages = (req, res, next) => {
  try {
    const messages = dataService.getMessages();
    res.status(200).json(messages);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific message
*/
const getMessageById = (req, res, next) => {
  try {
    //const {messageId} = req.params;

    const messages = dataService.getSentMessages();
    res.status(200).json(messages);
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get messages from a specific user
*/
const getMessagesFromUserById = (req, res, next) => {
  try {
    const {userId} = req.params;
    const {friendId} = req.query;
    const {type} = req.query;
    
    console.log(userId);
    console.log(friendId);
    console.log(type);


    let messages = "";

    switch (type) {
      case 'received':
        messages = dataService.getReceivedMessagesFromUser(userId);
        res.status(200).json(messages);
        break;
      case 'sent':
        messages = dataService.getSentMessagesFromUser(userId);
        res.status(200).json(messages);
        break;
      case 'conversation':
        messages = dataService.getConversationBetweenUsers(userId, friendId);
        res.status(200).json(messages);
      default:
        messages = dataService.getMessagesFromUserById(userId);
        res.status(200).json(messages);
        break;
    } 
  }catch (error) {
    handleHTTPError(error, next);
  }
  
};

/*
Create a new message
*/
const createMessage = (req, res, next) => {
  handleHTTPError(new HTTPError('The action method is not yet implemented!', 501), next);
};

/*
Update a specific message
*/
const updateMessage = (req, res, next) => {
  handleHTTPError(new HTTPError('The action method is not yet implemented!', 501), next);
};

/*
Delete a specific message
*/
const deleteMessage = (req, res, next) => {
  handleHTTPError(new HTTPError('The action method is not yet implemented!', 501), next);
};

// Export the action methods = callbacks
module.exports = {
  createMessage,
  deleteMessage,
  getMessages,
  getMessageById,
  getMessagesFromUserById,
  updateMessage,
};
