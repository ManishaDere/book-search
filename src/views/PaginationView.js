var App = App || {};

App.views.PaginationView = Backbone.View.extend({
	el: '#pagination',

  initialize: function(options) {
  	this.options = options;
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    var perPage = 10;
  	var totalPages = this.options.totalItems / perPage;
  	this.$el.twbsPagination({
      totalPages: totalPages,
      visiblePages: 7,
      initiateStartPageClick: false,
      onPageClick: function (event, page) {
		    App.helpers.setFilters({
		      page: page
		    });
		    App.eventBus.trigger('QUERY_UPDATE');
      }
    });
    return this;
  },

});
