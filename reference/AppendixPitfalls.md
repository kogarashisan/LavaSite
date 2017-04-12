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

			x:dom-event:change="$text_input.value_changed"
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

##Views versus linear logic

Consider the following template:

```xml
{#if(#page.something)}
	{#> #page.my_modifier(#page.something)}
{/if}
```

You can think that argument, which you pass to modifier, will never be <kw>null</kw> or <kw>false</kw>, 
but this is not always true, cause this is not a JavaScript <kw>if</kw> operator.
This template defines two views, outer If and inner Expression, which are bound to
Argument instances, which receive values from same PropertyBinding.

Let's assume, that currently `#page.something` evaluates to true, so both views are created and in DOM.
Now we set `something` to null. What will happen? Both views are still created, still in DOM, 
and framework starts the scope refresh cycle.
Both arguments evaluate their value and fire "changed" events... and this is the moment, when modifier receives <kw>null</kw>.

When scope refresh loop starts - PropertyBinding that evaluates `#page.something` fires "changed" event,
and both arguments are placed into refresh queue. When inner argument is refreshed - 
at this moment `#page.something` is <kw>null</kw>, so `#page.my_modifier` receives <kw>null</kw> instead of expected value.

Later, when view refresh cycle starts, the outer If view will detect, that it's argument is <kw>false</kw> now,
so now it may decide to destroy it's template with inner Expression view, but this will happen after both
arguments are refreshed.

Summary: inside modifiers you should always check passed argument values for nulls.

See also: {@link reference:ScopeRefreshCycle}

##Manual widget insertion

You should not do yourself something that can be done by framework. For example, you can insert widgets by hands:

<lavabuild:codeblocks>
	<codeblock title="Template" lang="xml">
<body>
	<!-- empty body, without lava-app attribute -->
</body>
	</codeblock>
	<codeblock title="Javascript" lang="javascript">
Firestorm.onDocumentReady(function() {

	Lava.init();

	// phase 1
	var instance = Lava.createWidget('CollapsiblePanel');
	instance.set('title', "Old title");
	Firestorm.Element.setHtml(document.body, instance.render());
	instance.broadcastInDOM();

	// phase 2
	instance.set('title', "New title");
	Firestorm.Element.setHtml(document.body, instance.render());
	instance.broadcastInDOM();

});
	</codeblock>
</lavabuild:codeblocks>

There is a glitch on this page: move cursor out of page area and hit F5 on your keyboard. Instead of what you expected - 
you will see <str>"Old title"</str> string. If you move cursor into the page - right at that moment <str>"Old title"</str> 
will be replaced with <str>"New title"</str>.

What happened here: first, widget was created and rendered with <str>"Old title"</str>, then inserted into the page. 
Nothing special here.

Then you set a property on the widget. PropertyBinding, which is bound to <str>"title"</str>, places itself into the 
refresh queue (it does not refresh itself immediately!). Now you render the widget with dirty PropertyBinding, 
which still serves the old title.

When you move cursor into the page - an event occurs (each event ends with a view refresh cycle).
So widget is rendered and inserted with old data, and then refreshed.

This specially matters, when you insert heavy widgets like Tree - first you render and insert the tree with old records,
then new records are rendered and inserted during the refresh cycle. Sometimes user will see the changes after
a click or other action, which makes this glitch even more noticeable.

This would not happen, if you used widget's methods, which are designed for this purpose:

```javascript
Firestorm.onDocumentReady(function() {

	Lava.init();

	var instance = Lava.createWidget('CollapsiblePanel');
	instance.set('title', "Old title");
	instance.inject(document.body, 'Top');
	instance.remove();

	instance.set('title', "New title");
	instance.inject(document.body, 'Top');

});
```

Why this works correctly: inside `inject()` there is a call to `Lava.ScopeManager.refresh()` before `render()`.
And call to `render()` is wrapped between calls to `Lava.ScopeManager.lock()` and `unlock()`.

Summary: prefer using framework methods instead of doing something manually. 
Use {@link Lava.widget.Standard#inject} and {@link Lava.widget.Standard#injectIntoExistingElement} to insert widget 
into DOM.