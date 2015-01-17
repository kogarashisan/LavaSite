<lavabuild:title>Appendix D - Common pitfalls</lavabuild:title>

#Common pitfalls

##&lt;view&gt; versus &lt;template&gt;

Widget, like any other view, can have a container. You can give it a container with the &lt;view&gt; tag in
widget definition, and there is nothing bad in doing so.

Problems start to arise when container plays special role in widget lifecycle, for example
when you assign properties to your container in widget constructor or other methods.

This is best illustrated by the framework's input widgets. They all have single void (!) input tag in their templates:

```xml
<x:define controller="input.Text" title="TextInput" extends="InputAbstract">
	<include name="input_view">
		<input
			x:type="view"
			x:roles="_input_view"

			x:event:change="$text_input.value_changed"
			x:bind:name="$text_input.name"
			... />
	</include>
	...
```

Why not to turn this input tag into widget's container? We could get rid of another view inside our widget.
But instead, this view is registered by role (`x:roles="_input_view"`), then saved into property (`_input_container`),
and there are checks for it inside the widget, like:

```javascript
focus: function(){

	if (this._input_container && this._input_container.isInDOM()) {
		this._input_container.getDOMElement().focus();
	}

},
_setValue: function(value) {

	this._set('value', value);
	if (this._input_container) {
		this._input_container.setProperty('value', this._valueToElementProperty(value));
	}

}
...
```

We could convert this view into widget's container and reference it directly: `this._container.setProperty(...)`,
but that would make our design inflexible.

For example, we want to add a &lt;label&gt; before &lt;input&gt;, or add a dropdown Calendar widget after it 
(for date picker inputs): when input tag is widget's container - it's simply impossible.

Summary: there is nothing bad in giving your widget it's own container, until you start to manually access it.
In this case it's highly recommended to convert &lt;view&gt; into &lt;template&gt; and register it by role, 
otherwise your design will become inflexible. 

And it matters for all tags, not just void (for example, you can not wrap your own container in another tag).

