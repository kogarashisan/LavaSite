
#x:refresher directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('refresher');</script>

Directive sets {@link _cView#refresher} config property for views and widgets.

Content of the directive must be a valid JavaScript object.

###Example

<lavabuild:template_result as="single_view">
{$if(is_expanded)}
	<x:refresher>{type: 'Standard'}</x:refresher>
	<x:container_config>
		{
			type: "Emulated",
			options: {
				appender: 'AfterPrevious'
			}
		}
	</x:container_config>
	<div x:type="view"></div>
{/if}
</lavabuild:template_result>