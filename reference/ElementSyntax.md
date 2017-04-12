<lavabuild:title>Element syntax</lavabuild:title>

#Element syntax for view containers

Attributes from "x:" namespace are called "control attributes" - they allow you to define Element containers for views,
and also bind their styles and properties.

Every HTML element with control attributes must have either x:widget or x:type attribute defined.
Element with `x:type="view"` creates a view with the {@link Lava.view.View} class and an {@link Lava.view.container.Element} container.

Example: define a view with &lt;div&gt; container
<lavabuild:template_result as="single_view">
<div x:type="view">
	...
</div>
</lavabuild:template_result>

##Binding properties

You can bind element's properties with the following syntax:

```text
x:bind:property_name="&lt;expression&gt;"
```

Example:

<lavabuild:template_result as="single_view">
<img x:type="view" x:bind:src="$widget.image_src">
</lavabuild:template_result>

##Binding styles

```text
x:style:style_name="&lt;expression&gt;"
```

<lavabuild:template_result as="single_view">
<div x:type="view" x:style:width="$widget.rectangle_width" x:style:height="$widget.rectangle_height">
	...
</div>
</lavabuild:template_result>

##Binding classes

```text
x:class="&lt;expressions&gt;"
```

<lavabuild:template_result as="single_view">
<div x:type="view" x:classes="$widget.is_active ? 'active' : ''; #app.additional_classes">
	...
</div>
</lavabuild:template_result>

You can write several expressions, separated by semicolon.

##Delegating events

Syntax:

```text
x:dom-event:event_name="&lt;targets&gt;"
```

Example:

<lavabuild:template_result as="single_view">
<div x:type="view" x:dom-event:click="$widget.myButtonClick(1,'test'); #app.myButtonClick">
	...
</div>
</lavabuild:template_result>

Note, that you can delegate one event to multiple targets.

##Custom container class

By default, all containers will have {@link Lava.view.container.Element} class,
but you can also supply a custom class for them:

```text
x:container_class="&lt;class_name&gt;"
```

<lavabuild:template_result as="single_view">
<div x:type="view" x:container_class="MyElementContainer">
	...
</div>
</lavabuild:template_result>

See also: {@link reference:Directives.container_config} directive.

##Setting view options

You can pass string options to the view. May be usable for your own view classes.

```text
x:options:option_name="&lt;string&gt;"
```

<lavabuild:template_result as="single_view">
<div x:type="view" x:options:option_one="value 1" x:options:option_two="value 2">
	...
</div>
</lavabuild:template_result>

##x:widget attribute

You can create an inline widget with custom element container.
If widget already has a container - than existing one will be replaced.
Certainly, you should know what you are doing - you can break the widget, if it depends on it's container.

DropDown widget does not have a container, so it may be used this way:

<lavabuild:template_result as="single_view">
<li class="dropdown" x:widget="DropDown">
	<a href="#" class="dropdown-toggle" x:type="view" x:roles="$dropdown.trigger">
		Click me!
	</a>
	<ul class="dropdown-menu">
		And I will open
	</ul>
</li>
</lavabuild:template_result>

##Common attributes

You can also supply the "label" and "roles" attributes for the view. Syntax:

```text
x:roles=&lt;targets&gt;
```

<lavabuild:template_result as="single_view">
<div x:type="view" x:label="my_view" x:roles="$widget.my_view(1, 'test'); #app.my_view">
	...
</div>
</lavabuild:template_result>

Element container may also have <b>x:resource_id</b> attribute.
See reference for {@link reference:Resources}.

##Wrapping views

You can set an Element container to views with `x:type="container"` attribute:

<lavabuild:template_result as="single_view">
<div x:type="container">
	{#if(true)}
		Hello world!
	{/if}
</div>
</lavabuild:template_result>

Wrapping is done at the time of compilation (in {@link Lava.parsers.Common#compileTemplate}).
Framework creates an Element container config from the tag, asserts that there is only one view inside,
and assigns container config to that view.

View must be container-less ("#", not "$"). And of course, you can use any kind of properties and bindings on container.

Several control attributes are forbidden either on container or wrapped view:
- x:options, x:roles and x:label - they belong to view, so must be moved to view (either via hash option, or directive)
- `id` also belongs to view, but it must be moved to container for code-style reasons

Real-life example:

<lavabuild:template_result as="single_view">
<a x:type="container" x:bind:href="href">
	{#> title}
</a>
</lavabuild:template_result>

This is the simplest way to bind both `href` attribute and link content: if you placed `x:type="view"`
instead of "container" - there would be unnecessary view created.

##Remarks

First, you can have static and bound attributes at the same time, but one given attribute name cannot have static value 
and be bound at the same time. The same for styles. 
You can also have a static `class` attribute (classes, that are always present) and bound `x:classes` at the same time.

Second: `id` attribute belongs to view, not to the DOM element. You can create a static element with an `id` attribute:

```xml
<div id="test"></div>
```

It will preserve all it's attributes after rendering, so you will be able to get it by `id`. 
But when you create a view (or container) with id, then DOM element will be given random system id instead:

<lavabuild:template_result as="single_view">
<div x:type="view" id="test"></div>
</lavabuild:template_result>

This will render as: `<div id="e123"></div>` ("123" is some random number).
In this case you can get it from ViewManager:

```javascript
var element = Lava.view_manager.getViewById("test").getContainer().getDOMElement();
```

Of course, `getViewById` will return the view only if it's already created,
and `getDOMElement` will return the element only when view is in DOM.

##See also

`x:type="static"` and `resource_id` attributes are described in {@link reference:Resources} reference.