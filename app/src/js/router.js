var Backbone = require('backbone');
var Home = require('./views/home');
var About = require('./views/about');
var Contact = require('./views/contact');
var projects = require('./views/projects');
import Project from './models/projectModel';
import ProjectCollection from './models/projectCollection';
var projectsData = require("./projects.json");

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
  var list = [];
  projectsData[0].web.forEach(function(project){
    list.push(new Project({title: project.title, image: project.image, url: project.url, description: project.description}))
  })

  var projectsView = new projects({model: Project, collection: new ProjectCollection(list)});
  projectsView.render();
})

module.exports = router;
