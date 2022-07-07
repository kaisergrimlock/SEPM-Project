const express = require('express');
const { AuthController } = require('../controllers');

const router = express.Router();

router.route('/register').post(AuthController.register);

router.route('/login').post(AuthController.login);

router.route('/verifyRefreshToken').get(AuthController.verifyRefreshToken);

router.route('/logout').get(AuthController.logout);

module.exports = router;
