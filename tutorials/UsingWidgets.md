<lavabuild:title>Using widgets</lavabuild:title>

#Using widgets

Framework comes with some commonly used widgets, like Tabs, Accordion or various input fields.
There are two ways to insert a widget into template: standard (full) syntax, and "syntax sugar",
which looks like common HTML tags:

<lavabuild:template_result as="single_view">
<collapsible-panel class="panel-default">
	<title>The title</title>
	<content>The content</content>
</collapsible-panel>
</lavabuild:template_result>

Sugar syntax is created by widget's author: he decides, that &lt;collapsible-panel&gt; tag
should be transformed into config for CollapsiblePanel widget, and content of the &lt;title&gt; and
&lt;content&gt; tags inside it should be parsed as "title" and "content" includes for the widget.
These mappings and the name of the sugar tag are written in the definition of CollapsiblePanel widget.

In other words: you can define tags for template parser, which will be converted to widget configs.

Sugar exists to make your templates look more beautiful, but not all widgets have sugar syntax 
(and not all widgets need it). See the {@link page:widgets} page for a list of all widgets and their sugar schema.

##Common view attributes

Any view and widget can have `label` and `id`. IDs are unique:

```xml
<div x:type="view" id="test"></div>
<!-- but -->
<div id="this_is_static"></div>
```

When you inspect rendered page in browser - you will see that your custom `id="test"` attribute has gone -
instead you will see auto-generated id on the first &lt;div&gt; tag.
ID attribute is handled separately by parser: when framework encounters it on a view's container, 
or on a sugar tag - it moves it into the config of the view that owns it.
But `id="this_is_static"` will be still present, cause the &lt;div&gt; tag, which owns it is plain text.

You can get views by their id from {@link Lava.system.ViewManager} (view instance must be created!):

```javascript
var view = Lava.view_manager.getViewById("test");
view.set('message', 'Hello world');
```

IDs can also be used to reference views in expressions: `#hello_app.your_name` will bind to `your_name` property
in view with id `hello_app`. When you bind to a view by ID - it does not need to be parent of view, that owns the expression:
it can be anywhere on page, or even not in DOM.

##Exercise

Panel widget has it's own controller - {@link Lava.widget.CollapsiblePanel}, which has it's own variables 
like "is_locked" and "is_expanded". Naturally, you can manipulate them or reference in templates.
As an exercise, create a page with the following template:

```xml
<collapsible-panel id="panel" class="panel-default">
	<title>Panel is {#> is_expanded ? 'expanded' : 'collapsed'}</title>
	<content>Test</content>
</collapsible-panel>
```

And try to expand or collapse the panel from console:

```javascript
var panel = Lava.view_manager.getViewById("panel");
panel.set('is_expanded', false);
Lava.refreshViews();
```

Panel widget also reacts to mouse clicks on header.

Final example:
<iframe style="height: 26em; width: 100%" src="http://embed.plnkr.co/L2LMmi/preview"></iframe>
<i><a href="/www/demos/tutorials/UsingWidgets.html">Alternative link</a></i>

##Widget hierarchy

Now let's get basic understanding of widget hierarchy and learn how to reference widgets in expressions.
Here is an example of root widget HelloApp, which has `your_name` variable, 
and two child widgets with Expression views inside them.

<lavabuild:codeblocks>
	<codeblock title="JavaScript" lang="javascript">
Lava.define('Lava.widget.HelloApp', {
	Extends: 'Lava.widget.Standard',
	_properties: {
		your_name: 'World'
	}
});
	</codeblock>
	<codeblock title="Template" lang="xml">
<body lava-app="HelloApp">
	<collapsible-panel id="panel1" class="panel-default">
		<title>Hello example</title>
		<content>
			Hello {#> your_name}
		</content>
	</collapsible-panel>
	<collapsible-panel id="panel2" class="panel-primary">
		<title>Hello example</title>
		<content>
			Hello {#> your_name}
		</content>
	</collapsible-panel>
</body>
	</codeblock>
</lavabuild:codeblocks>

Let's discuss it's structure. First, an instance of Lava.widget.HelloApp is created,
and it receives configs for it's container and template. 
It creates {@link Lava.view.container.Element} and {@link Lava.system.Template} classes with these configs.

```javascript
// this is pseudo code. In reality it looks different!
Lava.define('Lava.widget.Standard', {
	// ...
	name: 'widget',
	_container: null,
	_template: null,
	init: function(config /*, ...*/) {
		this._container = new Lava.view.container.Element(config.container /*, ...*/);
	},
	render: function() {
		if (!this._template) {
			this._template = new Lava.system.Template(config.template /*, ...*/)
		}
		return this._container.wrap(this._template.render());
	}
	// ...
});
```

It has no idea about the panels inside it, and no idea about the Expression views inside the panels.
It has a container and a template - that's all what it knows.
Besides that, it's template is constructed with delay (when it's needed first time), so if HelloApp is created -
it does not mean that Expression views are created.

Panel widgets have their own class (controller) - {@link Lava.widget.CollapsiblePanel}.
They also have their own views and HTML markup inside their definition.
And they also know nothing about Expression views inside them.

But all views know their parent template and parent view. This way Expression views can access the panel widgets,
and the root HelloApp widget.

##Property bindings

Both Expression views from previous example bind to the same property - `your_name`. 
This form of reference is called "bubbling", cause it does not specify the view, which owns that property.

How it works: when the Expression view is created - it looks at it's own properties for `your_name` property,
and does not find it. Then it looks for it in it's parent view (it will be an element with `x:type="view"` from
widget definition). Then in next parent, which also does not have it; and finally it will find it in the root HelloApp widget.
Framework always searches for bubbling property references up in widget hierarchy.
Note, that if you referenced some nonexistent property - you would get an error.

When property is found - a special "binding" class is created to that property ({@link Lava.scope.PropertyBinding}).
It watches for changes of `your_name`, and notifies the Expression views. In this case, both Expression views
will use the same binding to HelloApp widget instance.

Even if later you retrieve your panel widgets, and assign `your_name` property to them - 
created bindings will not change, Expression views will still be bound to HelloApp widget.

```javascript
var panel_widget = Lava.view_manager.getViewById("panel1");
panel_widget.set('your_name', 'Jack'); // this will not change the expression value
```

##Widget names

Each widget class has {@link Lava.widget.Standard#name} class member. {@link Lava.widget.Standard} has default 
name - <str>"widget"</str>. {@link Lava.widget.CollapsiblePanel#name} is <str>"collapsible_panel"</str>. 
<b>When you write your own widget classes - you should give them unique names.</b>

Widgets can be referenced by their names in expressions:

```text
{#> $collapsible_panel.your_name}
```

This means: find the first parent widget with name <str>"collapsible_panel"</str> and bind to `your_name` property in it.
Does not matter, if `your_name` property exists on panel or not - binding will be created to the first widget that matches the selector.

```xml
<body lava-app="HelloApp">
	<collapsible-panel id="panel1" class="panel-default">
		<title>Hello example</title>
		<content>
			Hello {#> $collapsible_panel.your_name}
		</content>
	</collapsible-panel>
	<collapsible-panel id="panel2" class="panel-primary">
		<title>Hello example</title>
		<content>
			Hello {#> #panel2.your_name} <!-- bind by id -->
		</content>
	</collapsible-panel>
</body>
```

In this example both expression views take `your_name` from their corresponding panels.
You can assign this property from console:

```javascript
var panel_widget = Lava.view_manager.getViewById("panel1");
panel_widget.set('your_name', 'Jack');
Lava.refreshViews();
```

Final result:
<iframe style="height: 26em; width: 100%" src="http://embed.plnkr.co/MO4CAV/index.html"></iframe>
<i><a href="/www/demos/tutorials/UsingWidgets2.html">Alternative link</a></i>

##Usage recommendation

<b>You should prefer targeted references over bubbling.</b> Targeted references are a bit faster, and less prone to human errors.
Use bubbling references only when you are unable to specify exact target (for example, when rendering a tree).

Use IDs for global widgets, which you can not access directly. If you can reference your widgets by name, 
or use a bubbling reference - then do not create an ID. <b>You should use IDs and labels only when you really need them.</b>

<i>Labels were not covered in this tutorial, but they function like names, except they are defined in templates, not in classes.</i>