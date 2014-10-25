
#x:property directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('property');</script>

Allows to set one property in {@link _cWidget#properties}. Same as &lt;option&gt;.

###Example

<lavabuild:template_result as="single_view">
<checkbox>
	<x:property name="is_indeterminate">true</x:property>
</checkbox>
</lavabuild:template_result>

You can have both x:property and x:properties directives at the same time.