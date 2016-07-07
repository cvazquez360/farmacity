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
          "paginate": {
             "next": "Siguiente",
             "previous": "Anterior"
         },
        }
      })
    });

})();

function animateCollapsibles() {
  $('#filtros').on('hidden.bs.collapse', function () {
      $('.button-collapse').find('.fa-chevron-right').css({
          'moz-transform': 'rotate(0deg)',
          '-webkit-transform': 'rotate(0deg)',
          '-o-transform': 'rotate(0deg)',
          '-ms-transform': 'rotate(0deg)',
          'transform': 'rotate(0deg)',
          '-webkit-transition': 'all .2s ease',
          '-moz-transition': 'all .2s ease',
          '-ms-transition': 'all .2s ease',
          '-o-transition': 'all .2s ease',
          'transition': 'all .2s ease'
      });
  }).on('show.bs.collapse', function () {
      $('.button-collapse').find('.fa-chevron-right').css({
          'moz-transform': 'rotate(90deg)',
          '-webkit-transform': 'rotate(90deg)',
          '-o-transform': 'rotate(90deg)',
          '-ms-transform': 'rotate(90deg)',
          'transform': 'rotate(90deg)',
          '-webkit-transition': 'all .2s ease',
          '-moz-transition': 'all .2s ease',
          '-ms-transition': 'all .2s ease',
          '-o-transition': 'all .2s ease',
          'transition': 'all .2s ease'
      });
  })

  $('#tabla').on('hidden.bs.collapse', function () {
      $('.button-collapse').find('.fa-chevron-down').css({
          'moz-transform': 'rotate(-90deg)',
          '-webkit-transform': 'rotate(-90deg)',
          '-o-transform': 'rotate(-90deg)',
          '-ms-transform': 'rotate(-90deg)',
          'transform': 'rotate(-90deg)',
          '-webkit-transition': 'all .2s ease',
          '-moz-transition': 'all .2s ease',
          '-ms-transition': 'all .2s ease',
          '-o-transition': 'all .2s ease',
          'transition': 'all .2s ease'
      });
  }).on('show.bs.collapse', function () {
      $('.button-collapse').find('.fa-chevron-down').css({
          'moz-transform': 'rotate(0deg)',
          '-webkit-transform': 'rotate(0deg)',
          '-o-transform': 'rotate(0deg)',
          '-ms-transform': 'rotate(0deg)',
          'transform': 'rotate(0deg)',
          '-webkit-transition': 'all .2s ease',
          '-moz-transition': 'all .2s ease',
          '-ms-transition': 'all .2s ease',
          '-o-transition': 'all .2s ease',
          'transition': 'all .2s ease'
      });
  })
}
