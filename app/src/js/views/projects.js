'use strict'

var Backbone = require('backbone');
import ProjectCollection from '../models/projectCollection';
var projectDisplayed = 0;

var Projects = Backbone.View.extend({
    el: '#container',
    template: require('../../templates/projects.hbs'),
    events: {
      'click #next': 'showNextProject',
      'click #previous': 'showPreviousProject'
    },

    initialize: function(){
      _.bindAll(this, 'render');
    },

    showNextProject: function(){
      var numberOfProjects = this.collection.models.length;
      if (projectDisplayed < numberOfProjects - 1){
        projectDisplayed++
      }
      this.render();
    },

    showPreviousProject: function(){
      var numberOfProjects = this.collection.models.length;
      if (projectDisplayed > 0){
        projectDisplayed--;
      }
      this.render();
    },

    render : function(){
      this.$el.html(this.template({projects: this.collection.models[projectDisplayed]}));
      return this;
    }
});

module.exports = Projects;
