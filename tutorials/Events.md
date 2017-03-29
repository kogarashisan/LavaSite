
#Receiving DOM events

Lava framework delegates events: you only need to specify which events you want to delegate,
and which widgets should receive them.

Let's define a widget with event handler:

```javascript
Lava.define(
'Lava.widget.HelloApp',
{
	Extends: 'Lava.widget.Standard',

	_properties: {
		count_clicked: 0
	},

	_event_handlers: {
		button_click: '_onButtonClick'
	},

	_onButtonClick: function(dom_event_name, event_object, view, template_arguments) {

		this.set("count_clicked", this._properties.count_clicked + 1);

	}
});
```

`button_click` from `_event_handlers` is the actual event name - that's how you will reference your event in templates.
`_onButtonClick` is name of the event handler. Notice, that we can get `count_clicked` variable directly, but we assign it
using `set` method - it generates "changed" events for the template. <b>You should never set widget properties directly,
otherwise your templates will not be able to update themselves.</b>

Let's use this handler in template:

```xml
<body lava-app="HelloApp">
	<div x:type="view" x:event:click="button_click">
		I was clicked {#> count_clicked} times
	</div>
</body>
```

Only containers can delegate events, so the element is transformed into a {@link Lava.view.View} 
with {@link Lava.view.container.Element} container - this is done with `x:type="view"` attribute.

Final result:
<iframe style="height: 26em; width: 100%" src="http://embed.plnkr.co/HgppDj/preview"></iframe>
<i><a href="/www/demos/tutorials/Events.html">Alternative link</a></i>

##Event dispatch algorithm

When you click on the &lt;div&gt; element from the above example - framework discovers that it belongs to a container,
and that it has event delegation: DOM `click` event should be delegated to `button_click` widget handler.

Event is dispatched from the view, which owns the container. 
Framework dispatches `button_click` to <b>all</b> parent widgets of that view. If they have `button_click` handler in 
their `_event_handlers` property - then corresponding callback will be executed.

View from above example has one parent, which receives the event - the HelloApp instance.

##Targeted events

When you create a bubbling property reference - it binds to the first view, that has it.
Unlike property references, bubbling events are dispatched to all parent widgets of the container.

Events can be targeted just like property references:

```xml
<div x:type="view" x:event:click="$widget.button_click"> ... </div>
<div x:type="container" x:event:click="#hello_app.button_click"> ... </div>
```

`$widget.button_click` will target parent widget with name <str>"widget"</str>, 
and `#hello_app` will target widget with <str>"hello_app"</str> id.
<b>You should always prefer targeted events over bubbling.</b>

##Event arguments

Naturally, events can be passed arguments. Here is an example of clickable list:

<lavabuild:codeblocks>
	<codeblock title="Script" lang="javascript">
Lava.define(
'Lava.widget.HelloApp',
{
	Extends: 'Lava.widget.Standard',
	name: "hello_app",

	_properties: {
		selected_person: null,
		people: [
			{title: "Steve Jobs", birth_year: 1955},
			{title: "Bill Gates", birth_year: 1955},
			{title: "Linus Torvalds", birth_year: 1969}
		]
	},

	_event_handlers: {
		item_click: '_onItemClick'
	},

	_onItemClick: function(dom_event_name, event_object, view, template_arguments) {

		// template_arguments[0] is the first argument, which was passed to event
		this.set("selected_person", template_arguments[0]);

	}
});
	</codeblock>
	<codeblock title="Template" lang="xml">
{#foreach($hello_app.people) as=person}
	<div x:type="container" 
		x:style:background="(person == $hello_app.selected_person) ? 'yellow' : null"
		x:event:click="$hello_app.item_click(person)">
		{#> person.title}
	</div>
{/foreach}
<div x:type="view">
Selected person: {#> $hello_app.selected_person.title}<br/>
Birth year: {#> $hello_app.selected_person.birth_year}
</div>
	</codeblock>
</lavabuild:codeblocks>

Foreach view sets "person" property to views inside it. It's used in the click event: `$hello_app.item_click(person)`.
All arguments that you pass to event handlers are available as `template_arguments` array.

Arguments are evaluated at the moment when event is dispatched, no bindings for them are created.

Final result:
<iframe style="height: 26em; width: 100%" src="http://embed.plnkr.co/vHBnGR/preview"></iframe>
<i><a href="/www/demos/tutorials/Events2.html">Alternative link</a></i>