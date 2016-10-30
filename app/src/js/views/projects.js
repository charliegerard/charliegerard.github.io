'use strict'

var Backbone = require('backbone');
import ProjectCollection from '../models/projectCollection';

var Projects = Backbone.View.extend({
    el: '#container',
    template: require('../../templates/projects.hbs'),

    initialize: function(){
      _.bindAll(this, 'render');
    },

    render : function(){
      this.$el.html(this.template({projects: this.collection.models}));
      return this;
    }
});

module.exports = Projects;
