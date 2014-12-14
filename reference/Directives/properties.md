
#x:properties directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('properties');</script>

Allows to set {@link _cWidget#properties}. Same as &lt;options&gt;.

##Example

<lavabuild:template_result as="single_view">
<checkbox>
	<x:properties>
		{
			is_checked: false,
			is_indeterminate: true
		}
	</x:properties>
</checkbox>
</lavabuild:template_result>

You can have both x:property and x:properties directives at the same time.