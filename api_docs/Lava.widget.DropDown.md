
DropDown widget allows you to define an element which can be clicked ("trigger"), 
and an element to which it will add a CSS class ("target"), when trigger is clicked.
Both elements are defined by roles, this makes the widget very flexible.

This widget does not have any templates, just options. Example usage:

```xml
<li x:widget="DropDown">
	<a x:type="view" x:roles="$dropdown.trigger">
		Click me
	</a>
	<ul>
		Hello World!
	</ul>
</li>
```

By default, it's container becomes it's "target", but you can supply your own target with `$dropdown.target` role.
Name of CSS class is controlled by `target_class` option ("open" by default).

Widget uses global {@link Lava.system.App} event "close_popups" to close other DropDown instances when trigger is clicked.