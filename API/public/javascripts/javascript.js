var flag=0, ID, TIPO;

function filtroFilmes(){
	$('#quadros').empty();
	$.get('https://tv-v2.api-fetch.website/movies/125?sort=last%20added&order=1', function(data) {
		console.log(data);
		for(var x=0; x<50; x++){
			$('#quadros').append('<div class="col-md-4 imagem"><h2>'+data[x].title+'</h2><p><div class="grid"><figure class="effect-zoe"><a href="#modal1"><img data-tipo="filmes" data-id="'+data[x]._id+'" class="clica" src='+data[x].images.banner+'><figcaption><p> Rating: '+data[x].rating.percentage+' </p></figcaption></a></figure><div><p>Genre: '+data[x].genres+'</p><h1> Duration: '+data[x].runtime+' minutes</h1><p>'+data[x].year+'</p></div></div></p></div>');
		}
	});
}

function filtroSeries(){
	$('#quadros').empty();
	$.get('https://tv-v2.api-fetch.website/shows/24?sort=name&order=1', function(data) {
		console.log(data);
		for(var x=0; x<50; x++){
			$('#quadros').append('<div class="col-md-4 imagem"><h2>'+data[x].title+'</h2><p><div class="grid"><figure class="effect-zoe"><a href="#modal1"><img data-tipo="series" data-id="'+data[x]._id+'" class="clica" src='+data[x].images.poster+'><figcaption><p> Rating: '+data[x].rating.percentage+' </p></figcaption></a></figure><div><h1>A partir de R$ </h1><p>'+data[x].year+'</p></div></div></p></div>');
		}
	});
}

function filtroAnimes(){
	$('#quadros').empty();
	$.get('https://tv-v2.api-fetch.website/animes/12?sort=name&order=1', function(data) {
		console.log(data);
		for(var x=0; x<50; x++){
			$('#quadros').append('<div class="col-md-4 imagem"><h2>'+data[x].title+'</h2><p><div class="grid"><figure class="effect-zoe"><a href="#modal1"><img data-tipo="animes" data-id="'+data[x]._id+'" class="clica" src='+data[x].images.banner+'><figcaption><p> Rating: '+data[x].rating.percentage+' </p></figcaption></a></figure><div><h1>A partir de R$ </h1><p>'+data[x].year+'</p></div></div></p></div>');
		}
	});
}

function printProduto(){
	console.log('Função produto');
	$('#produto').empty();
	if(flag==1){
		console.log('Flag 1');
		$.get('https://tv-v2.api-fetch.website/movie/'+ID, function(data) {
			console.log(data);
				$('#produto').append('<div class="row"><div class="col-md-12 tituloModal"><h2>'+data.title+'</h2></div></div><div class="row"><div class="col-md-5 tamanho"><img src='+data.images.banner+'></div><div class="col-md-7"><p>Released: '+data.year+'</p><p>Genres: '+data.genres+'</p><p>Rating: '+data.rating.percentage+'</p><p>Duration: '+data.runtime+' minutes</p><p>Synopsis: '+data.synopsis+'</p></div></div>');
		});
	}

	else if(flag==2){
		console.log('Flag 2');
		$.get('https://tv-v2.api-fetch.website/show/'+ID, function(data) {
			console.log(data);
				$('#produto').append('<div class="col-md-4 imagem"><h2>'+data.title+'</h2><p><div class="grid"><figure class="effect-zoe"><a href="http://localhost:3100/quadro/detalhado/'+data.id+'"><img src='+data.images.banner+'><figcaption><p class="icon-links"><a href="#"><i class="material-icons small"> shopping_cart</i></a><a href="#"><i class="material-icons small"> star</i></a></p></figcaption></a></figure><div><h1>A partir de R$ </h1><p>'+data.year+'</p></div></div></p></div>');
		});
	}

	else if(flag==3){
		console.log('Flag 3');
		$.get('https://tv-v2.api-fetch.website/anime/'+ID, function(data) {
			console.log(data);
				$('#produto').append('<div class="col-md-4 imagem"><h2>'+data.title+'</h2><p><div class="grid"><figure class="effect-zoe"><a href="http://localhost:3100/quadro/detalhado/'+data.id+'"><img src='+data.images.banner+'><figcaption><p class="icon-links"><a href="#"><i class="material-icons small"> shopping_cart</i></a><a href="#"><i class="material-icons small"> star</i></a></p></figcaption></a></figure><div><h1>A partir de R$ </h1><p>'+data.year+'</p></div></div></p></div>');
		});
	}
}

function actions(){
	$('#filmes').click(function(){
		filtroFilmes();
	});

	$('#series').click(function(){
		filtroSeries();
	});

	$('#animes').click(function(){
		filtroAnimes();
	});
	
	$('#quadros').on('click', ".clica", function(){
		ID = $(this).data("id");
		TIPO = $(this).data("tipo");
		if(TIPO=="filmes")
			flag=1;
		if(TIPO=="series")
			flag=2;
		if(TIPO=="animes")
			flag=3;
		printProduto();
	});
}
$(document).ready(function () {
	actions();
	printProduto();
	$('.modal').modal();

	$('#txt-search').keyup(function(){
	var searchField = $(this).val();
	if(searchField === '')  {
		$('#resultados-busca').hide();
		$('#resultados-busca').html('');
		return;
	}

	var regex = new RegExp(searchField, "i");
	var resultados = '<div class="row">';
	var count = 1;
	$.get('https://tv-v2.api-fetch.website/movies/125?sort=last%20added&order=1','https://tv-v2.api-fetch.website/animes/12?sort=name&order=1', function(data) {
	$('#txt-search').show();	
	$('#resultados-busca').show();
	for (x in data) {
		var nome = data[x].title;
			if (nome.search(regex) != -1){
				resultados += '<div class="col-md-12 well">';
				resultados += '<div class="col-md-3"><img class="img-responsive" src="'+data[x].images.banner+'"/></div> <a href="#modal1">';
				resultados += '<div class="col-md-9">';
				resultados += '<h5>' + nome + '</h5>';
				resultados += '<p>' + data[x].synopsis + '</p>';
				resultados += '<h4> Duration: '+data[x].runtime+' minutes </h4>'
				resultados += '<h4> Genre: '+data[x].genres+ '</h4>'
				resultados += '<h3>' + data[x].year + '</h3>'
				resultados += '</div>';
				resultados += '</div>';
			}
	}
		resultados += '</div>';
		$('#resultados-busca').html(resultados);
	});
});
});
