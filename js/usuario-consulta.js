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

  $('.easy-sidebar .btn-primary')
    .on('click', function(){
      $('.easy-sidebar .btn-primary').removeClass('btn-selected-primary');
      $(this).addClass('btn-selected-primary');
    });

  $('.easy-sidebar .btn-secondary')
    .on('click', function(){
      $('.easy-sidebar .btn-secondary').removeClass('btn-selected-secondary');
      $(this).addClass('btn-selected-secondary');
    });

    $(function() {
      $('input[name="daterange"]').daterangepicker();
    });

    $(document).ready(function() {
      $('#example').DataTable();
    });
})();
