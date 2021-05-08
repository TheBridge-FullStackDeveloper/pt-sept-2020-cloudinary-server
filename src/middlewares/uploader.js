// Multer es una librería que interpreta el contenido multipart/form-data que recibimos
// y sube los binarios que encuentre a nuestro server. El resto de información la inyecta
// en req.body para usarla como hacemos siempre.
const multer = require('multer');
const path = require('path');

const uploader = multer({
  storage: multer.diskStorage({
    destination: (req, file, done) => {
      done(null, path.join(__dirname, '../../uploads'));
    },
  }),
  fileFilter: (req, file, done) => {
    if (
      [
        'image/gif',
        'image/png',
        'image/jpeg',
        'image/bmp',
        'image/webp',
      ].includes(file.mimetype)
    ) {
      done(null, true);
    } else {
      const error = new Error('Invalid file type');
      done(error, false);
    }
  },
});

module.exports = uploader;
