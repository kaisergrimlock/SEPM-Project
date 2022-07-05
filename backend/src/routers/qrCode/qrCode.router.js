const express = require('express');
const { QrCodeController } = require('../../controllers');

const router = express.Router();

router.route('/').get(QrCodeController.redirect);

router.route('/scan').post(QrCodeController.scanQr);

module.exports = router;
