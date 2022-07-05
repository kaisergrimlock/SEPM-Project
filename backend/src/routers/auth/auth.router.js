const express = require('express');
const { AuthController } = require('../../controllers');

const router = express.Router();

router.route('/register').post(AuthController.createUser);

router.route('/login').get(AuthController.redirect);
router.route('/login').post(AuthController.validateUser);

module.exports = router;
