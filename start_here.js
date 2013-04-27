var App = Ember.Application.create();

App.name = "Goodbye, Moon!";
App.secondsViewed = 0;

// Demonstrate binding variables to the view.
setInterval(function() {
  var viewed = App.get('secondsViewed');
  App.set('secondsViewed', viewed + 1);
}, 1000);
