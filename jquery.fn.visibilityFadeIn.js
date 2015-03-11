/**
 * A version of jQuery.fadeIn() that uses 'visibility' CSS styling.
 * Note that the element must start with visibility: hidden
 *
 * @author   Eric Christenson
 * @date     March 11, 2015
 * @version  3.0
 * @license  MIT License (http://opensource.org/licenses/MIT)
 *
 * @param  duration  mixed (optional. Accepts time in milliseconds, 'slow', or 'fast')
 * @param  complete  function (optional. A callback function)
 */
(function ($) {
    $.fn.visibilityFadeIn = function (duration, complete) {
        var speed = duration || 400;

        switch (speed) {
            case 'fast':
                speed = 200;
                break;
            case 'slow':
                speed = 600;
                break;
            default:
                speed = parseInt(duration);
        }

        $(this).each(function (index) {
            if ($(this).css('visibility') === 'hidden') {
                $(this).delay(index * 100).css({ opacity: 0, visibility: 'visible' }).fadeTo(speed, 1);
            }
        });

        $(this).promise().done(function () {
            complete();
        });
    };
})(jQuery);
