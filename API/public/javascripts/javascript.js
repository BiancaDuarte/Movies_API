function filtroFilmes(){
	$('#quadros').empty();
	$.get('https://tv-v2.api-fetch.website/movies/125?sort=last%20added&order=1', function(data) {
		console.log(data);
		for(var x=0; x<50; x++){
			$('#quadros').append('<div class="col-md-4 imagem"><h2>'+data[x].title+'</h2><p><div class="grid"><figure class="effect-zoe"><a href="http://localhost:60000/quadro/detalhado/'+data[x].id+'"><img src='+data[x].images.banner+'><figcaption><p class="icon-links"><a href="#"><i class="material-icons small"> shopping_cart</i></a><a href="#"><i class="material-icons small"> star</i></a></p></figcaption></a></figure><div><p>Genre: '+data[x].genres+'</p><h1> Duration: '+data[x].runtime+' minutes</h1><p>'+data[x].year+'</p></div></div></p></div>');
		}
	});
}

function filtroSeries(){
	$('#quadros').empty();
	$.get('https://tv-v2.api-fetch.website/shows/24?sort=name&order=1', function(data) {
		console.log(data);
		for(var x=0; x<50; x++){
			$('#quadros').append('<div class="col-md-4 imagem"><h2>'+data[x].title+'</h2><p><div class="grid"><figure class="effect-zoe"><a href="http://localhost:60000/quadro/detalhado/'+data[x].id+'"><img src='+data[x].images.poster+'><figcaption><p class="icon-links"><a href="#"><i class="material-icons small"> shopping_cart</i></a><a href="#"><i class="material-icons small"> star</i></a></p></figcaption></a></figure><div><h1>A partir de R$ </h1><p>'+data[x].year+'</p></div></div></p></div>');
		}
	});
}

function filtroAnimes(){
	$('#quadros').empty();
	$.get('https://tv-v2.api-fetch.website/animes/12?sort=name&order=1', function(data) {
		console.log(data);
		for(var x=0; x<50; x++){
			$('#quadros').append('<div class="col-md-4 imagem"><h2>'+data[x].title+'</h2><p><div class="grid"><figure class="effect-zoe"><a href="http://localhost:60000/quadro/detalhado/'+data[x].id+'"><img src='+data[x].images.banner+'><figcaption><p class="icon-links"><a href="#"><i class="material-icons small"> shopping_cart</i></a><a href="#"><i class="material-icons small"> star</i></a></p></figcaption></a></figure><div><h1>A partir de R$ </h1><p>'+data[x].year+'</p></div></div></p></div>');
		}
	});
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
}
$(document).ready(function () {
	actions();

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
				resultados += '<div class="col-md-3"><img class="img-responsive" src="'+data[x].images.banner+'"/></div> <a href="http://localhost:60000/quadro/detalhado/'+data[x].id+'">';
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
