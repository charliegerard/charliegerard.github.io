$(document).ready(function(){
	var navbar = document.getElementById('navbar');
	var navbarLinks = navbar.getElementsByClassName('link');

	for(var i = 0; i < navbarLinks.length; i++){
		navbarLinks[i].className += ' navbar-link-animation';
	}

	// The following function is horrible but I don't have time to refactor it :/
	window.mobilecheck = function() {
	  var check = false;
	  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	$('#projects').click(function(){
		if(!window.location.hash){
			var threejscontainer = $( '#threejs-container' );
			threejscontainer.fadeOut();
			threejscontainer.remove()
			clickOnProjectsLinkFromHomepage();
		} else if(window.location.hash.includes('#about')){
			clickOnProjectsFromAboutPage();
		}
	})

	$('#about').click(function(){
		if(!window.location.hash){
			clickOnAboutLinkFromHomepage();
		} else if(window.location.hash.includes('projects')){
			clickOnAboutFromProjectsPage();
		}
	})

	$('#home-link .description').click(function(){
		if(window.location.hash.includes('projects')){
			clickOnHomeFromProjectsPage();
		} else if(window.location.hash.includes('#about')){
			clickOnHomeFromAboutPage();
		}
	})

	//Check for scroll on about page

	// var MOUSE_OVER = false;
	$('body').bind('mousewheel', function(e){
	  // if(MOUSE_OVER){
	  //   if(e.preventDefault) { e.preventDefault(); }
	  //   e.returnValue = false;
	  //   return false;
	  // }
			if(window.location.hash.includes('about') && !window.mobilecheck()){
				var block = $('#contributions-block')[0].getBoundingClientRect()
				var e = window.event;
				var delta =  Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				if(delta < 0){
					$('p.svg').fadeOut(1000);
				} else if(delta > 0 && block.top>-1 && block.bottom <= $(window).height()){ //If scrolling back to top and contributions block not visible
					$('p.svg').fadeIn(1000);
				}
			}

			if(window.location.hash.includes('projects') && !window.mobilecheck()){
				var block = $('.project-details')[0].getBoundingClientRect()
				var e = window.event;
				var delta =  Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				if(delta < 0){
					$('p.svg').fadeOut(1000);
				} else if(delta > 0 && block.top>-1 && block.top >= $('#projects-container').height()){ //If scrolling back to top and contributions block not visible
					$('p.svg').fadeIn(1000);
				}
			}
	});

	//Home page
	if(!window.location.hash){
	  var descriptionBlock = document.getElementsByClassName('description')[0];
	  descriptionBlock.style.display = 'none';

	  homepageBackgroundAnimation();

	} else {
	  if(descriptionBlock){
	    descriptionBlock.style.display = 'block'
	  }

	  otherPagesBackground();
	}

		function homepageBackgroundAnimation(){
		  var appContainer = $('#app-container');
		  appContainer.addClass('container-animation');

		  var outerContainer = $('#outer-container');
		  outerContainer.addClass('outer-container-animation');

			threeJSAnimation();
		}

		function otherPagesBackground(){
		  var appContainer = $('#app-container');
		  appContainer.addClass('container-style');

		  var outerContainer = $('#outer-container');
		  outerContainer.addClass('outer-container-style');
		}

		function threeJSAnimation(){

			  var SEPARATION = 30, AMOUNTX = 430, AMOUNTY = 55;

			  var container;
			  var camera, scene, renderer;
			  var particles, particle, count = 0;
			  var windowHalfX = window.innerWidth / 2;
			  var windowHalfY = window.innerHeight / 2;

			  init();
			  animate();

			  function init() {

			    container = document.getElementById( 'threejs-container' );
			    if(container) {
			        container.className += container.className ? ' waves' : 'waves';
			    }

			    camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 1, 10000 );
			    camera.position.y = 350; //changes how far back you can see i.e the particles towards horizon
			    camera.position.z = 200; //This is how close or far the particles are seen

			    camera.rotation.x = 0.15;

			    scene = new THREE.Scene();

			    particles = new Array();

			    var PI2 = Math.PI * 2;
			    var material = new THREE.SpriteCanvasMaterial( {

			      color: 0x939393, //changes color of particles
			      program: function ( context ) {

			        context.beginPath();
			        context.arc( 0, 0, 0.1, 0, PI2, true );
			        context.fill();

			      }

			    } );

			    var i = 0;

			    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

			      for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

			        particle = particles[ i ++ ] = new THREE.Sprite( material );
			        particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
			        particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) - 10 );
			        scene.add( particle );

			      }

			    }

			    renderer = new THREE.CanvasRenderer();
			    renderer.setSize( window.innerWidth, window.innerHeight );
			    renderer.setClearColor( 0xffffff, 1);
			    container.appendChild( renderer.domElement );

			    window.addEventListener( 'resize', onWindowResize, false );

			  }

			  function onWindowResize() {
			    windowHalfX = window.innerWidth / 2;
			    windowHalfY = window.innerHeight / 2;

			    camera.aspect = window.innerWidth / window.innerHeight;
			    camera.updateProjectionMatrix();

			    renderer.setSize( window.innerWidth, window.innerHeight );
			  }

			  function animate() {
			    requestAnimationFrame( animate );
			    render();
			  }

			  function render() {
			    var i = 0;

			    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
			      for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
			        particle = particles[ i++ ];
			        particle.position.y = ( Math.sin( ( ix + count ) * 0.20 ) * 50 ) + ( Math.sin( ( iy + count ) * 0.2 ) * 20 );
			        particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 2 ) * 4 + ( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;
			      }
			    }

			    renderer.render( scene, camera );
			    // This increases or decreases speed
			    count += 0.5;
			  }
		}

		function clickOnProjectsLinkFromHomepage(){
		  $('#home h1').addClass("outro-animation");
		  $('#home h2').addClass("outro-animation-h2");
		  $('#home h2').bind("animationend", function(){
		    window.location.href = "#projects"
		  });

		  // $('#threejs-container canvas').addClass("outro-animation-canvas");
		  // $('#threejs-container canvas').bind("animationend", function(){
		  //    window.location.href = "#projects"
		  // });
		}

		function clickOnAboutLinkFromHomepage(){
		  $('#home h1').addClass("outro-animation");
		  $('#home h2').addClass("outro-animation-h2");
		  $('#home h2').bind("animationend", function(){
		    window.location.href = "#about"
		  });

		  // $('#threejs-container canvas').addClass("outro-animation-canvas");
		  // $('#threejs-container canvas').bind("animationend", function(){
		  //    window.location.href = "#about"
		  // });
		}

		function clickOnAboutFromProjectsPage(){
		  $('.project-number').fadeOut();
		  $('.project-block h3').slideUp();
		  $('.visit-button').slideUp();
		  $('.svg').fadeOut();
		  $('.project-block img').fadeOut("slow", function(){
		      window.location.href = "#about"
		  });
		}

		function clickOnHomeFromProjectsPage(){
		  $('.project-number').fadeOut();
		  $('.project-block h3').slideUp();
		  $('.visit-button').slideUp();
		  $('.svg').fadeOut();
		  $('.project-block img').fadeOut("slow", function(){
		      window.location.href = "/"
		  });
		}

		function clickOnHomeFromAboutPage(){
			 $('#intro-block').addClass('fade-left');
			 $('#about-me-block').addClass('fade-right');
			 $('#skills-block').addClass('fade-right');
			 $('#contributions-block').addClass('fade-down');
			 $('p.svg').fadeOut();
		   $('#about-container h2').fadeOut();
			 $('#navbar').fadeOut();
			 $('#home-link').addClass('fade-left');
			$('#home-link').bind("animationend", function(){
				window.location.href = "/"
			})
		}

		function clickOnProjectsFromAboutPage(){
			$('#intro-block').addClass('fade-left');
			$('#about-me-block').addClass('fade-right');
			$('#skills-block').addClass('fade-right');
			$('#contributions-block').addClass('fade-down');
			$('p.svg').fadeOut();
			$('#about-container h2').fadeOut("slow", function(){
					 window.location.href = "#projects"
			});
		}
})
