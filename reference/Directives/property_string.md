
#x:property_string directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('property_string');</script>

Allows to set one property in {@link _cWidget#properties}, but instead of parsing - it will treat it's content as text.
This way, text inside the directive does not require to be quoted.

##Example

<lavabuild:template_result as="single_view">
<text_input>
	<x:property_string name="value">I'm a "happy" string.</x:property_string>
</text_input>
</lavabuild:template_result>

Note: the content of the directive is parsed just like any other part of template, so this will <b>NOT</b> work 
(cause inside there is a character sequence which represents an opening block):

```xml
<x:property_string name="value">this is a very {#bad()} string</x:property_string>
```

The right way:

<!-- closing 'literal' switch in code... -->
{literal:}
<div class="lava-code-container">
<div class="lava-code">
<pre class="lava-code-line-numbers">&nbsp;&nbsp;1</pre>
<pre class="lava-code-content hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">x:property_string</span> <span class="hljs-attribute">name</span>=<span class="hljs-value">"value"</span>&gt;</span>&#123;literal:}this is a very {#bad()} string&#123;:literal}<span class="hljs-tag">&lt;/<span class="hljs-title">x:property_string</span>&gt;</span></pre>
</div>
</div>
{:literal}