
#Views

##Expression view

Expression view allows you to output a value of any JavaScript expression.
This is commonly used short form:

<lavabuild:template_result as="single_view">
{#> applyFilter('liquidLava', 'ucFirst') + " is the best framework ever!" }
</lavabuild:template_result>

Standard form example. There must be no content inside the block.

<lavabuild:template_result as="single_view">
{#expression(applyFilter('liquidLava', 'ucFirst') + " is the best framework ever!")}{/expression}
</lavabuild:template_result>

Example: turn off escaping of HTML entities

<lavabuild:template_result as="single_view">
{#expression("<b>This text will be bold</b>") escape_off}{/expression}
</lavabuild:template_result>

Tip: when using the standard form of Expression view - do not forget to put the closing block part (`{:L:}/expression}`).

##Foreach view

Foreach view displays the given template for each item from Enumerable, array or an object.
Items themselves can be anything.

<lavabuild:template_result as="single_view">
{#foreach(['Mary', 'John', 1]) as=name}
	Hello {#> name}
{/foreach}
</lavabuild:template_result>

How it works internally: for each item in collection it creates a new instance of {@link Lava.system.Template}.
<b>Each view inside that Template instance is assigned the following variables:</b>
- <str>"foreach_index"</str> - refers to item index in collection
- <str>"foreach_name"</str> - holds current key, when iterating over an object
- current item. Name is specified by `as` property.

Once again: Template itself does not implement Properties - these variables are assigned to views, which it owns.
And Foreach view does not hold <str>"foreach_index"</str>, <str>"foreach_name"</str> and current item properties -
they are assigned to views inside the Foreach template. From the previous example: `Hello {:L:}#> name}` - all these 
variables, including `name`, will be assigned directly to the Expression view. However, `count` property belongs to
Foreach view.

Current item can be accessed with name from `as` option:

<lavabuild:codeblocks>
	<codeblock lang="javascript" title="Example controller">
Lava.define('Lava.widget.MyWidget', {
	Extends: 'Lava.widget.Standard',

	_properties: {
		sample_object: {
			name_one: {property: 'value1'},
			name_two: {property: 'value2'},
			name_three: {property: 'value3'}
		}
	}
});
	</codeblock>
	<codeblock lang="xml" title="Template">
<body lava-app="MyWidget">
	{#foreach(sample_object) as=record}
		{#> foreach_index}. Key: {#> foreach_name}. Property: {#> record.property} <br/>
	{/foreach}
</body>
	</codeblock>
</lavabuild:codeblocks>

##If view

If view (with "elseif" chain) displays the first template, for which it's argument evaluates to <kw>true</kw>.

<lavabuild:template_result as="single_view">
{#if(score > 100)}
	Excellent
{elseif(score > 50)}
	Good
{else}
	Bad
{/if}
</lavabuild:template_result>

"elseif" and "else" blocks are optional.
Each template inside the view is assigned <str>"if_index"</str> variable, just like templates in Foreach.

##View

This kind of view does not have an argument or any active functionality.

<lavabuild:template_result as="single_view">
{#view()}
	...
{/view}
</lavabuild:template_result>

Practical usage example: you can give this view a {@link Lava.view.container.Morph} container
and wrap views without container inside it. This way, when inner views will need to update -
only the content of the Morph container will be refreshed.

This view is also created for element containers with `x:type="view"` attribute:

<lavabuild:template_result as="single_view">
<div x:type="view">
	...
</div>
</lavabuild:template_result>

See article about {@link reference:ElementSyntax|element syntax}.

##Include view

This view allows you to display and dynamically update a template, which is returned as result of an expression. 
You should not confuse it with common includes.

<lavabuild:codeblocks>
	<codeblock title="Script" lang="javascript">
Lava.define('Lava.widget.MyWidget', {

	Extends: 'Lava.widget.Standard',
	name: 'my_widget',

	_properties: {
		name: 'World',
		dynamic_template: Lava.TemplateParser.parse("{#> 'Hello' + name}")
	}
});
	</codeblock>
	<codeblock title="Template" lang="xml">
{#include($my_widget.dynamic_template)}
	Default template
{/include}
	</codeblock>
</lavabuild:codeblocks>

View can have a default template, which is used when it's argument returns <kw>null</kw>.

Tip: you can not put a template directly into {@link _cWidget#properties} - you can assign template to a property 
only in JavaScript code, not in widget templates. This is due to a reason that view configs must be traversable 
(they must have predictable structure). But templates can be taken from widget's storage - for an example see 
{@link Lava.widget.Tabs} or {@link Lava.widget.Accordion}.