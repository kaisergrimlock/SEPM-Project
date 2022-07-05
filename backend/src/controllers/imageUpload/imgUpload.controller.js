const Error = require('../../config/constant/Error');
const { catchAsync } = require('../../utils');

const uploadImage = catchAsync(async (req, res) => {
    const imagefile = req.file
    console.log("Image:"+ imagefile)
    res.redirect('/')
});

module.exports = { uploadImage };
