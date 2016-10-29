var template = require('../../templates/contact.html');
var Backbone = require('backbone');

var Contact = Backbone.View.extend({
    el: '#container',
    initialize: function()
    {
    },
    render : function()
    {
        this.$el.html(template);
    }
});

module.exports = Contact;
