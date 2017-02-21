'use strict';
// This is where we define the view for the "Home" page, in other words, the default view

(function(module) {

  const homeView = {};
  homeView.init = function() {
    $('#contacts').empty();
    console.log('inside of homeView.init');
    $('#content').text('Hello y\'all from the home page!');
  }

  module.homeView = homeView;
})(window);
