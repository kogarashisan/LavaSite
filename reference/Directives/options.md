
#x:options directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('options');</script>

Set {_cView#options} on a view or widget config. Same as &lt;options&gt; tag in widget definition, but may be applied
to views and sugar.

Content of the directive must be a valid JavaScript object.

###Example 1

<lavabuild:template_result as="single_view">
{#view()}
	<x:options>
		{
			option1: 'value1',
			option2: 'value2'
		}
	</x:options>
{/view}
</lavabuild:template_result>

###Example 2: using a &lt;script&gt; tag

```xml
{#view()}
	<script type="application/json" x:equiv="x:options">
		{
			option1: 'value1',
			option2: 'value2'
		}
	</script>
{/view}
```

This form allows you to take advantage of IDE syntax highlighting inside the &lt;script&gt; tag.

Note: these examples are artificial, {@link Lava.view.View} class does not have any options.

You can have both x:option and x:options directives at the same time.