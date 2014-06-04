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

	/*
	LIST OF THINGS I LIKE. RENDERING ONE WORD AT A TIME
	*/

	var words = ["Programming", "Post-rock", "LEGO", "Fractals", 
				"Robots", "Creative Innovations", "Coffee", 
				"Generative Art", "Learning", "Nerds"]
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

	/*
	TEST WITH CAROUSEL PROJECTS
	*/

	$('#project_tiles').slick({
		dots: true
	})

	/*----------------
	Trying to create a kind of javascript shell - Not used at the moment
	-----------------*/

	// var shellIn=$('#shellIn');
	// var shellOut=$("#shellOut");
	// var shellDiv=$("#shellDiv");
	// shellIn.focus();

	// function shellEvaluate() {
	// 	shellOut.innerHTML+="<b>"+shellIn.value+"</b><br/><i>"+ eval(shellIn.value)+"</i><br/>>>> "
	// 	//shellDiv.scrollTop=shellDiv.scrollHeight
	// 	//shellIn.value="";
	// 	shellIn.value = $('#shellIn').val()

	// 	if(shellIn.value == "1"){
	// 	 	// shellOut.innerHTML += "Hello back"
	// 	 	$('#answer').append(">>> If I could travel in time, I'd like to go check out the dinosaurs... Dinosaurs are awesome!" + "<br><br>")
	// 	} else if (shellIn.value == '2'){
	// 		//$('#answer').empty();
	// 		$('#answer').append(">>> If I could choose to be someone famous, I'd be Grace Hopper, she was a badass..." + "<br><br>")
	// 	} else if (shellIn.value == '3'){
	// 		$('#answer').append(">>> I can make animals with balloons..." + "<br><br>")
	// 	}
	// };

	// $('#shellIn').on('keydown', function(){
	// 	if(event.keyCode==13){
	// 		shellEvaluate();
	// 	}
	// });

	/*-------------------------------------------------------- 
				PROJECTS SLIDES WITH INFOS ON HOVER
	---------------------------------------------------------*/

	$('#readr').mouseenter(function(){
		$('#readr_content').slideToggle(150);
		$('#readr h3').animate({bottom: '100px'}, 150);
		// return false;
	}).mouseleave(function(){
		$('#readr_content').slideToggle(150);
		$('#readr h3').animate({bottom: '0px'}, 150);
	});

	$('#loople').mouseenter(function(){
		$('#loople_content').slideToggle(150);
		$('#loople h3').animate({bottom: '100px'}, 150);
		// return false;
	}).mouseleave(function(){
		$('#loople_content').slideToggle(150);
		$('#loople h3').animate({bottom: '0px'}, 150);
	});

	$('#spectrm').mouseenter(function(){
		$('#spectrm_content').slideToggle(150);
		$('#spectrm h3').animate({bottom: '100px'}, 150);
		// return false;
	}).mouseleave(function(){
		$('#spectrm_content').slideToggle(150);
		$('#spectrm h3').animate({bottom: '0px'}, 150);
	});

	/* ---------------------------------------------
				SKILLS
	----------------------------------------------*/

	$('#front-end').mouseenter(function(){
		$(this).css({
			backgroundColor: '#E6E6E6',
			transition: 'all 0.1s',
		}),
		$('#front-end-details').fadeIn();

	}).mouseleave(function(){
		$(this).css({
			backgroundColor: 'grey',
			transition: 'all 0.1s',
		}),
		$('#front-end-details').fadeOut();
	});

	$('#back-end').mouseenter(function(){
		$(this).css({
			backgroundColor: '#E6E6E6',
			transition: 'all 0.1s',
		}),
		$('#back-end-details').fadeIn();

	}).mouseleave(function(){
		$(this).css({
			backgroundColor: 'grey',
			transition: 'all 0.1s',
		}),
		$('#back-end-details').fadeOut();
	});

	$('#tdd').mouseenter(function(){
		$(this).css({
			backgroundColor: '#E6E6E6',
			transition: 'all 0.1s',
		}),
		$('#test-details').fadeIn();

	}).mouseleave(function(){
		$(this).css({
			backgroundColor: 'grey',
			transition: 'all 0.1s',
		}),
		$('#test-details').fadeOut();
	});

});






