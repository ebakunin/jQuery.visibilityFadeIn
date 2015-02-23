/**
 * A version of jQuery.fadeIn() that uses 'visibility' CSS styling.
 * Note that the element must start with visibility: hidden
 *
 * @author   Eric Christenson
 * @date     February 22, 2015
 * @version  2.0
 * @license  MIT License (http://opensource.org/licenses/MIT)
 *
 * @param  fadeSpeed  int (time in milliseconds. Optional, defaults to 100)
 */
(function ($) {
    $.fn.visibilityFadeIn = function (fadeSpeed) {
        fadeSpeed = fadeSpeed || 1000;

        $(this).each(function (index) {
            if ($(this).css('visibility') === 'hidden') {
                $(this).delay(index * 100).css({opacity: 0, visibility: 'visible'}).fadeTo(parseInt(fadeSpeed), 1);
            }
        });
    }
})(jQuery);