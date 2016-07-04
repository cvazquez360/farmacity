(function (){

  'use strict';

  moment.locale('es');

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

    $('input[name="daterange"]').daterangepicker({
      autoApply: true,
      startDate: moment()
    });

    $(document).ready( function () {
      $('#example').dataTable( {
        "bLengthChange": false,
        "searching": false,
        "language": {
            "lengthMenu": "Display _MENU_ records per page",
            "zeroRecords": "Nothing found - sorry",
            "info": "Página _PAGE_ de _PAGES_",
            "infoEmpty": "No se encontraron registros",
            "infoFiltered": "(filtered from _MAX_ total records)",
        }
      })
    });
})();
