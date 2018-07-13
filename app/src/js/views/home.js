var template = require('../../templates/home.html');
import router from '../router';
import threeJsAnimation from '../threeJsAnimation';
var Backbone = require('backbone');

var Home = Backbone.View.extend({
    el: '#container',
    events:{
      load : 'loaded'
    },
    loaded: function(){
      this.render()
    },
    render : function(){
      this.initialAnimations();

      this.$el.html(template);

      threeJsAnimation();

      this.handleNavigationAnimations();
    },
    handleNavigationAnimations: function(){
      $('#navbar .link a#projects').click(e => {
        e.preventDefault();
        this.goToPageFromHomePage('projects');
      })

      $('#navbar .link a#about').click(e => {
        e.preventDefault();
        this.goToPageFromHomePage('about');
      })
    },
    initialAnimations: function(){
      $('.description').first().css({"display": 'none'});
      $('#app-container').addClass('container-animation');
      $('#outer-container').addClass('outer-container-animation');
    },
    goToPageFromHomePage: function(page){
      $('#threejs-container canvas').fadeOut();
      $('#home h1').addClass("outro-animation");
      $('#home h2').addClass("outro-animation-h2");
      $('#home h2').bind("animationend", function(){
        router.navigate(page, true)
      });
    }
});

module.exports = Home;
