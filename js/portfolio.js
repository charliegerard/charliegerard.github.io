$(document).ready(function(){

	/*When clicking on one of the link in the navbar, scroll down automatically
	to that part */
	$('#navbar a').on('click', function(event){
		var $anchor = $(this);
		console.log($anchor.attr('href').height)
		$('html, body').animate({
			//scrollTop: $anchor.attr('href').offsetTop + 'px'
			scrollTop: $($anchor.attr('href')).offset().top + 'px'
		}, 1000);
		event.preventDefault();
	});

	$('#about a').on('click', function(event){
		var $anchor = $(this);
		console.log($anchor.attr('href').height)
		$('html, body').animate({
			//scrollTop: $anchor.attr('href').offsetTop + 'px'
			scrollTop: $($anchor.attr('href')).offset().top + 'px'
		}, 1000);
		event.preventDefault();
	});

	/*
	LIST OF THINGS I LIKE. RENDERING ONE WORD AT A TIME
	*/

	var words = ["Programming", "Post-rock", "LEGO", "Fractals",
				"Robots", "Creative Innovations", "Coffee",
				"Generative Art", "Learning"]
	var counter = 0;
	var element = document.getElementById('words');

	var change = function(){
		element.innerHTML = words[counter];
		counter++;
		if(counter >= words.length){
			counter = 0;
		}
	}

	window.setInterval(change, 1500);

});






