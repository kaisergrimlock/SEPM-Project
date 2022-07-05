const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, 'images')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
})

module.exports = fileStorage;