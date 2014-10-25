
#x:container_config directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('container_config');</script>

For views and widgets: directive extends {@link _cView#container} config property with provided options.

Content of the directive must be a valid JavaScript object. <b>Only 'class' and 'options' properties are allowed.</b>
'options' property is merged with existing one.

###Example

<lavabuild:template_result as="single_view">
{$if(is_expanded)}
	<x:refresher>{class: 'Standard'}</x:refresher>
	<x:container_config>
		{
			class: "Emulated",
			options: {
				appender: 'AfterPrevious'
			}
		}
	</x:container_config>
	<div x:type="view"></div>
{/if}
</lavabuild:template_result>

Using with element containers:

<lavabuild:template_result as="single_view">
<div x:type="container">
	<x:container_config>{class: "MyElementContainer"}</x:container_config>
	{#> "Hello world" }
</div>
</lavabuild:template_result>

##Architecture

Usage with element containers is handled separately in {@link Lava.parsers.Common#_compileContainer}.