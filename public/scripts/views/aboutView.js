'use strict';
// This is where we define the view for the "About" page

(function(module) {

  const aboutView = {};
  aboutView.init = function() {
    $('#contacts').empty();
    console.log('inside of aboutView.init');
    $('#content').text('Hello y\'all from the about page!');
  }

  module.aboutView = aboutView;
})(window);
