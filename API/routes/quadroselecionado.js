var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/:cod', function (req, res){

	res.render('produtoselecionado');
	res.end();

});

module.exports = router;