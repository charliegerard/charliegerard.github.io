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
}

$('#projects').click(function(){
  $('#home h1').addClass("outro-animation");
  $('#home h2').addClass("outro-animation-h2");
  $('#threejs-container canvas').addClass("outro-animation-canvas");
  $('#threejs-container canvas').bind("animationend", function(){
     window.location.href = "#projects"
  });
})
