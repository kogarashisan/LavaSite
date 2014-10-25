
#x:bind directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('bind');</script>

Defines {@link _cWidget#bindings}

##Example

<lavabuild:template_result as="single_view">
<text_input>
	<x:bind name="value">selected_circle.text</x:bind>
</text_input>
</lavabuild:template_result>

You can set property bindings in x:define via &lt;bind&gt; tag, but it's recommended to move them to inline widget definition (to x:widget directive).

##Binding direction

By default, binding is bi-directional.
If you want to bind a property in one direction only, there are two ways to do that:
- if you bind from scope to widget - use x:assign directive (or &lt;assign&gt; widget definition tag)
- if you want to bind property from widget to scope - there is `from_widget` attribute

<lavabuild:template_result as="single_view">
<text_input>
	<x:bind name="value" from_widget>selected_circle.text</x:bind>
</text_input>
</lavabuild:template_result>