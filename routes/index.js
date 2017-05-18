var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Pagina de creditos
router.get('/author', function(req, res, next) {
    res.render('author');
});

// Página de ayuda (Entrega 5.1)
router.get('/help', function(req, res, next) {
  res.render('ayuda');
});

module.exports = router;
