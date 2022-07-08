const qrcode = require('qrcode');
// const Error = require('../../config/constant/Error');

const scanQr = async (inputText) => {
  const src = await qrcode.toDataURL(inputText);

  return src;
};

module.exports = { scanQr };
