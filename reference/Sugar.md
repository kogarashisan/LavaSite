<lavabuild:title>Syntax sugar</lavabuild:title>

#Syntax sugar

There are two kinds of syntax for inserting widgets into templates: 
- full syntax, with &lt;x:widget&gt; directive
- and syntax sugar - when you define tags, which will be converted to widgets

For example, &lt;tabs&gt; tag is syntax sugar for Tabs widget. 
Sugar does not make sense for all widgets, and has slightly less possibilities, than standard syntax.

Here is an example of the same widget, written in standard and sugar form:

<lavabuild:codeblocks>
	<codeblock lang="xml" title="Standard form">
<x:widget extends="Tabs">
	<storage>
		<tabs>
			<tab name="tab1">
				<title>Tab 1 title</title>
				<content>Tab 1 content</content>
			</tab>
			<tab name="tab2">
				<title>Tab 2 title</title>
				<content>Tab 2 content</content>
			</tab>
		</tabs>
	</storage>
</x:widget>
	</codeblock>
	<codeblock lang="xml" title="Sugar form">
<tabs>
	<tab name="tab1">
		<title>Tab 1 title</title>
		<content>Tab 1 content</content>
	</tab>
	<tab name="tab2">
		<title>Tab 2 title</title>
		<content>Tab 2 content</content>
	</tab>
</tabs>
	</codeblock>
</lavabuild:codeblocks>


##Architecture

Sugar can be defined only for global widgets (by x:define directive).
Define directive passes widget config to {@link Lava#storeWidgetSchema}, which stores it in {@link Lava#widgets}.
If global widget has sugar, it's also added to {@link Lava#sugar_map} - keys in this hash correspond to tag name.

When template is compiled in {@link Lava.parsers.Common#compileTemplate} - all tags are converted back to strings,
but if sugar exists for a tag, than tag is converted to a widget, and sugar parser is invoked 
({@link Lava.system.Sugar} by default). See also: {@link Lava.parsers.Common#_compileSugar}.

##Directives in sugar

You can apply directives to sugar. Just like directives for views, they must be at the top of sugar tag's content.
Example:
<lavabuild:template_result as="single_view">
<accordion>
	<x:resources locale="default">
		<container path="panel.COLLAPSIBLE_PANEL_CONTAINER" add_classes="panel-info"></container>
	</x:resources>
	<panel>
		<title>Panel 1</title>
		<content>Content 1</content>
	</panel>
	<panel>
		<title>Panel 2</title>
		<content>Content 2</content>
	</panel>
</accordion>
</lavabuild:template_result>

Here, &lt;accordion&gt; is transformed into config for Accordion widget and x:resources directive is applied to that widget.

##Control attributes

These control attributes are allowed on sugar tags:
- `label` - sets {@link _cView#label}
- `roles` - sets {@link _cView#roles}
- `resource_id` - sets - sets {@link _cWidget#resource_id} (see {@link reference:Resources})

Example: a panel from accordion's template
```xml
<collapsible-panel x:roles="$accordion.panel" x:resource_id="$accordion.panel">
	<x:assign name="is_expanded">panel.is_expanded</x:assign>
	<title> ... </title>
	<content> ... </content>
</collapsible-panel>
```

##Sugar definition

Sugar schema has type ({@link _cSugar}) and is defined by &lt;sugar&gt; tag.

If you don't specify {@link _cSugar#content_schema} - than content is not allowed inside sugar tag.
Otherwise, the rules for parsing the content are defined by the `type` attribute.

##Content types

###include

Content of sugar tag becomes widget's include.
Example: widget, that wraps it's content in a &lt;div&gt; tag.

Widget's sugar tag is defined with `tag_name: 'wrapper'`. You can also define attributes on the root 
&lt;wrapper&gt; widget with `attribute_mappings` option.

<lavabuild:codeblocks>
	<codeblock lang="xml" title="Example widget definition">
<x:define title="Wrapper" controller="Standard">
	<template>
		<div>
			{>$wrapper.content}
		</div>
	</template>
	<script x:equiv="sugar" type="application/json">
		{
			tag_name: 'wrapper',
			content_schema: {type: 'include', name: 'content'},
			attribute_mappings: {
				'is-expanded': {type: 'property', type_name: 'Boolean', name: 'is_expanded'}
			}
		}
	</script>
</x:define>
	</codeblock>
	<codeblock lang="xml" title="Example usage">
<wrapper is-expanded="true">
	Hello world!
</wrapper>
	</codeblock>
	<codeblock lang="javascript" title="Result">
[{
	type: "widget",
	"class": "Lava.WidgetConfigExtensionGateway",
	extender_type: "Standard",
	"extends": "Wrapper",
	includes: {
		content: ["\n\tHello world!\n"]
	},
	properties: {is_expanded: true}
}]
	</codeblock>
</lavabuild:codeblocks>

The above example defined `content_schema` with `type: 'include'` - that means that content of &lt;wrapper&gt; tag
will become widget's include named `name: 'content'`. That include is than used in the main widget's template as
`{:L:}>$wrapper.content}`.

`type_name` in the attribute descriptor contains a type name from {@link Firestorm.Types}. Also, note how attribute key
differs from property name: `'is-expanded'` is name of the attribute on &lt;wrapper&gt; tag, while `name: 'is_expanded'`
defines the name of widget's property for storing the attribute value.

###storage

When content type is <str>"storage"</str> - content of sugar tag is parsed just like &lt;storage&gt; tag in widget definition,
and result is put into widget's {@link _cWidget#storage}.

See {@link reference:Storage}.

Example sugar definition:

```xml
<script x:equiv="sugar" type="application/json">
	{
		tag_name: 'accordion',
		content_schema: {
			type: 'storage'
		}
	}
</script>
```

Note, that this is not real sugar of standard Accordion widget (it's real type is <str>"union"</str>),
but this sugar <i>may</i> be used for more simple version of accordion.

###union

Union is same as storage, but allows you to define additional tags, which will become widget's includes.
For example, we can define sugar for Accordion widget, which will allow to replace it's main template 
and to define panels at the same time:

```xml
<script x:equiv="storage_schema" type="application/json">
	{
		panels: {
			type: 'object_collection',
			tag_name: 'panel',
			properties: {
				title: {type: 'template'},
				content: {type: 'template'},
				is_expanded: {type: 'known_type', type_name: 'Boolean', is_attribute: true}
			}
		}
	}
</script>
<script x:equiv="sugar" type="application/json">
	{
		tag_name: 'accordion',
		content_schema: {
			type: 'union',
			tag_roles: {
				content: {type: 'include'}
			}
		}
	}
</script>
```

Usage examples:

```xml
<accordion>
	<content> ... </content>
</accordion>

<accordion>
	<panels>
		<panel>
			<title>Test panel 1</title>
			<content>Test content 1</content>
		</panel>
		<panel>
			<title>Test panel 2</title>
			<content>Test content 2</content>
		</panel>
	</panels>
</accordion>
```

Note: standard Accordion widget has "storage_object" sugar type, not "union".

###storage_object

Parses content as one object from widget storage. See Tabs widget for live example.

<lavabuild:codeblocks>
	<codeblock lang="xml" title="Example sugar config">
<script x:equiv="storage_schema" type="application/json">
	{
		tabs: {
			type: 'object_collection',
			tag_name: 'tab',
			properties: {/* ... */}
		}
	}
</script>
<script x:equiv="sugar" type="application/json">
	{
		tag_name: 'tabs',
		content_schema: {
			type: 'storage_object',
			name: 'tabs'
		}
	}
</script>
	</codeblock>
	<codeblock lang="xml" title="Example usage">
<tabs>
	<tab name="tab1">
		<title>Tab 1</title>
		<content>Tab 1 content</content>
	</tab>
	<tab name="tab2">
		<title>Tab 2</title>
		<content>Tab 2 content</content>
	</tab>
</tabs>
	</codeblock>
</lavabuild:codeblocks>

##Root attribute types

Root sugar tag may have attributes, which are converted to widget config properties. 
Root attributes are described in `attribute_mappings` config property. Keys in `attribute_mappings` correspond to names 
of properties on root tag, while `name` in descriptor corresponds to a name in object.
For example:

```xml
<script x:equiv="sugar" type="application/json">
	{
		tag_name: 'panel',
		content_schema: {type: 'include', name: 'content'},
		attribute_mappings: {
			'is-expanded': {type: 'property', type_name: 'Boolean', name: 'is_expanded'}
		}
		// root_resource_name: 'MAIN_CONTAINER'
	}
</script>
```

Types of root attributes:

- <str>"expressions_option"</str> - parse attribute value as semicolon-separated expressions and store it into an option
- <str>"targets_option"</str> - parse attribute as {@link Lava.parsers.Common#parseEventHandlers|targets} and store it as an option
- <str>"property"</str> - parse attribute as `type_name` and store it as widget's property value
- <str>"switch"</str> - attribute value is parsed as Boolean, but empty attributes are evaluated to <kw>true</kw>
- <str>"option"</str> - parse attribute as `type_name` and store it as widget's option
- <str>"id"</str> - attribute becomes widget's {@link _cView#id}. Note, that this is not the id attribute of widget's element.

Unknown root attributes, which are not described in {@link _cSugar#attribute_mappings} - 
may be stored as widget's container resource. 
For this you must specify {@link _cSugar#root_resource_name} on root sugar object.
For live examples - see system input widgets in <var>templates/</var> folder.
