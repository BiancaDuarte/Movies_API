function filtroFilmes(){
	$('#quadros').empty();
	$.get('https://tv-v2.api-fetch.website/movies/125?sort=last%20added&order=1', function(data) {
		console.log(data);
		for(var x=0; x<50; x++){
			$('#quadros').append('<div class="col-md-4 imagem"><h2>'+data[x].title+'</h2><p><div class="grid"><figure class="effect-zoe"><a href="http://localhost:60000caneca/detalhada/'+data[x].id+'"><img src='+data[x].images.banner+'><figcaption><p class="icon-links"><a href="#"><i class="material-icons small"> shopping_cart</i></a><a href="#"><i class="material-icons small"> star</i></a></p></figcaption></a></figure><div><p>Genre: '+data[x].genres+'</p><h1> Duration: '+data[x].runtime+' minutes</h1><p>'+data[x].year+'</p></div></div></p></div>');
		}
	});
}

function filtroSeries(){
	$('#quadros').empty();
	$.get('https://tv-v2.api-fetch.website/shows/24?sort=name&order=1', function(data) {
		console.log(data);
		for(var x=0; x<50; x++){
			$('#quadros').append('<div class="col-md-4 imagem"><h2>'+data[x].title+'</h2><p><div class="grid"><figure class="effect-zoe"><a href="http://localhost:60000caneca/detalhada/'+data[x].id+'"><img src='+data[x].images.poster+'><figcaption><p class="icon-links"><a href="#"><i class="material-icons small"> shopping_cart</i></a><a href="#"><i class="material-icons small"> star</i></a></p></figcaption></a></figure><div><h1>A partir de R$ </h1><p>'+data[x].year+'</p></div></div></p></div>');
		}
	});
}

function filtroAnimes(){
	$('#quadros').empty();
	$.get('https://tv-v2.api-fetch.website/animes/12?sort=name&order=1', function(data) {
		console.log(data);
		for(var x=0; x<50; x++){
			$('#quadros').append('<div class="col-md-4 imagem"><h2>'+data[x].title+'</h2><p><div class="grid"><figure class="effect-zoe"><a href="http://localhost:60000caneca/detalhada/'+data[x].id+'"><img src='+data[x].images.banner+'><figcaption><p class="icon-links"><a href="#"><i class="material-icons small"> shopping_cart</i></a><a href="#"><i class="material-icons small"> star</i></a></p></figcaption></a></figure><div><h1>A partir de R$ </h1><p>'+data[x].year+'</p></div></div></p></div>');
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
});
