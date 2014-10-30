
#x:static_value directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('static_value');</script>

Insert a resource value by it's resource_id. Result is evaluated at the moment of {@link Lava.system.Template} creation.
Allowed value types: string, number and boolean.

<lavabuild:template_result>
<x:static_value resource_id="$widget.RESOURCE_NAME"></x:static_value>
</lavabuild:template_result>