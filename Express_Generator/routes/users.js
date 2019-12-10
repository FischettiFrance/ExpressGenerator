var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/ciaonee', function(req, res, next) {
  res.send('Prontoneee');
});
module.exports = router;
