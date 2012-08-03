/**
 * A version of jQuery.fadeIn() that uses 'visibility' CSS styling
 * 
 * @author   Eric Christenson
 * @license  GNU GPL (http://www.gnu.org/licenses/gpl.html)
 *
 * @param  int  delay (fade in time in milliseconds. Optional)
 * @return void
 */
(function($) {
	$.fn.visibilityFadeIn = function(delay) {
		if (undefined === delay) {
			delay = 100;
		}

		$(this).each(function(index) {
			$(this).fadeTo(0,0).delay(index*100).css('visibility','visible').fadeTo('fast',1);
		});
	}
})(jQuery);