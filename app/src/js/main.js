require('../assets/css/main.scss');
require('./portfolio.js');
require('./router');

var Backbone = require('backbone');

Backbone.history.start();

if(!window.location.hash){
  var descriptionBlock = document.getElementsByClassName('description')[0];
  descriptionBlock.style.display = 'none';

  var appContainer = $('#app-container');
  appContainer.addClass('container-animation');

  var outerContainer = $('#outer-container');
  outerContainer.addClass('outer-container-animation');

} else {
  if(descriptionBlock){
    descriptionBlock.style.display = 'block'
  }

  var appContainer = $('#app-container');
  appContainer.addClass('container-style');

  var outerContainer = $('#outer-container');
  outerContainer.addClass('outer-container-style');

}

if(!window.location.hash){
  $('#projects').click(function(){
    $('#home h1').addClass("outro-animation");
    $('#home h2').addClass("outro-animation-h2");
    $('#home h2').bind("animationend", function(){
      window.location.href = "#projects"
    });

    // $('#threejs-container canvas').addClass("outro-animation-canvas");
    // $('#threejs-container canvas').bind("animationend", function(){
    //    window.location.href = "#projects"
    // });
  })

  $('#about').click(function(){
    $('#home h1').addClass("outro-animation");
    $('#home h2').addClass("outro-animation-h2");
    $('#home h2').bind("animationend", function(){
      window.location.href = "#about"
    });

    // $('#threejs-container canvas').addClass("outro-animation-canvas");
    // $('#threejs-container canvas').bind("animationend", function(){
    //    window.location.href = "#about"
    // });

  })
} else if(window.location.hash.includes('projects')){
  $('#about').click(function(){
      $('.project-number').fadeOut();
      $('.project-block h3').slideUp();
      $('.visit-button').slideUp();
      $('.svg').fadeOut();
      $('.project-block img').fadeOut("slow", function(){
          window.location.href = "#about"
      });
  })

  $('#home-link .description').click(function(){
    $('.project-number').fadeOut();
    $('.project-block h3').slideUp();
    $('.visit-button').slideUp();
    $('.svg').fadeOut();
    $('.project-block img').fadeOut("slow", function(){
        window.location.href = "/"
    });
  })
} else if(window.location.hash.includes('#about')){
  $('#projects').click(function(){
      window.location.href = "#projects"
  })
}
