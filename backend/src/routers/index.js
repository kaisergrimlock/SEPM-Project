// Router is responsible for routing URL endpoint to specific controller
// responsible for the requested action
// also the place where Browser will send request to first
const QrCodeRouter = require('./qrCode/qrCode.router');
const AuthRouter = require('./auth/auth.router');

module.exports = { QrCodeRouter, AuthRouter };
