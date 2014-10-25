
#x:widget directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('widget');</script>

Define an inline widget. Returns parsed widget config.

Allowed directive attributes:
- `extends` - name of a global widget in {@link Lava#widgets}, which this one extends
- `controller` - name of a class, inherited from {@link Lava.widget.Standard}. May be "Standard".
If there is no parent widget, or if parent widget does not define a controller - than this attribute is required.
- `label` - set {@link _cView#label}
- `id` - set {@link _cView#id}
- `resource_id` - see reference on resources

Directive may contain only tags, not another directives.

##Setting container and template

On the top of widget definition, there may be either &lt;main_view&gt; or &lt;main_template&gt; tag.
They both set main {@link _cView#template} of the widget, but with &lt;main_view&gt; tag you can also set widget's container.
Example &lt;main_template&gt; usage:

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<main_template>
		This is widget's template
	</main_template>
</x:widget>
</lavabuild:template_result>

Using &lt;main_view&gt;:

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<main_view>
		<div x:type="view" class="my-widget-container">
			This is widget's template
		</div>
	</main_view>
</x:widget>
</lavabuild:template_result>

How &lt;main_view&gt; tag works: it expects an element with `x:type="view"` inside it.
The only allowed properties on inner view config are {@link _cView#container} and {@link _cView#template}.
If you want to set roles, assigns, or anything else - you must use tags from x:widget.
Inner view is extracted, and "container" and "template" properties are then copied to widget config.

##Allowed tags inside x:widget

Tags with directive analogs:

<script type="lavabuild/eval">
	var result = '';
	var tag_actions = global.Lava.parsers.Directives._widget_tag_actions;
	var with_directive_analogs = global.WIDGET_TAGS_WITH_DIRECTIVE_ANALOGS;
	var without_directive_analogs = global.WIDGET_TAGS_WITHOUT_DIRECTIVE_ANALOGS;
	for (var name in tag_actions) {
		if (with_directive_analogs.indexOf(name) == -1 && without_directive_analogs.indexOf(name) == -1)
			throw new Error('tag action is not described in documentation: ' + name);
	}
	with_directive_analogs.forEach(function(name){
		result += '<tr><td>{@link reference:Directives.' + name + '}</td></tr>';
	});
	result = '<table class="api-member-table doc-directive-quick-facts"><thead><tr><td>Tag</td></tr></thead><tbody>'
		+ result + '</tbody></table>';
</script>

For their description see corresponding directive. Note, that inside x:widget directive - they must be tags (without the "x:" prefix).
Example:

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<options>{test_option: true}</options>
</x:widget>
</lavabuild:template_result>

Tags without directive analogs are described separately. They include:

<script type="lavabuild/eval">
	var result = '';
	var descriptions = {
		sugar: 'See {@link reference:Sugar}',
		storage: 'See {@link reference:Storage}',
		storage_schema: 'See {@link reference:Storage}',
		edit_template: '{@todo link to edit_template article}',
		include: '{@todo link to article about includes}'
	};
	global.WIDGET_TAGS_WITHOUT_DIRECTIVE_ANALOGS.forEach(function(name){
		if (!(name in descriptions)) throw new Error("tag is not described in build/eval: " + name);
		result += '<tr><td>' + name + '</td><td>' + descriptions[name] + '</td></tr>';
	});
	result = '<table class="api-member-table doc-directive-quick-facts"><thead><tr><td>Tag</td><td>Description</td></tr></thead><tbody>'
		+ result + '</tbody></table>';
</script>