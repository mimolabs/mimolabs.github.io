// particlesJS.load('particles-js', 'particles.json')

$(document).foundation();

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#sticky-header").addClass("active");
    }
    else {
        $("#sticky-header").removeClass("active");
    }
});

function openNav() {
    document.getElementById("navTray").style.height = "100%";
}

function closeNav() {
    document.getElementById("navTray").style.height = "0%";
}

console.log("%cWelcome to the jungle, what's going on pal?", "font-size: x-large")

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

$('input#submitButton').click( function() {
  var email = $('input[name="email"]').val();
  if (email && isEmail(email)) {
    $.ajax({
      url: 'http://app.mimo.test:8080/api/v1/holding_accounts',
      type: 'post',
      dataType: 'json',
      data: { email: email },
      success: function(data) {
        $('.signup').hide();
        $('.signedup').show();
      }
    });
  }
});
