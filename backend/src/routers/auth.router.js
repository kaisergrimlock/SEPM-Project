const express = require('express');
const { AuthController } = require('../controllers');
const { verifyJwt } = require('../middlewares');

const router = express.Router();

router.route('/register').post(AuthController.register);

router.route('/login').post(AuthController.login);

router.route('/verifyRefreshToken').post(AuthController.verifyRefreshToken);

// router.route('/logout').delete(verifyJwt, AuthController.logout);

module.exports = router;
