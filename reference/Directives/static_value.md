
#x:static_value directive

Insert a resource value by it's resource_id. Result is evaluated at the moment of {@link Lava.system.Template} creation.

Allowed resource types: 'string', 'number', 'boolean' and 'translate'.

<lavabuild:template_result>
<x:static_value resource_id="$widget.RESOURCE_NAME"></x:static_value>
</lavabuild:template_result>