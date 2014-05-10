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

});