var App = App || {};

App.Router = Backbone.Router.extend({

	routes: {
		'': 'homeView', // #/
    '*actions': 'pageNotFound',  // #/xyz
  },

	initialize: function(options) {
	},

  pageNotFound: function() {
    new App.views.PageNotFound();
  },

  homeView: function() {
    new App.views.HomeView();
  },

});

