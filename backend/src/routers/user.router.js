const express = require('express');
const { UserController } = require('../controllers');
const { verifyJwt } = require('../middlewares');

const router = express.Router();

router.route('/getUser/:userId').post(verifyJwt, UserController.getUserById);

module.exports = router;
