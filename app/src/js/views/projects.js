'use strict'
var Backbone = require('backbone');
var projectDisplayed = 0;
import router from '../router';
import isMobile from '../isMobile';

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
      $('#outer-container').on('mousewheel', this.scrollEvent);
    },
    scrollEvent: function(){
      if(!isMobile()){
        $('p.svg').fadeOut(1000);
      }
    },
    handleNavigationAnimations: function(){
      $('#navbar .link a#about').click(e => {
        e.preventDefault();
        this.goToPageFromAboutPage('about');
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
        $('#outer-container').off('mousewheel', this.scrollEvent);
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
