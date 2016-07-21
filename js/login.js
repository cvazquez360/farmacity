(function (){

  $('#loginForm').formValidation({
    // I am validating Bootstrap form
    framework: 'bootstrap',

    icon: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    fields: {
      userName: {
        validators: {
          notEmpty: {
            message: 'El nombre de usuario es requerido.'
          }
        }
      },
      userPassword: {
        validators: {
          notEmpty: {
            message: 'La contraseña es requerida.'
          }
        }
      }
    }
  });

})();
