$(document).ready(function(){
	$('#navbar a').on('click', function(event){
		var $anchor = $(this);
		$('html, body').animate({
			scrollTop: $($anchor.attr('href')).offset().top + 'px'
		}, 1000);
		event.preventDefault();
	});

	$('#about a').on('click', function(event){
		var $anchor = $(this);
		$('html, body').animate({
			scrollTop: $($anchor.attr('href')).offset().top + 'px'
		}, 1000);
		event.preventDefault();
	});

	var words = ["Programming", "Post-rock", "LEGO",
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
