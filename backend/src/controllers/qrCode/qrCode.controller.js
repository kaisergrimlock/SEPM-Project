const { QrCodeService, ResponseService } = require('../../services');
const Error = require('../../config/constant/Error');
const { catchAsync } = require('../../utils');

const redirect = (req, res) => {
  res.render('qrcode.ejs');
};

const scanQr = catchAsync(async (req, res) => {
  const inputText = req.body.text;
  const src = await QrCodeService.scanQr(inputText);

  if (!src) {
    throw ResponseService.newError(Error.QrInvalid.errorCode, Error.QrInvalid.message);
  }

  res.render('scan.ejs', {
    qr_code: src,
  });
});

module.exports = { scanQr, redirect };
