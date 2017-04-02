
#x:option directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('option');</script>

Define an option on a view or widget config. Same as &lt;option&gt; tag in widget definition, but may be applied
to views and sugar.

Content of the directive is expected to be any JavaScript type, like strings, objects, arrays or literals.

Directive may have an optional `type` attribute:
- <str>"targets"</str> - option value is parsed with {@link Lava.parsers.Common#parseEventHandlers}
- <str>"expressions"</str> - option value is parsed with ExpressionParser

##Example

<lavabuild:template_result as="single_view">
{#view()}
	<x:option name="test_option">"option_value"</x:option>
	<x:option type="targets" name="test_targets_option">
		$test_target.test_callback("test_argument")
	</x:option>
	<x:option type="expressions" name="test_expression_option">
		var_name + 1
	</x:option>
{/view}
</lavabuild:template_result>

Note: this is an artificial example, {@link Lava.view.View} class does not have any options.

You can have both x:option and x:options directives at the same time.