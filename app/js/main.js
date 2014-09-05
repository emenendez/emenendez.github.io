/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width
(function () {
  'use strict';
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();

$( document ).ready(function() {
  // Set up Hammer.js
  delete Hammer.defaults.cssProps.userSelect;
  var target = $('.sidebar');

  var mc = new Hammer.Manager($('body').get(0));
  mc.add( new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL }) );

  mc.on('swipe', function(ev) {
    if (ev.direction == Hammer.DIRECTION_RIGHT) {
      target.addClass('visible');  
    }
    else if (ev.direction == Hammer.DIRECTION_LEFT) {
      target.removeClass('visible');
    }
  });

  // Toggle visibility on sidebar touch
  target.on('click', function() {
    $(this).toggleClass('visible');
  });

  // Remove repeat <abbr>s
  var abbrs = new Array();

  function removeAbbr() {
    if ($.inArray($(this).text(), abbrs) >= 0) {
      $(this).replaceWith($(this).text());
    }
    else {
      abbrs.push($(this).text());
    }
  }

  $('abbr').not('blockquote abbr').each(removeAbbr);
  $('blockquote abbr').each(removeAbbr);

});
