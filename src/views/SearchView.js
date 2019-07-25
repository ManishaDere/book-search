var App = App || {};

App.views.SearchView = Backbone.View.extend({
  el: '#search',

  events: {
    'click .form__searchBtn': 'onSearch'
  },

  initialize: function() {
    _.bindAll(
      this,
      'render',
      'onSearch'
    );
    this.render();
  },

  template: Handlebars.compile($('#searchform--template').html()),

  render: function() {
    this.$el.append(this.template({}));
  	return this;
  },

  onSearch: function(e) {
    e.preventDefault();
    var $searchform__searchText = this.$('#form__searchText');
    App.helpers.setFilters({
      q: $searchform__searchText.val()
    });
    App.eventBus.trigger('QUERY_UPDATE');
  }

});
