
#x:define_resources tag

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('define_resources');</script>

Define an object with localized data. See resources reference for more information.

The example below expects that there is a widget HelloWidget defined. It will put the object with resources
into `Lava.widgets['HelloWidget'].resources['en']`.

```xml
<x:define_resources for="HelloWidget" locale="en">
	<translate path="HELLO_STRING">
		Hello world!
	</translate>
</x:define_resources>
```

Note, that you can not attach resources to a widget config, that was already extended.

Internally, directive calls {@link Lava.resources#addWidgetResource}