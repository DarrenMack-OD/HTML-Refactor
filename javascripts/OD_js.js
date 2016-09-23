var $widthScreen = $(window).innerWidth();
if ($widthScreen > '992') {
  $('#container').removeAttr('class');
  $('#container').attr('class', 'container')
} else {
  $('#container').removeAttr('class');
  $('#container').attr('class', 'container-fluid')
};

/* Init Bootstrap4 Bits */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
/*  $('[data-toggle="popover"]').popover(); */

  $('.carousel').carousel({
    interval: 0,
    wrap: false,
    keyboard: false
  });

  /* Custom Popovers */
  $('.sign-in').popover({
    html: true, 
    content: function() {
      return $('#signin_content_wrapper').html();
    }
  });
  $('.basket').popover({
    html: true,
    animation: true,
    content: function() {
      return $('#usertools_content_wrapper').html();
    }
  });
});

/* Country Toggle */
var findCountry = location.host.split('.').reverse();
var countryCode = findCountry[0];

$('#options').flagStrap({
    countries: {
        'AT': 'Austria',
        'BE': 'Belgium',
        'CH': 'Switzerland',
        'CZ': 'Czechoslovakia',
        'DE': 'Germany',
        'ES': 'Spain',
        'FR': 'France',
        'IE': 'Ireland',
        'IT': 'Italy',
        'LU': 'Luxembourg',
        'NL': 'Netherlands',
        'PL': 'Poland',
        'SK': 'Slovakia',
        'GB': 'United Kingdom',
        'US': 'United States'
    },
    buttonSize: "btn-lg",
    buttonType: "btn-secondary",
    labelMargin: "10px",
    scrollable: false,
    scrollableHeight: "350px",
    selectedCountry: countryCode
});

/* Load Mustache Templates
$('#signin_content_wrapper').html(can.view('templates/signin.mustache', signin-data));
$('#usertools_content_wrapper').html(can.view('templates/usertools.mustache', tools-data)); */


/* ReFill Input Box */
$(function() {
	var $input = $('input#qty');
	$defaultValue = $input.data('default-value');
  $input.on('focus', function (event) {
    var $this = $(this);
    if ($this.val() == $defaultValue) $this.val('');
  });
	$input.on('focusout', function (event) {
    var $this = $(this);
    if ($this.val().trim() == '') $this.val($defaultValue);
  });
});