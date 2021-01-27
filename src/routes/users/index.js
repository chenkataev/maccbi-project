const { Router } = require('express');
const { getUsers, addUser, deleteUser } = require('./controllers');

const usersRouter = Router();

usersRouter.get('/users', getUsers);
usersRouter.post('/users', addUser);
usersRouter.delete('/users/:email', deleteUser);

module.exports = usersRouter