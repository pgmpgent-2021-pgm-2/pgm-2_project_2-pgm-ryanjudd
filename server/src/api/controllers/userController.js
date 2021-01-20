/*
Import custom packages
*/
const dataService = require('../../services/dataService');
const { HTTPError, handleHTTPError } = require('../../utils');

/*
Get all users
*/
const getUsers = (req, res, next) => {
  try {
    const users = dataService.getUsers();
    res.status(200).json(users)
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Get a specific user
*/
const getUserById = (req, res, next) => {
  const {userId} = req.params;
  
  try {
    const users = dataService.getUserById(userId);
    res.status(200).json(users)
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/*
Create a new user
*/
const createUser = (req, res, next) => {
  handleHTTPError(new HTTPError('The action method is not yet implemented!', 501), next);
};

/*
Update a specific user
*/
const updateUser = (req, res, next) => {
  handleHTTPError(new HTTPError('The action method is not yet implemented!', 501), next);
};

/*
Delete a specific user
*/
const deleteUser = (req, res, next) => {
  handleHTTPError(new HTTPError('The action method is not yet implemented!', 501), next);
};

// Export the action methods = callbacks
module.exports = {
  createUser,
  deleteUser,
  getUsers,
  getUserById,
  updateUser,
};
