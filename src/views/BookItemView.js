var App = App || {};

App.views.BookItemView = Backbone.View.extend({
  className: 'book',
  initialize: function(options) {
    this.options = options;
    _.bindAll(this, 'render');
  },

  template: Handlebars.compile($('#bookItems--template').html()),

  render: function() {
    this.$el.append(this.template({
      title: this.options.title,
      imageLinks: this.options.imageLinks,
      description: this.options.description,
      infoLink: this.options.infoLink,
    }));
  	return this;
  },

});
