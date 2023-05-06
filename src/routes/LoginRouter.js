const express = require('express');
const loginController = require('../controllers/LoginController');

const loginRouter = express.Router();

loginRouter.post('/Login', loginController.createLogin);

module.exports = loginRouter;
