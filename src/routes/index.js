const { Router } = require('express');
const usersRouter = require('./users');

const rootRouter = Router();

rootRouter.use(usersRouter)

module.exports = rootRouter