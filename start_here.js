var App = Ember.Application.create();

// We now are overriding the default route that ember 
// had created automatically for us. The default route 
// is called "ApplicationRoute". If we create a model 
// method in the route, then whatever it returns is used 
// as the context for the view template.
App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return { name: "Gosh, it's full of stars!" }
  }
});

