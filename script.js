import data from 'package.json';
$('.toggle').click(function () {
  'use strict';
  $('nav ul').slideToggle();
});

$(window).resize(function () {
  'use strict';
  if ($(window).width() > 780) {
    $('nav ul').removeAttr('style');
  }
});
$(document).ready(function () {
  var highestBox = 0;
  $('.event').each(function () {
    if ($(this).height() > highestBox) {
      highestBox = $(this).height();
    }
  });
  $('.event').height(highestBox);
});
