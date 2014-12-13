
#Roles

As you remember, you can not access child views directly. When view is created - you can access it's parents,
but you can not control the moment when views are created or destroyed. 
Roles is the way to access child views and widgets.

You may think of roles as of special events, which are dispatched when a view is created.
Roles have same format as events, and they are handled and dispatched in similar way.

<lavabuild:codeblocks>
	<codeblock title="Controller" lang="javascript">
Lava.define(
'Lava.widget.MyWidget',
{
	Extends: 'Lava.widget.Standard',
	name: "my_widget",

	_role_handlers: {
		my_panel: '_handlePanel'
	},

	_my_panel: null,

	_handlePanel: function(view, template_arguments) {

		view.set('is_expanded', false);
		view.set('title', "Hello example");
		view.set('content', "Hello World!");

		// you can also attach listeners
		// var listener = view.on('expanded', this._onPanelExpanded, this);

		this._my_panel = view;

	}
});
	</codeblock>
	<codeblock title="Template" lang="xml">
<x:widget controller="MyWidget">
	<template>
		<collapsible-panel x:roles="$my_widget.my_panel" class="panel-info"></collapsible-panel>
	</template>
</x:widget>
    </codeblock>
</lavabuild:codeblocks>

When panel inside the widget is created - it dispatches a role "my_panel" to `$my_widget`, 
which is handled by `_handlePanel`. Now you have the panel instance and you can do what you want with it:
set properties, attach listeners, or save it into local variable.

Roles can be bubbling - like events, bubbling roles are dispatched to all parent widgets.

Final result:
<iframe style="height: 26em; width: 100%" src="http://embed.plnkr.co/iEykks/preview"></iframe>
<i><a href="/www/demos/tutorials/Roles.html">Alternative link</a></i>

##Note on view collections

Sometimes you need to access views that are created dynamically, for example in Foreach loops.
These views can be created and destroyed at any moment, and naturally you must not interact with destroyed views.
In this case, you should listen to the "destroy" event. 

```javascript
var listener = view.on("destroy", this._onViewDestroyed, this);
```

When you have received this event - the view is already destroyed, and you must not call it's methods or access properties. 
All you can - remove references to destroyed view from your local collections.