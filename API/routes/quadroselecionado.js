var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/:cod', function (req, res){
	fs.readFile(__dirname + 'https://tv-v2.api-fetch.website/movies/125?sort=last%20added&order=1', 'utf8', function(err, data){
	data = JSON.parse(data);
	var posicao = 0;
	for(x in data){
		if(data[x].id==req.params.cod){
			posicao = x;
		}
	}
	res.render('produtoselecionado', { dados:data, cod:posicao });
	
			res.end();
	});

});

module.exports = router;