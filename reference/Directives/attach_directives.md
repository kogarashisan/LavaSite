
#x:attach_directives directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('attach_directives');</script>

Allows to attach directives to a void tag.

###Example

<lavabuild:template_result as="single_view">
<x:attach_directives>
	<img x:type="view" />
	<x:roles>#page.logo</x:roles>
</x:attach_directives>
</lavabuild:template_result>

