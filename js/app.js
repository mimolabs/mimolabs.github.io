$(document).foundation();

$(document).ready(function() {
  $(".invisible-man").show();
});

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

$(document).ready(function(){
  checkPartner();
});

function checkPartner() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var partner_id = url.searchParams.get("partner_id");

  if ( partner_id !== undefined && partner_id !== '' && partner_id !== null) {
    Cookies.set('mimo_pid', partner_id, { expires: 7, domain: '.oh-mimo.com', path: '' });
  }
}

$('a.register-button').click( function() {
  // alert(123);
  // fbq('track', 'Lead');
  // not sure we want to yet
});

$('input#submitButton').click( function() {
  var email = $('input[name="email"]').val();

  if (email && isEmail(email)) {
    var partner = Cookies.get('mimo_pid');
    $.ajax({
      url: 'https://api.ctapp.io/api/v1/holding_accounts',
      type: 'post',
      dataType: 'json',
      data: { email: email, partner_id: partner },
      success: function(data) {
        window.location.href = "/signed-up";
        // $('.signup').hide();
        // $('.signedup').show();
      }
    });
    fbq('track', 'Lead');
  }
});

var calculate = function(people,plan) {
  var val;
  var base_1 = 4;
  var base_2 = 10;
  var plan_price = parseInt(plan.plan_price);
  var currency = plan.currency;

  if (plan.currency === 'GBP') {
    base_1 = 3;
    base_2 = 8;
  }

  if (people <= 250) {
    return plan_price;
  }

  function thousand(num) {
    val = ((num - 250) / 50) * base_1;
    return val + plan_price;
  }

  if (people <= 1000) {
    return thousand(people);
  }

  var max = thousand(1000);
  if (people <= 1500) {
    return max + base_2;
  }

  if (people <= 2000) {
    return max + 2*base_2;
  }

  if (people <= 2500) {
    return max + 3*base_2;
  }

  if (people <= 3000) {
    return max + 4*base_2;
  }

  if (people <= 3500) {
    return max + 5*base_2;
  }

  if (people <= 4000) {
    return max + 6*base_2;
  }

  if (people <= 4500) {
    return max + 7*base_2;
  }

  if (people <= 5000) {
    return max + 8*base_2;
  }
  return 0;
};

var plan;
var plans = {};
plans.splash = { plan_price: '19', symbol: '£', currency: 'GBP' };
plans.engage = { plan_price: '79', symbol: '£', currency: 'GBP' };

function toTitleCase(str)
{
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$('.slider').on('moved.zf.slider', function(){
  var people = $(this).children('.slider-handle').attr('aria-valuenow');
  if (people > 0) {
    $('.totalPeople').html(people);
    var cost = calculate(people, plan);
    if (cost === 0) {
      $('.enterpriseNo').hide();
      $('.enterpriseYes').show();
      $('.monthlyCost').hide();
      $('.totalPrice').html('Contact Us.');
      return;
    }
    $('.enterpriseNo').show();
    $('.enterpriseYes').hide();
    $('.monthlyCost').show();
    $('.totalPrice').html(plan.symbol + cost + '.00');
  }
});

$('.engage').on('click', function() {
  var id = $(this).attr("data-plan");
  plan = plans[id];
  $('.planName').html(toTitleCase(id));
  $('.totalPrice').html(plan.symbol + plan.plan_price + '.00');
  $('#engageModal').foundation('open');
});

// drift.on('ready',function(api){
$('.contact').click( function() {
  Intercom('show');
});
// });
