
#x:default_events directive

<script type="lavabuild/eval">result = global.LavaBuild.generateDirectiveInfoBox('default_events');</script>

Define {@link _cWidget#default_events} for a widget. May be useful, when you are defining a widget in the &lt;body&gt;
element, or a new template in widget's sugar.

##Example

```xml
<body lava-app="ChangelogPage">
	<x:default_events>['click']</x:default_events>
	...
</body>
```

##Explanation

All template events are routed by ViewManager - in it's constructor it enables routing of all events from 
{@link Lava.schema#system.DEFAULT_EVENTS}. So, if you have `x:event:mouseenter` in your template, and "mouseenter"
event is not routed by ViewManager - then your widget will not receive this event.

To enable permanent routing of "mouseenter" in your application - you can add it to DEFAULT_EVENTS before call 
to `Lava.init`:

```javascript
// "mouse_events" includes 'mouseenter', 'mouseleave', 'mouseover' and 'mouseout'
Firestorm.Array.include(Lava.schema.system.DEFAULT_EVENTS, 'mouse_events');
```

Mouse events are expensive, especially "mousemove", so you should not enable them permanently.
Widget can temporary enable template event routing by call to {@link Lava.system.ViewManager#lendEvent},
followed by call to `releaseEvent` when you don't need it anymore. If your widget uses mouse events - 
then it's a good practice to enable them only when you need them (for example, in `broadcastInDOM`).

Note: if you need "mousemove" event - it is better to receive it directly from {@link Lava.DOMEvents},
than route it via templates. See the "Draggable" example.

##Default events

All events, that your widget permanently routes in templates (via x:event attributes) -
should be listed via x:default_events directive (it's impossible to construct this list automatically). 
Widget does <b>not</b> automatically enable routing of those events,
but instead it checks if they are enabled in {@link Lava.widget.Standard#init}, and throws exception if they are not.

These lists can be also used by various build scripts: for example, server-side Lava build scripts use this setting 
to check if {@link Lava.schema#system.DEFAULT_EVENTS} contains every event, used by native framework widgets.
This list also may be helpful when you distribute your widgets to other developers, so it's highly recommended
to always define default_events for your global or reusable widgets, even if all their events are already in schema.

Notes: 
- if you are changing this in inherited widget - then new value overwrites the old one 
(they are not merged during config extension).
- widget checks if events are routed only when DEBUG switch is enabled.
