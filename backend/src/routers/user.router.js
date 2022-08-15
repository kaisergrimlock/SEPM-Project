const express = require('express');
const { UserController } = require('../controllers');

const router = express.Router();

router.route('/create').post(UserController.createUser);

router.route('/getUser/:userId').get(UserController.getUser);

module.exports = router;
