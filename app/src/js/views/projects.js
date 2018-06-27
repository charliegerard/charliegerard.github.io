'use strict'
var Backbone = require('backbone');
var projectDisplayed = 0;
import router from '../router';

var Projects = Backbone.View.extend({
    el: '#container',
    template: require('../../templates/projects.hbs'),
    events: {
      'click #next': 'showNextProject',
      'click #previous': 'showPreviousProject'
    },
    initialize: function(){
    },
    showNextProject: function(){
      var numberOfProjects = this.collection.models.length;
      if (projectDisplayed < numberOfProjects - 1){
        projectDisplayed++
      }
      this.render();
    },
    showPreviousProject: function(){
      if (projectDisplayed > 0){
        projectDisplayed--;
      }
      this.render();
    },
    render: function(){
      this.initialAnimation();

      this.$el.html(this.template({projects: this.collection.models[projectDisplayed]}));

      this.handleNavigationAnimations();
      this.arrowAnimation();

      return this;
    },
    arrowAnimation: function(){
      $('#outer-container').bind('mousewheel', e => {
				var block = $('.project-details')[0].getBoundingClientRect()
				var e = window.event;
				var delta =  Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				if(delta < 0){
					$('p.svg').fadeOut(1000);
				} else if(delta > 0 && block.top>-1 && block.top >= $('#projects-container').height()){ //If scrolling back to top and contributions block not visible
					$('p.svg').fadeIn(1000);
				}
      });
    },
    handleNavigationAnimations: function(){
      $('#navbar .link a').click(e => {
        e.preventDefault();
        var href = $(e.currentTarget).attr('href');
        if(href === '#about'){
          this.goToPageFromAboutPage('about');
        }
      });

      $('.description').click(e => {
        e.preventDefault();
        this.goToPageFromAboutPage('#');
      });
    },
    goToPageFromAboutPage: function(page){
      $('.project-number').fadeOut();
      $('.project-block h3').slideUp();
      $('.visit-button').slideUp();
      $('.svg').fadeOut();
      $('.project-block img').fadeOut("slow", function(){
        router.navigate(page, true)
      });
    },
    initialAnimation: function(){
      $('.description').first().css({"display": "block"});
      $('#app-container').addClass('container-style');
      $('#outer-container').addClass('outer-container-style');
    }
});

module.exports = Projects;
