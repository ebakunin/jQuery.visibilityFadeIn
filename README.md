# jQuery.visibilityFadeIn()

Copyright (c) 2015 by Eric Christenson (eric.j.christenson[at]gmail[dot]com)<br />
Licensed under the MIT Public License (http://opensource.org/licenses/MIT).

A version of jQuery.fadeIn() that uses "visibility" CSS styling. jQuery.visibilityFadeIn() is useful because jQuery.fadeIn() only uses "display" CSS properties, which differ from "visibility" CSS properties.

<pre>
.visibilityFadeIn( [duration ] [, complete ] )
</pre>

**duration** (default: 400) <br />
    Type: Number or String <br />
    A string or number determining how long the animation will run. Accepts "slow" (600ms) and "fast" (200ms)

**complete** <br />
    Type: Function() <br />
    A function to call once the animation is complete.


**Example**
<pre>
&lt;html&gt;
&lt;h1 id="foo" style="visibility:hidden">Foo&lt;/h1&gt;

&lt;script type="text/javascript"&gt;
&lt;!--
$(function() {
    $('#foo').visibilityFadeIn('slow', function () {
        alert('done!')
    });
});
//--&gt;
&lt;/script&gt;
&lt;/html&gt;
</pre>

The &lt;h1&gt; element will fade in over 600 milliseconds when the page loads. Since it's using "visibility" styling the spacing of the elements on the page will not change. This would not be true if $.fadeIn() was used instead. 
