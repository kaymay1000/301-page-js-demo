'use strict';
// This is where we define the view for the "Contact" page

(function(module) {

  const contactView = {};

  contactView.init = function() {
    console.log('inside of contactView.init');
    $('#content').text('My Contacts List');
    $('#contacts').empty();
    $.getJSON('/scripts/models/contact.json')
    .then(function(data) {
      console.table(data);
      data.forEach(function(contact){
        let liEl = `<li>${contact.name}'s favorite number is ${contact['favorite number']}</li>`;
        $('#contacts').append(liEl);
      });
    }, function(err) {
      console.log(err);
    });

  }

  module.contactView = contactView;
})(window);
