// Controller is responsible for controlling handlers for different actions
// by connecting to Service layer and make Service does the job
// for example: respond back to the client, redirect, rendering
const QrCodeController = require('./qrCode.controller');
const AuthController = require('./auth.controller');
const ImageUploaderController = require('./imgUpload.controller');

module.exports = { QrCodeController, AuthController, ImageUploaderController };
