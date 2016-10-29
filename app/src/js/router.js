var Backbone = require('backbone');
var Home = require('./views/home');
var About = require('./views/about');
var Contact = require('./views/contact');
var Projects = require('./views/projects');

var Router = Backbone.Router.extend({
    routes: {
        '' : 'home',
        'about': 'aboutView',
        'contact': 'contactView',
        'projects': 'projectsView'
    }
});

var router = new Router();

router.on('route:home', function() {
    var homeView = new Home();
    homeView.render();
});

router.on('route:aboutView', function(){
  var aboutView = new About();
  aboutView.render();
})

router.on('route:contactView', function(){
  var contactView = new Contact();
  contactView.render();
})

router.on('route:projectsView', function(){
  var projectsView = new Projects();
  projectsView.render();
})

module.exports = router;
