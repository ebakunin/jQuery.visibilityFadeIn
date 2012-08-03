jQuery.visibilityFadeIn()
=========================

Copyright (c) 2012 by Eric Christenson (eric.j.christenson[at]gmail[dot]com)<br />
Licensed under the GNU General Public License (http://www.gnu.org/licenses/gpl.html).

A version of jQuery.fadeIn() that uses 'visibility' CSS styling. jQuery.visibilityFadeIn() is useful because jQuery.fadeIn() only uses "display" CSS properties, which differ from "visibility" CSS properties.


**Example**
<pre>
<html>

<script type="text/javascript">
<!--
$(function() {
  $('#foo').visibilityFadeIn(1000);
});
//-->
</script>

<h1 id="foo" style="visibility:hidden">Foo</h1>
</html>
</pre>

The <h1> element will fade in over 1 second when the page loads. Since it's using "visibility" styling the spacing of the elements on the page will not change. This would not be true if $.fadeIn() was used instead. 