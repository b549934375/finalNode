var express = require('express');
var router = express.Router();

var data = require('../../modules/m-theme-data');

router.get('/data',function(req,res){
  res.json({
    data:data
  });
});

module.exports = router;
