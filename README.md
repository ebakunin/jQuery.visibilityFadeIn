jQuery.visibilityFadeIn()
=========================

Copyright (c) 2012 by Eric Christenson (eric.j.christenson[at]gmail[dot]com)<br />
Licensed under the GNU General Public License (http://www.gnu.org/licenses/gpl.html).

A version of jQuery.fadeIn() that uses 'visibility' CSS styling. jQuery.visibilityFadeIn() is useful because jQuery.fadeIn() only uses "display" CSS properties, which differ from "visibility" CSS properties.


**Example**
<pre>
&lt;html&gt;
&lt;script type="text/javascript"&gt;
&lt;!--
$(function() {
    $('#foo').visibilityFadeIn(1000);
});
//--&gt;
&lt;/script&gt;

&lt;h1 id="foo" style="visibility:hidden">Foo&lt;/h1&gt;
&lt;/html&gt;
</pre>

The &lt;h1&gt; element will fade in over 1 second when the page loads. Since it's using "visibility" styling the spacing of the elements on the page will not change. This would not be true if $.fadeIn() was used instead. 