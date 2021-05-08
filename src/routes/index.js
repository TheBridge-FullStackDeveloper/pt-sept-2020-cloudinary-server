const router = require('express').Router();

router.use('/tweet', require('./tweet'));

module.exports = router;
