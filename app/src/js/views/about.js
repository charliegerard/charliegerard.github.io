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
      this.arrowAnimation();
    },
    arrowAnimation: function(){
      $('#outer-container').bind('mousewheel', e => {
        if(!isMobile()){
          var block = $('#contributions-block')[0].getBoundingClientRect()
          var e = window.event;
          var delta =  Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
          if(delta < 0){
            $('p.svg').fadeOut(1000);
          } else if(delta > 0 && block.top>-1 && block.bottom <= $(window).height()){ //If scrolling back to top and contributions block not visible
            $('p.svg').fadeIn(1000);
          }
        }
      })
    },
    handleNavigationAnimations: function(){
      $('#navbar .link a').click(e => {
        e.preventDefault();
        var href = $(e.currentTarget).attr('href');
        if(href === '#projects'){
          this.goToPageFromAboutPage('projects');
        }
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
