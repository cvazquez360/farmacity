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

  $('.easy-sidebar .btn-secondary-sidebar')
  .on('click', function(){
    $('.easy-sidebar .btn-secondary-sidebar').removeClass('btn-selected-secondary');
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

  $(function() {
    $('input[name="fecha"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true
    });
  });

  $('#newForm').formValidation({
    framework: 'bootstrap',
    icon: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    fields: {
      newName: {
        validators: {
          notEmpty: {
            message: 'El nombre de usuario es requerido.'
          },
          regexp: {
            regexp: /^[a-zA-Z\s]+$/,
            message: 'Debe usar caracteres alfabético y el espacio'
          }
        }
      },
      newUser: {
        validators: {
          notEmpty: {
            message: 'El usuario es requerido.'
          }
        }
      },
      newRol: {
        validators: {
          notEmpty: {
            message: 'Seleccione una opción.'
          }
        }
      },
      newMail: {
        validators: {
          notEmpty: {
            message: 'El mail es requerido.'
          },
          emailAddress: {
            message: 'La entrada no es una dirección de correo electrónico válida'
          }

        }
      },
      fecha: {
        validators: {
          notEmpty: {
            message: 'La fecha es requerida.'
          },
          date: {
            format: 'DD/MM/YYYY',
            message: 'La fecha no es válida'
          }
        }
      }
    }
  });

  $('#editForm').formValidation({
    framework: 'bootstrap',

    icon: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    fields: {
      newName: {
        validators: {
          notEmpty: {
            message: 'El nombre de usuario es requerido.'
          },
          regexp: {
            regexp: /^[a-zA-Z\s]+$/,
            message: 'Debe usar caracteres alfabético y el espacio'
          }
        }
      },
      newUser: {
        validators: {
          notEmpty: {
            message: 'El usuario es requerido.'
          }
        }
      },
      newRol: {
        validators: {
          notEmpty: {
            message: 'Seleccione una opción.'
          }
        }
      },
      newMail: {
        validators: {
          notEmpty: {
            message: 'El mail es requerido.'
          },
          emailAddress: {
            message: 'La entrada no es una dirección de correo electrónico válida'
          }
        }
      },
      fecha: {
        validators: {
          notEmpty: {
            message: 'La fecha es requerida.'
          },
          date: {
            format: 'DD/MM/YYYY',
            message: 'La fecha no es válida'
          }
        }
      }
    }
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
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
}
