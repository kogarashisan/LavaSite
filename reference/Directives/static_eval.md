
#x:static_eval directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('static_eval');</script>

Define an argument, that will be evaluated once (at the moment of {@link Lava.system.Template} creation),
and inserted into the template as a string.
It's faster that using Expression view, but such string will not refresh it's value, when dependencies change. Use with care.

##Example

<lavabuild:template_result>
<x:static_eval>
	ucFirst('liquidLava') + " is the best framework... ever!"
</x:static_eval>
</lavabuild:template_result>