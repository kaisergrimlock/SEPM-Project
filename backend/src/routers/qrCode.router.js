const express = require('express');
const { QrCodeController } = require('../controllers');
const { verifyJwt } = require('../middlewares');

const router = express.Router();

router.route('/').post(verifyJwt, QrCodeController.redirect);

router.route('/scan').post(verifyJwt, QrCodeController.scanQr);

module.exports = router;
