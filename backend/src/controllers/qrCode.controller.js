const { QrCodeService, ResponseService } = require('../services');
const Error = require('../config/constant/Error');
const { catchAsync } = require('../utils');

const redirect = (req, res) => {
  res.render('qrcode.ejs');
};

const scanQr = catchAsync(async (req, res) => {
  const inputText = '123';
  const src = await QrCodeService.scanQr(inputText);

  if (!src) {
    throw ResponseService.newError(Error.QrInvalid.errCode, Error.QrInvalid.errMessage);
  }

  // res.status(200).json(ResponseService.newSucess());

  res.render('scan.ejs', {
    qr_code: src,
  });
});

module.exports = { scanQr, redirect };
