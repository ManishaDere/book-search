var App = App || {};

App.views.HomeView = Backbone.View.extend({
  el: '#root',

  events: {
  },
  template: Handlebars.compile($('#home--template').html()),
  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    this.$el.append(this.template());
    this.searchView = new App.views.SearchView();
    this.resultsView = new App.views.ResultsView();
  	return this;
  },

});


