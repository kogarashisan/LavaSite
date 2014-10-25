
#x:roles directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('roles');</script>

Directive sets {@link _cView#roles} for view or widget config.

Note: there must be no empty space

###Example

<lavabuild:template_result as="single_view">
{#view()}
	<x:roles>
		$widget_one.role_one("example_argument");#widget_two.role_two
	</x:roles>
{/view}
</lavabuild:template_result>

You can set roles for a global widget in x:define (via &lt;roles&gt; tag),
but it's recommended to move them to inline widget definition.