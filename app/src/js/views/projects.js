var template = require('../../templates/projects.html');
var Backbone = require('backbone');

var Projects = Backbone.View.extend({
    el: '#container',
    initialize: function()
    {
    },
    render : function()
    {
        this.$el.html(template);
    }
});

module.exports = Projects;
