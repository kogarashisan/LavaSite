
#x:default_events directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('default_events');</script>

Define {@link _cWidget#default_events} for a widget. May be useful, when you are defining a widget in the &lt;body&gt;
element, or a new template in widget's sugar.

Keep in mind:
- if you are changing this in inherited widget - then new value overwrites the old one (they are not merged)
- the only use for this list at run time - is to debug-check if they are enabled. 
You must manually add missing events to {@link Lava.schema#system.DEFAULT_EVENTS} before `Lava.init()`.

Server-side Lava build scripts use this setting to check if {@link Lava.schema#system.DEFAULT_EVENTS} contains every event 
used by native framework widgets.

It's highly recommended to always define &lt;default_events&gt; for your own global widgets, 
even if their events are already in schema.

##Example

```xml
<body lava-app="ChangelogPage">
	<x:default_events>['click']</x:default_events>
	...
</body>
```