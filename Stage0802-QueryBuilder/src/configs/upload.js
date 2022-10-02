const path = require('path')
const multer = require('multer')
const crypto = require('crypto')

const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp')
const UPLOADS_FOLDER = PATH.RESOLVE(__dirname, 'uploads')

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER
  })
}
