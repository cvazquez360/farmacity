(function (){

  'use strict';

  $('.easy-sidebar-toggle').click(function(event) {
      $('.easy-sidebar-container').toggleClass('toggled');
      $('.navbar.easy-sidebar').toggleClass('toggled');

      event.preventDefault();
  });

  $('html')
    .on('swiperight', function(){
      $('.easy-sidebar-container').addClass('toggled');
      $('.navbar.easy-sidebar').addClass('toggled');
    })
    .on('swipeleft', function(){
      $('.easy-sidebar-container').removeClass('toggled');
      $('.navbar.easy-sidebar').removeClass('toggled');
    });
})();
