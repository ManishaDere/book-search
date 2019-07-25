var App = App || {};

App.views.ResultsView = Backbone.View.extend({
  el: '#book-list',

  events: {
  },

  initialize: function() {
    _.bindAll(this, 'render');
    this.collection = new  App.collections.Results();
    //set filters initially
    App.helpers.setFilters({
      q: '',
      page: 1
    });

    this.dataInfo = new App.views.DataInformationView();

    //subscribe event
    App.eventBus.on('QUERY_UPDATE', (function(params) {
      this.fetchData(params);
    }).bind(this));
    //trigger event if we want data initially
    // App.eventBus.trigger('QUERY_UPDATE');
    this.listenTo(this.collection, 'sync', this.render);

    // this.collection.on('reset', this.render);
  },

  fetchData: function (params) {
    this.filters = App.helpers.getFilters();
    this.collection.fetch({
      data: this.filters,
      // reset: true
    });
  },

  render: function() {
    // Pass collections data using loop to another view
    this.filters = App.helpers.getFilters();

    if(this.collection.meta) {
      var meta = this.collection.meta;
    }
    var totalItems = meta.totalItems;
    this.dataInfo.render({
      totalItems: totalItems,
      q: this.filters.q
    });
    this.collection.each(function(item){
      var result = item.toJSON();
      var volumeInfo = result.volumeInfo;
      var imgLink = volumeInfo.imageLinks;
      var bookItem = new App.views.BookItemView({
        title: volumeInfo.title,
        imageLinks: imgLink.thumbnail,
        description: volumeInfo.description,
        infoLink: volumeInfo.infoLink
      });
      this.$el.append(bookItem.render().el);
    }, this);
    var pagination = new App.views.PaginationView({totalItems: totalItems});
    return this;
  },

});

