var template = require('../../templates/about.html');
var Backbone = require('backbone');

var About = Backbone.View.extend({
    el: '#container',
    initialize: function()
    {
    },
    render : function()
    {
        this.$el.html(template);
    }
});

module.exports = About;
