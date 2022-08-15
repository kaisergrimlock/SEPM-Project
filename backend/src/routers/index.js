// Router is responsible for routing URL endpoint to specific controller
// responsible for the requested action
// also the place where Browser will send request to first
const QrCodeRouter = require('./qrCode.router');
const AuthRouter = require('./auth.router');
const ImgRouter = require('./imageUpload.router');
const UserRouter = require('./user.router');

module.exports = { QrCodeRouter, AuthRouter, ImgRouter, UserRouter };
