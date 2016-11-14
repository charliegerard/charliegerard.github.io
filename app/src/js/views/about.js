var template = require('../../templates/about.hbs');
var Backbone = require('backbone');

var About = Backbone.View.extend({
    el: '#container',
    initialize: function()
    {
    },
    render : function(){
      var descriptionBlock = document.getElementsByClassName('description')[0];
      descriptionBlock.style.display = 'block'

      this.$el.html(template);
    }
});

module.exports = About;
