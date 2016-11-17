var template = require('../../templates/home.html');
var Backbone = require('backbone');

var Home = Backbone.View.extend({
    el: '#container',
    events:{
      load : 'loaded'
    },

    loaded: function(){
      this.render()
    },

    render : function(){
      var descriptionBlock = document.getElementsByClassName('description')[0];
      descriptionBlock.style.display = 'none'

      this.$el.html(template);
    }
});

module.exports = Home;
