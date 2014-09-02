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

});
