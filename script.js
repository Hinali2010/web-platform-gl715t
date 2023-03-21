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
  setTimeout(function () {
    var highestBox = 0;
    $(' .event .event-topic').each(function () {
      if ($(this).height() > highestBox) {
        highestBox = $(this).height();
      }
    });
    $('.event .event-topic').height(highestBox);
    $('.searchTerm').on('keyup', function () {
      var value = $(this).val().toLowerCase();
      $('.event').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  }, 3000);
});
