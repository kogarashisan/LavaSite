
#Includes

Include is a named template from widget.

You should not treat include as a function call, but rather as "copy-paste" of another template in the place of include.
In other frameworks, where templates are compiled to functions, you can pass parameters to includes.
Here include is using the environment, where it was created.

Example include definition and usage:

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<template>
		{include> $widget.header}
		This is content
		{include> $widget.footer}
	</template>
	<include name="header">
		This is header
	</include>
	<include name="footer">
		This is footer
	</include>
</x:widget>
</lavabuild:template_result>

Syntax for using includes:

```text
{include> target}
```

Include target is parsed by {@link Lava.parsers.Common#parseEventHandlers} and has same format as event or role target.
Includes are processed in {@link Lava.system.Template} in constructor.

Like events, includes can be bubbling. Bubbling include is served by the first widget that has it.
You should prefer targeted includes over bubbling.

##Include arguments

You can define a custom method for serving an include - this means that you can dynamically return include templates,
depending on situation. You define `_include_handlers`, just like role or event handlers. 
Handler receives arguments from template:

<lavabuild:codeblocks>
	<codeblock title="Controller" lang="javascript">
Lava.define(
'Lava.widget.MyWidget',
{
	Extends: 'Lava.widget.Standard',
	name: "my_widget",

	_include_handlers: {
		my_include: '_handleMyInclude'
	},

	_handleMyInclude: function(template_arguments) {

		var item = template_arguments[0];
		return (item.type == 'number') ? ['item is number'] : ['item is not number'];

	}
});
	</codeblock>
	<codeblock title="Template" lang="xml">
{include> $my_widget.my_include(item)}
	</codeblock>
</lavabuild:codeblocks>

You should not treat include arguments as something that will be available to template inside the include.
Include arguments are passed to class method, that serves the include.

If widget has custom handler for "my_include" - then it has priority over include from widget config, 
see {@link Lava.widget.Standard#getInclude} source for better understanding.

Real-life usage example: see the {@link Lava.widget.Table} widget controller - it serves different cell templates 
for each type of table column.

##Include inheritance

When include is overwritten in inherited widget - parent include is renamed, and you can still access it.
This happens in the process of config extension.

<lavabuild:template_result as="single_view">
<x:widget extends="Tree">
	<include name="node_body_content">
		{include> $tree.Tree$node_body_content}
		<checkbox style="float: right">
			<x:assign name="is_checked">node.is_checked</x:assign>
			<x:assign name="is_indeterminate">node.is_indeterminate</x:assign>
		</checkbox>
	</include>
</x:widget>
</lavabuild:template_result>

When parent includes are renamed - name of the parent widget and dollar-sign are added to them, so in this case
parent's <str>"node_body_content"</str> include will be renamed to <str>"Tree$node_body_content"</str>.

Renamed parent includes are added to {@link _cWidget#includes} of inherited widget, 
so in controller you can access them just like widget's own:

```javascript
var parent_include = this._config["Tree$node_body_content"];
```