require('../assets/css/main.scss');
require('./portfolio.js');
require('./router');

var Backbone = require('backbone');

Backbone.history.start();

if(!window.location.hash){
  var descriptionBlock = document.getElementsByClassName('description')[0];
  descriptionBlock.style.display = 'none'
} else {
  descriptionBlock.style.display = 'block'
}
