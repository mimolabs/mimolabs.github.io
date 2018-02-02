$('#submit').click(function(event){
  // $(document).on("submit", "#register",  function( event ) {
  event.preventDefault();
  var values = $(this).serialize();
  email = $('input[name="email"]').val();

  alert(123);

  $.ajax({
    type: 'POST',
    url: url + '/api/v1/holding_accounts',
    data: $(this).serialize(),
    beforeSend: beforeSend,
    error: function(){
    },
    success: success,
  });
});

(function ($, window, document, undefined) {

  // var formTemplate =
  //   '<div class="register mdl-shadow--1dp mdl-card">'+
  //   '<form id=\'register\' name=\'myForm\'>' +
  //   '<div ng-hide=\'cookies\'>'+
  //   '<div class=\'row collapse\'>' +
  //   '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">'+
  //   '<input class="mdl-textfield__input" id="register" name="email" type="email" required/>'+
  //   '<label class="mdl-textfield__label" for="fieldEmail">Enter your email now.</label>'+
  //   '</div>'+
  //   '<div style="">'+
  //   '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" type="submit">Sign-up Free</button>'+
  //   '</div>'+
  //   '</div>' +
  //   '</div>' +
  //   '</div>' +
  //   '</div>' +
  //   '</form>';

  // var successTemplate =
  //   '<div class=\'alert-box success\' style=\'text-align: center; margin: 0 auto;\'>'+
  //   '<p>You\'ve been invited, please check your email.<br></p>'+
  //   '</div>';

  var email;
  // var url = 'http://127.0.0.1:8080';
  var url = 'https://api.ctapp.io';

  var regForm = function() {

    // $('form#myForm').submit();

    // $('.register-user').append('<div id=\'main-form\'></div><div id=\'success\'></div>');
    // var cookies = $.cookie('invited');
    // if (cookies) {
    //   cookies = JSON.parse(cookies);
    //   $('#success').html(successTemplate);
    // } else {
      // $('#main-form').append(formTemplate).focus();
    // }

    var beforeSend = function() {
      $('button').prop('disabled', true);
      $('.creating').html('<i class="fa fa-cog fa-spin"></i>');
    };

    var success = function() {
      var a = { d: new Date().getTime(), e: email };
      // cookies = JSON.stringify(a);
      // $.cookie('invited', cookies, { expires: 1, path: '/' });
      $('#main-form').html('');
      $('#success').html(successTemplate);
    };

    $('#submit').click(function(event){
    // $(document).on("submit", "#register",  function( event ) {
      event.preventDefault();
      var values = $(this).serialize();
      email = $('input[name="email"]').val();

      alert(123);

      $.ajax({
          type: 'POST',
          url: url + '/api/v1/holding_accounts',
          data: $(this).serialize(),
          beforeSend: beforeSend,
          error: function(){
          },
          success: success,
      });
    });

    // $(document).on("click", ".reset", function( event ) {
    //   // $.removeCookie('invited', { path: '/' });
    //   $('#main-form').html(formTemplate);
    //   $('#success').html('');
    //   event.preventDefault();
    // });

  };

  $.fn.ct = function () {
    if ( $('.register-user').length ) {
      regForm();
    }
  };

}(jQuery, window, window.document));
