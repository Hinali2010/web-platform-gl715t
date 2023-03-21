$(document).ready(function () {
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

  var highestBox = 0;
  $('.event-data .event').each(function () {
    if ($(this).height() > highestBox) {
      highestBox = $(this).height();
    }
  });
  $('.event-data .event').height(highestBox);
});
