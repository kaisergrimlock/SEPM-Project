const express = require('express');
const { ImageUploaderController } = require('../../controllers');

const router = express.Router();

router.route('/upload').post(ImageUploaderController.uploadImage);

module.exports = router;
