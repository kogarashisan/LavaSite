
##Directives

Directives are tags from "x:" namespace.
Some of them allow you to modify config options for views and widgets, others insert special objects into template.
Some of widget definition tags have directive analogs.

You can find the compete list in the <a href="/www/doc.html#tab=reference">reference</a> section.

###x:property directive

Set a property on a widget:

<lavabuild:template_result as="single_view">
<collapsible-panel id="panel1">
	<x:property name="is_locked">true</x:property>
	<title>Hello example</title>
	<content>Hello World!</content>
</collapsible-panel>
</lavabuild:template_result>

This will also work:

```xml
<body lava-app="HelloApp">
	<x:property name="your_name">"World"</x:property>
	...
</body>
```

This will assign <str>"World"</str> to `your_name` property in the instance of HelloApp.

Widget definition analog:

<lavabuild:template_result as="single_view">
<x:widget extends="CollapsiblePanel">
	<property name="title">"The title"</property>
</x:widget>
</lavabuild:template_result>

Directive content can be any native JavaScript type - array, string or even <i>object</i>. 
Content is validated and executed with `eval()`.

###x:properties directive

Same as x:property, but sets the whole {@link _cWidget#properties}, not just one property in it:

<lavabuild:template_result as="single_view">
<collapsible-panel>
	<x:properties>
		{
			content: "This is content",
			title: "This is title"
		}
	</x:properties>
</collapsible-panel>
</lavabuild:template_result>

Expects a serialized object in it. Has widget tag analog.

###x:option and x:options

Same as above, but assign their value to {@link _cView#options} property in view or widget configs.
<i>Difference between properties and options: unlike properties, options are static (they do not change).</i>

<lavabuild:template_result as="single_view">
<accordion>
	<x:option name="keep_expanded_on_add">true</x:option>
	<panels>
		<panel>
			<title>Panel 1</title>
			<content>...</content>
		</panel>
	</panels>
</accordion>
</lavabuild:template_result>

Important note: &lt;panel&gt; tag inside accordion does <b>not</b> belong to a panel widget -
it's still processed by sugar rules of accordion widget.

All mentioned directives have corresponding tags in widget definition.

###x:assign directive

Assign expression result to a view or widget property.

```xml
<body lava-app="HelloApp">
	<collapsible-panel id="panel1" class="panel-default">
		<x:assign name="is_expanded">your_name.length > 3</x:assign>
		<x:property name="is_locked">true</x:property>
		<title>Hello example</title>
		<content>Hello {#> your_name}!</content>
	</collapsible-panel>
</body>
```

In this example panel will open when `your_name` is at least 3 letters long.
Content of the directive must be an expression.

###x:bind

Bi-directional binding to property of a widget. TextInput widget has `value` property, which is bound to `your_name`
from parent widget:

```xml
<body lava-app="HelloApp">
	<label>Name:</label>
	<x:widget extends="TextInput">
		<bind name="value">your_name</bind>
	</x:widget>
	<br/>
	<h1>Hello {$>your_name}!</h1>
</body>
```

This is true HelloWorld example in Lava. &lt;x:bind&gt; directive has corresponding tag in widget definition.
It expects a path to a property inside it (expressions are not allowed).

Here is the real HelloWorld example in LiquidLava framework:
<iframe style="height: 26em; width: 100%" src="http://embed.plnkr.co/HJRgNh/preview"></iframe>
<i><a href="/www/demos/hello.html">Alternative link</a></i>