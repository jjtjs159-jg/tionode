var express = require('express');
var router = express.Router();

const maria = require('../maria');
maria.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
  const result = maria.query('select * from test', function (err, rows, fields) {
    console.log(err);
    if (!err) {
      res.send(rows);
    } else {
      console.log('err > ' + err);
      res.send(err)
    }
  });
  console.log(result);
  // res.render('index', { title: 'Express' });
});

module.exports = router;
