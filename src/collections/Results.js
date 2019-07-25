var App = App || {}

var base_url = 'https://www.googleapis.com/books/v1/volumes';

App.collections.Results = Backbone.Collection.extend({
  initialize: function () {
    _.bindAll(
      this,
      'url',
      'parse'
    );
  },
  url: function () {
  	return base_url;
  },
	parse: function(response) {
    if(!response) {
      return;
    }
    this.meta = {
      totalItems: response.totalItems,
      items: response.items
    };
	  return response.items;
  }

});

