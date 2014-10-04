
#x:default_events directive

Define {@link _cWidget#default_events} for a widget. May be useful, when you are defining a widget in the &lt;body&gt;
element, or a new template in widget's sugar.

###Example

```xml
<body lava-app="ChangelogPage">
	<x:default_events>['click']</x:default_events>
	...
</body>
```