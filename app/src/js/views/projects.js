'use strict'

var Backbone = require('backbone');
import ProjectCollection from '../models/projectCollection';
var Handlebars = require('handlebars');
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
      // window.addEventListener('scroll', function(e) {
      //   var step = ($('#test-container').height() - $(window).height()) / 22;
      //   var scrollStep = parseInt($(window).scrollTop() / step);
      //   var maskPosition = (100/22) * scrollStep;
      //   $('#cover').css({
      //     'mask-position': maskPosition + '% 50%',
      //     '-webkit-mask-position': maskPosition + '% 50%'
      //   })
      // // });
      var descriptionBlock = document.getElementsByClassName('description')[0];
      descriptionBlock.style.display = 'block'

      var MOUSE_OVER = false;
      $('body').bind('mousewheel', function(e){
        if(MOUSE_OVER){
          if(e.preventDefault) { e.preventDefault(); }
          e.returnValue = false;
          return false;
        }
      });

      $('#outer-container').mouseenter(function(){ MOUSE_OVER=true; });
      $('#outer-container').mouseleave(function(){ MOUSE_OVER=false; });

      $('#outer-container').bind('mousewheel', function(e){
        var e = window.event;
        var delta =  Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if(delta > 0){
          //go up
          var width = parseInt($('#wipe-left').css('width'))
          width-=10;
          var newWidth = (width <= 0) ? 0 : width;
          $('#wipe-left').css({
            'width': newWidth + 'px'
          })
          //text
          var position = parseInt($('.project-details').css('top'));
          position+=10;
          var paragraphHeight = parseInt($('.project-details').height());
          var newPosition = (position >= window.innerHeight + 50) ? window.innerHeight + 50 : position
          $('.project-details').css({
            'top': newPosition + 'px'
          })
          //title
          var titlePosition = parseInt($('.project-block h3').css('bottom'))
          titlePosition-=2;
          var newTitlePosition = (titlePosition <= 100) ? 100 : titlePosition;
          var titlePositionLeft = parseInt($('.project-block h3').css('left'));
          titlePositionLeft+=1;
          var newTitleLeft = (titlePositionLeft >= -50) ? -50 : titlePositionLeft;
          var titleSize = parseInt($('.project-block h3').css('font-size'));
          titleSize+=1;
          var newTitleSize = titleSize >= 40 ? 40 : titleSize;
          $('.project-block h3').css({
            'bottom': newTitlePosition + 'px',
            'left': -50 + 'px',
            'font-size': newTitleSize + 'px'
          })
        }else{
          //go down

          // white background
          var width = parseInt($('#wipe-left').css('width'));
          var outerContainerWidth = parseInt($('#outer-container').css('width'));
          width+=15;
          var newWidth = (width >= outerContainerWidth) ? outerContainerWidth : width;
          $('#wipe-left').css({
            'width': newWidth + 'px'
          })

          //text
          var position = parseInt($('.project-details').css('top'));
          var textBottom = parseInt($('.project-details').css('bottom'));
          position -= (textBottom > 100) ? 0 : 5;
          $('.project-details').css({
            'top': position + 'px'
          })

          //title
          var titlePositionBottom = parseInt($('.project-block h3').css('bottom'));
          titlePositionBottom+=2;
          var titlePositionLeft = parseInt($('.project-block h3').css('left'));
          titlePositionLeft-=1;
          var newTitlePosition = (titlePositionBottom >= 325) ? 325 : titlePositionBottom;
          var newTitleLeft = (titlePositionLeft <= -85) ? -85 : titlePositionLeft;
          var titleSize = parseInt($('.project-block h3').css('font-size'));
          titleSize-=0.5;
          var newTitleSize = titleSize <= 15 ? 15 : titleSize;
          $('.project-block h3').css({
            'bottom': newTitlePosition + 'px',
            'left': newTitleLeft + 'px',
            'font-size': newTitleSize + 'px'
          })
        }
      });


      var lastScrollTop = 0;
      window.addEventListener('scroll', function(e) {
        var step = ($('#wipe-left').height() - $(window).height()) / 22;
        var scrollStep = parseInt($(window).scrollTop() / step);
        var maskPosition = (100/22) * scrollStep;

        var scroll = $(this).scrollTop();
        if (scroll > lastScrollTop){
          console.log(maskPosition)
          // console.log('diw width', parseInt($('#wipe-left').css('width')))
          var width = (parseInt($('#wipe-left').css('width')) >= $('#projects-container').css('width')) ? $('#projects-container').css('width') + 'px' : maskPosition + 'px'
          console.log('width', width)
          $('#wipe-left').css({
            'width': width + 'px'
          })
        } else {
          // var width = (parseInt($('#wipe-left').css('width')) >= window.innerWidth) ? $('#projects-container').css('width') : ($('#wipe-left').position().left - maskPosition) + 'px'
          // $('#wipe-left').css({
          //   'width': width
          // })
        }
        lastScrollTop = scroll;
      });

      var template = Handlebars.compile(this.template({projects: this.collection.models[projectDisplayed]}));

      this.$el.html(template);
      return this;
    }
});

module.exports = Projects;
