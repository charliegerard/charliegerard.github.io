var template = require('../../templates/about.hbs');
var Backbone = require('backbone');
import router from '../router';
import isMobile from '../isMobile';

var About = Backbone.View.extend({
    el: '#container',
    initialize: function(){
    },
    render : function(){
      this.initialAnimation();

      this.$el.html(template);

      this.handleNavigationAnimations();
    },
    handleNavigationAnimations: function(){
      $('#navbar .link a#projects').click(e => {
        e.preventDefault();
          this.goToPageFromAboutPage('projects');
      });

      $('.description').click(e => {
        e.preventDefault();
        this.goToPageFromAboutPage('#');
      });
    },
    goToPageFromAboutPage: function(page){
      $('#intro-block').addClass('fade-left');
      $('#about-me-block').addClass('fade-right');
      $('#skills-block').addClass('fade-right');
      $('#contributions-block').addClass('fade-down');
      $('p.svg').fadeOut();
      $('#about-container h2').fadeOut("slow", function(){
        router.navigate(page, true)
      });
    },
    initialAnimation: function(){
      $('.description').first().css({"display": "block"});
      $('#app-container').addClass('container-style');
      $('#outer-container').addClass('outer-container-style');
    }
});

module.exports = About;
