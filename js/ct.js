// Change the starting prices here //

// The number of APs to start with
var v = 10;

// The initial starting prices per AP for both plans in USD
var startingBiz  = 600;
var startingPrem = 500;

// The initial plan price in USD
var bizPlanDollar = 60;
var prePlanDollar = 350;

// The initial plan price in GBP
var bizPlanGB = 50;
var prePlanGB = 250;

// The initial plan price in EURO
var bizPlanEur = 50;
var prePlanEur = 320;

// The starting currency //
var currency = 'USD';
var currencySymbol = '$';

// The base allowed APs per plan
var premAllowed = 75;
var bizAllowed  = 10;

// Set the exchange rates //
var usdfx = 0.67;
var eurfx = 0.79;

// Set the step //
var step = 10;
var max  = 500;

function setCurrency() {

  switch(currency) {
    case 'GBP':
      currencySymbol = '£';
      startingBizPlan = bizPlanGB;
      startingPrePlan = prePlanGB;
      break;
    case 'USD':
      currencySymbol = '$';
      startingBizPlan = bizPlanDollar;
      startingPrePlan = prePlanDollar;
      break;
    case 'EUR':
      currencySymbol = '€';
      startingBizPlan = bizPlanEur;
      startingPrePlan = prePlanEur;
      break;
    default:
  }

  setVals();
}

// /////////////////////////////////////////
// Set the USD break-points in pence ///////
// /////////////////////////////////////////

function setPrices() {

  if (v >= 0 && v < 50) {
    perApPriceBiz  = startingBiz;
    perApPricePrem = startingPrem;
  } else if (v >= 50 && v < 100) {
    perApPriceBiz  = 500;
    perApPricePrem = 400;
  } else if (v >= 100 && v < 250) {
    perApPriceBiz  = 450;
    perApPricePrem = 350;
  } else if (v >= 250) {
    perApPriceBiz  = 400;
    perApPricePrem = 325;
  // } else if (v >= 500 && v < 1000) {
  //   perApPriceBiz  = ;
  //   perApPricePrem = 405;
  // } else if (v >= 1000 && v < 2500) {
    // perApPriceBiz  = 514;
    // perApPricePrem = 365;
  // } else if (v >= 2500 && v < 5000) {
    // perApPriceBiz  = 489;
    // perApPricePrem = 328;
  // } else if (v >= 5000 && v < 10000) {
    // perApPriceBiz  = 464;
    // perApPricePrem = 295;
  // } else {
    // perApPriceBiz  = 414;
    // perApPricePrem = 266;
  }

  switch(currency) {
    case 'GBP':
      perApPriceBiz =  (perApPriceBiz  * usdfx);
      perApPricePrem = (perApPricePrem * usdfx);
      break;
    case 'EUR':
      perApPriceBiz =  (perApPriceBiz  * eurfx);
      perApPricePrem = (perApPricePrem * eurfx);
      break;
    default:
  }

}

// *********************************************** //
// *********************************************** //
// *********************************************** //
// Don't mess with anything below here. Seriously. //
// *********************************************** //
// *********************************************** //
// *********************************************** //

function calculateTotal() {

  setPrices();

  var prem, biz;
  var billableApsPrem = (v - premAllowed);
  if (billableApsPrem > 0) {
    prem = (billableApsPrem * (perApPricePrem/100)) + startingPrePlan;
  } else {
    prem = startingPrePlan;
  }

  var billableApsBiz = (v - bizAllowed);
  if (billableApsBiz > 0) {
    biz = (billableApsBiz * (perApPriceBiz/100)) + startingBizPlan;
  } else {
    biz = startingBizPlan;
  }

  var x, y;
  x = (Math.round(perApPriceBiz) / 100).toFixed(2);
  y = (Math.round(perApPricePrem) / 100).toFixed(2);

  document.getElementById("perApPriceBiz").innerHTML  = x;
  document.getElementById("perApPricePrem").innerHTML = y;

  prem = prem.toFixed(2);
  biz  = biz.toFixed(2);

  document.getElementById("prem-plan").innerHTML = prem;
  document.getElementById("biz-plan").innerHTML  = biz;
}

function setVals() {

  var i, x;
  x = document.getElementsByClassName("currency");
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML  = currencySymbol;
  }
  document.getElementById("biz-plan").innerHTML  = startingBizPlan;
  document.getElementById("prem-plan").innerHTML = startingPrePlan;

}

function init() {
  setCurrency();
  calculateTotal();
}

function setStep() {

  if (v <= 150) {
    document.getElementById('calc-more').style.display = 'none';
    document.getElementById('calc-message').style.display = 'block';
    step = 10;
  } else if ( v > 150 && v < 500) {
    step = 50;
  } else if (v >= 500 && v < 1000) {
    document.getElementById('calc-message').style.display = 'none';
    document.getElementById('calc-more').style.display = 'block';
    step = 250;
  } else if (v > 1000 && v < 2500) {
    step = 250;
  } else {
    step = 500;
  }
  document.querySelector('.mdl-slider').step = step;
}

function setTotals() {
  var j, x;
  x = document.getElementsByClassName("totalAps");
  for (j = 0; j < x.length; j++) {
    x[j].innerHTML = v;
  }
}

function myFunction(e) {
  e.preventDefault();
  v = document.querySelector('.mdl-textfield__input').value;
  setTotals();
  init();
}

function tonySlider() {

  var prev = null;

  setCurrency();

  var rad = document.myForm.currency;

  for(var i = 0; i < rad.length; i++) {
    rad[i].onclick = function() {
      if(this !== prev) {
        prev = this;
      }
      currency = this.value;
      init();
    };
  }

  document.querySelector('.mdl-slider').addEventListener('change',function(value){
    v = document.querySelector('.mdl-slider').value;
    setTotals();
    setStep();
    init();
  });

  init();
}

document.addEventListener('DOMContentLoaded', function() {
  var elementExists = document.getElementById("calculator");
  if (elementExists) {
    document.querySelector('.mdl-slider').step  = step;
    document.querySelector('.mdl-slider').max   = max;
    document.querySelector('.mdl-slider').value = v;
    tonySlider();
  }
});
