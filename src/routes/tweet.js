const router = require('express').Router();
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

const uploader = require('../middlewares/uploader');

router.post('/', [uploader.single('picture')], async (req, res, next) => {
  let file;

  try {
    file = await cloudinary.uploader.upload(req.file.path);
  } catch (err) {
    console.log('Error uploading to Cloudinary', err.message);
  }

  fs.unlinkSync(req.file.path);

  if (!file) {
    // Respondo con error al user
  }

  // A partir de aquí guardo cosas en mi DB usando la URL del archivo en file.secure_url
  // await Tweet.create({
  //   text: req.body.text,
  //   picture: file.secure_url,
  // });

  res.status(201).json({
    data: {
      body: req.body,
      file: file.secure_url, // Esto es lo que se guarda en la DB
    },
  });
});

module.exports = router;
