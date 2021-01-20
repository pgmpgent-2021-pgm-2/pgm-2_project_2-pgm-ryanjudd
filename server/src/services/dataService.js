/*
Import packages
*/
const { SlowBuffer } = require('buffer');
const { LOADIPHLPAPI } = require('dns');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

/*
Import custom packages
*/
const { HTTPError, convertArrayToPagedObject } = require('../utils');

/*
File paths
*/
const filePathMessages = path.join(__dirname, '..', 'data', 'messages.json');
const filePathMatches = path.join(__dirname, '..', 'data', 'matches.json');
const filePathUsers = path.join(__dirname, '..', 'data', 'users.json');

/*
Write your methods from here
*/

const dataFromUsers = () => {
  const data = fs.readFileSync(filePathUsers, {encoding: 'utf-8', flag: 'r'});
  const users = JSON.parse(data);

  return users;
};

const getUsers = () => {
  try {
    const users = dataFromUsers();
    return users;
  } catch (error) {
    throw new HTTPError('Can\'t get users!', 500);
  }
}

const getUserById = (id) => {
  try {
    const users = dataFromUsers();
    const selectedUser = users.filter(c => c.id === id);
    return selectedUser;
  } catch (error) {
    
  }
}

const dataFromMessages = () => {
  const data = fs.readFileSync(filePathMessages, {encoding: 'utf-8', flag: 'r'});
  const messages = JSON.parse(data);
  return messages;
};

const getMessagesFromUserById = (id) => {
  try {
    const messages = dataFromMessages();
    const selectedMessages = messages.filter(c => c.senderId === id);
    return selectedMessages;
  } catch (error) {
    throw new HTTPError('Can\'t get messages!', 500);
  }
}

const getMessages = () => {
  try {
    const messages = dataFromMessages();
    return messages;
  } catch (error) {
    throw new HTTPError('Can\'t get messages!', 500);
  }
}

const getReceivedMessages = (receiverId) => {
  try {
    const messages = dataFromMessages();
    const selectedMessages = messages.filter(c => c.receiverId === receiverId);
    selectedMessages.sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else if (a.createdAt > b.createdAt) {
        return -1;
      }
    })

    return selectedMessages;
  } catch (error) {
    throw new HTTPError('Can\'t get messages!', 500);
  }
}

const getSentMessages = (senderId) => {
  try {
    const messages = dataFromMessages();
    const selectedMessages = messages.filter(c => c.senderId === senderId);
    selectedMessages.sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      } else if (a.createdAt > b.createdAt) {
        return -1;
      }
    })

    return selectedMessages;
  } catch (error) {
    throw new HTTPError('Can\'t get messages!', 500);
  }
}

const dataFromMatches = () => {
  const data = fs.readFileSync(filePathMatches, {encoding: 'utf-8', flag: 'r'});
  const matches = JSON.parse(data);

  return matches;
};

const getMatches = () => {
  try {
    const matches = dataFromMatches();
    return matches;
  } catch (error) {
    throw new HTTPError('Can\'t get matches!', 500);
  }
}


// Export all the methods of the data service
module.exports = {
  getUsers,
  getUserById,
  getMessages,
  getMessagesFromUserById,
  getReceivedMessages,
  getSentMessages,
  getMatches,

};
