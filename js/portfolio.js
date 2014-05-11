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


	/*----------------
	Trying to create a kind of javascript shell
	-----------------*/

	var shellIn=$('#shellIn');
	var shellOut=$("#shellOut");
	var shellDiv=$("#shellDiv");
	shellIn.focus();

	function shellEvaluate() {
		shellOut.innerHTML+="<b>"+shellIn.value+"</b><br/><i>"+ eval(shellIn.value)+"</i><br/>>>> "
		//shellDiv.scrollTop=shellDiv.scrollHeight
		//shellIn.value="";
		shellIn.value = $('#shellIn').val()

		if(shellIn.value == "1"){
		 	// shellOut.innerHTML += "Hello back"
		 	$('#answer').append(">>> If I could travel in time, I'd like to go check out the dinosaurs... Dinosaurs are awesome!" + "<br><br>")
		} else if (shellIn.value == '2'){
			//$('#answer').empty();
			$('#answer').append(">>> If I could choose to be someone famous, I'd be Grace Hopper, she was a badass..." + "<br><br>")
		} else if (shellIn.value == '3'){
			$('#answer').append(">>> I can make animals with balloons..." + "<br><br>")
		}
	};

	$('#shellIn').on('keydown', function(){
		if(event.keyCode==13){
			shellEvaluate();
		}
	});

	//Trying to display text on hover for projects

	$('#loople2').hover(function(){
		$('#loople2 #bloc').slideDown(300);
	}, function(){
		$('#loople2 #bloc').slideUp(200);
	});

	$('#readr').hover(function(){
		$('#readr #bloc').slideDown(300);
	}, function(){
		$('#readr #bloc').slideUp(200);
	});


	$('#dancingcats').hover(function(){
		$('#dancingcats #bloc').slideDown(200);
	}, function(){
		$('#dancingcats #bloc').slideUp(200);
	});


	//Progress bar

		var maxWidth = 400;
	    var duration = 2000;
	    var timer;

	$(window).load(function(){

	        var $bar = $('#bar').width(0).css('background-color', 'rgb(12, 21, 32)');
	        var $bar2 = $('#bar2').width(0).css('background-color', 'rgb(52,103,124)');
	        var $bar3 = $('#bar3').width(0).css('background-color', 'rgb(98,151,145)');
	        var $bar4 = $('#bar4').width(0).css('background-color', 'rgb(137,179,148)');
	       	var $bar5 = $('#bar5').width(0).css('background-color', 'rgb(196,0,0)');
	       	var $bar6 = $('#bar6').width(0).css('background-color', 'grey');
	        //Displaying a percentage on the screen.
	        //Horloge(maxWidth);
	        //timer = setInterval('Horloge(' + maxWidth + ')', 100);
	        $bar.animate({
	            width: 200 + 'px'
	        }, duration, function () {
	            $(this).css('background-color', 'rgb(12, 21, 32)');
	            //clearInterval(timer);
	        });

	       	$bar2.animate({
	            width: 180 + 'px'
	        }, duration, function () {
	            $(this).css('background-color', 'rgb(52,103,124)');
	            //clearInterval(timer);
	        });

	        $bar3.animate({
	            width: 160 + 'px'
	        }, duration, function () {
	            $(this).css('background-color', 'rgb(98,151,145)');
	            //clearInterval(timer);
	        });

	       	$bar4.animate({
	            width: 50 + 'px'
	        }, duration, function () {
	            $(this).css('background-color', 'rgb(137,179,148)');
	            //clearInterval(timer);
	        });

	       	$bar5.animate({
	            width: 100 + 'px'
	        }, duration, function () {
	            $(this).css('background-color', 'rgb(196,0,0)');
	            //clearInterval(timer);
	        });

	        $bar6.animate({
	            width: 100 + 'px'
	        }, duration, function () {
	            $(this).css('background-color', 'grey');
	            //clearInterval(timer);
	        });
	});

});


	function Horloge(maxWidth) {
	    var w = $('#bar').width();
	    var percent = parseInt((w * 100) / maxWidth);
	    $('#log').html(percent + ' %');
	}





