<lavabuild:title>Directives overview</lavabuild:title>

# Directives

Directives are tags from "x" namespace, like &lt;x:define&gt;.

In Lava framework, templates are not compiled into JavaScript functions,
but instead {@link Lava.TemplateParser#parse} produces configs for classes from "Lava.view" namespace.
Directives provide syntax for modifying view and widget configs.

<script type="lavabuild/eval">
	var directives = global.Lava.parsers.Directives._directives_schema;
	var result = '';
	var widget_only_directives = global.WIDGET_ONLY_DIRECTIVES;
	var directive_names = global.DIRECTIVE_NAMES;
	var directives_with_result = global.DIRECTIVES_WITH_RESULT;
	for (var name in directives) {
		if (directive_names.indexOf(name) == -1) throw new Error('inline code in markdown: unknown directive name');
	}
	directive_names.forEach(function(name){
		var schema = directives[name];
		var view_config_presence = ('view_config_presence' in schema) ? (schema.view_config_presence ? 'Yes' : 'Outside') : '';
		result += '<tr><td>{@link reference:Directives.' + name + '}</td><td>' + ((directives_with_result.indexOf(name) != -1) ? 'Yes' : '') + '</td><td>'
			+ view_config_presence + '</td><td>' + ((widget_only_directives.indexOf(name) != -1) ? 'Yes' : '') + '</td></tr>';
	});
	result = '<table class="api-member-table"><thead><tr><td>Directive</td><td>Result</td><td>Is view directive</td><td>Widget only</td></tr></thead><tbody>'
		+ result + '</tbody></table>';
</script>

##View directives

Directives that modify view's configs are forced to appear on the top of their parent view,
before any other template content.
This is done to maintain good codestyle among LiquidLava developers. For example:

```xml
{#view()}
	<x:option name="test_option">"option_value"</x:option>
	This is content
{/view}
```

You cannot move &lt;x:option&gt; directive after any text inside the view - otherwise you will get an exception.
Also, you cannot insert any directive, that produces result before it, like &lt;x:widget&gt;.

Special cases: x:define and x:define_resources directives must be outside of view or widget configs.
You must always put them at the root of your templates.

##Directive results

Most directives does not yield a result, instead they modify configs of their widgets. Some special directives,
like x:define and x:define_resource - modify global data from Lava.widgets property. And some of them, like x:widget -
return template items (in this case - a widget config).

All directives that can be applied to views (except x:refresher) - can also be applied to widgets.

##Architecture

{@link Lava.parsers.Directives#processDirective} is the method you can manually call to apply directives to a view's config
and get their results.