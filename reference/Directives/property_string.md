
#x:property_string directive

Allows to set one property in {@link _cWidget#properties}, but instead of parsing - it will treat it's content as text.
This way, text inside the directive does not require to be quoted.

###Example

<lavabuild:template_result as="single_view">
<text_input>
	<x:property_string name="value">I'm a "happy" string.</x:property_string>
</text_input>
</lavabuild:template_result>

Note: the content of the directive is parsed just like any other part of template, so this will <b>NOT</b> work:

```xml
<x:property_string name="value">this is a very {:L:}#bad(){:R:} string</x:property_string>
```

The right way:

```xml
<x:property_string name="value">{:L:}literal:}this is a very {:L:}#bad(){:R:} string{:L:}:literal}</x:property_string>
```