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
  $('.event-wrapper .event').each(function () {
    if ($(this).height() > highestBox) {
      highestBox = $(this).height();
    }
  });
  $('.event-wrapper .event').height(highestBox);
});
