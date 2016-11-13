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
      var self = this;
      // window.onload = function(){
        self.$el.html(template);
      // }
    }
});

module.exports = Home;
