// Services layer responsible for business logic of the application
// For example query db, handle complex business logic like validation,...
const ResponseService = require('./response/response.service');
const AuthService = require('./auth/auth.service');
const QrCodeService = require('./qrCode/qrCode.service');

module.exports = { ResponseService, AuthService, QrCodeService };
