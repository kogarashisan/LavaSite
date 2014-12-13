
#x:define directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('define');</script>

Define a global widget. Parse widget config and store it in {@link Lava#widgets}.
If widget has sugar, than also create a reference to the widget in {@link Lava#sugar_map}.
See also: {@link Lava#storeWidgetSchema}.

This directive has similar structure to {@link reference:Directives.widget|x:widget},
except it must have the `title` attribute, which defines the name of the widget in {@link Lava#widgets}.
Global widgets may extend other global widgets. See {@link reference:Directives.widget|x:widget} for more.

x:define directive should be at the top of template, and must not be nested.
`resource_id` attribute is forbidden.

```xml
<x:define title="HelloWidget" controller="Standard">
	<template>
		Hello world!
	</template>
</x:define>
```

