<lavabuild:title>Resources and localization</lavabuild:title>

#Resources and localization

Resources are widget data that can be localized. They also serve dual purpose: 
with resources you can set styles and properties of elements from widgets without modifying their template.
Just like the rest of widget configs, <b>resources are static</b>! That means you should not modify them in code.

Here is an example of localized widget:

```xml
<x:define title="HelloWidget" controller="Standard">
	<template>
		<x:static_value resource_id="$widget.HELLO_STRING"></x:static_value>
	</template>
</x:define>

<x:define_resources for="HelloWidget" locale="en">
	<string path="HELLO_STRING">Hello world!</string>
</x:define_resources>

<x:define_resources for="HelloWidget" locale="ru">
	<string path="HELLO_STRING">Привет мир!</string>
</x:define_resources>
```

In the above example, there is a widget, which uses a string HELLO_STRING from resources. Note, that template takes that string
from widget by it's controller name ("$widget" is name of {@link Lava.widget.Standard} class, see {@link Lava.widget.Standard#name}).
It's recommended to put resources for each locale into separate file.

Widget then may be used as usual:
<lavabuild:template_result as="single_view">
<x:widget extends="HelloWidget"></x:widget>
</lavabuild:template_result>

It will display a widget with string, chosen by current {@link Lava.schema#LOCALE}. 

Tip: you can set current locale before call to `Lava.init()` or `Lava.bootstrap()`.

##Resource paths and inheritance

There are four types of resource values: 
- translatable string, 
- translatable plural string
- container properties (including styles and classes)
- and "options" - any JavaScript object, array or value (anything, that can be serialized)

You can set resources to an inline widget with x:resources directive and &lt;resources&gt; tag:

<lavabuild:template_result as="single_view">
<x:widget extends="HelloWidget">
	<resources locale="en">
		<string path="HELLO_STRING">Hi all!</string>
	</resources>
	<resources locale="ru">
		<string path="HELLO_STRING">Здравствуйте!</string>
	</resources>
</x:widget>
</lavabuild:template_result>

Resource values can have paths:

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<resources locale="en">
		<string path="hello_widget.HELLO_STRING">Hi all!</string>
	</resources>
</x:widget>
</lavabuild:template_result>

Notice: widget from previous example does not extend HelloWidget anymore.

Path segments should be named lower-case, while resource value names should be upper-case. 
In the above example, a "component" was created: components contain resource values and another components.
Root resource object can also be treated as component.

Components can be assigned to widgets with `resource_id` attribute. Resources from `resource_id` have priority over
widget's own resources. The example below defines `hello_widget.HELLO_STRING` in the root widget, 
and assigns `hello_widget` resource to HelloWidget:

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<template>
		<x:widget extends="HelloWidget" resource_id="$widget.hello_widget"></x:widget>
	</template>
	<resources locale="en">
		<string path="hello_widget.HELLO_STRING">Hi all!</string>
	</resources>
	<resources locale="ru">
		<string path="hello_widget.HELLO_STRING">Здравствуйте!</string>
	</resources>
</x:widget>
</lavabuild:template_result>

See {@link Lava.widget.Standard#_initResources}: in constructor HelloWidget finds the resource owner,
and calls {@link Lava.widget.Standard#getResource} from it.

##Real-life example

Accordion uses another widget - CollapsiblePanel, which inherits resources from it's owner.
See the sources of Accordion widget from `templates/` folder of Lava repository.

```xml
<collapsible-panel x:roles="$accordion.panel" x:resource_id="$accordion.panel">
```

Accordion adds a class to that panel in it's own resources:

```xml
<!-- Accordion's resources -->
<resources locale="default">
	<!-- This container is part of accordion's own template -->
	<container path="ACCORDION_CONTAINER" static_classes="panel-group"></container>
	<!-- This component is for the CollapsiblePanel widget -->
	<container path="panel.COLLAPSIBLE_PANEL_CONTAINER" add_classes="panel-collapse"></container>
</resources>
```

Accordion created the "panel" component in it's resources, and connected it to the CollapsiblePanel widget using 
`x:resource_id` attribute. <str>"default"</str> locale will be discussed later.

Tip: type `Lava.widgets.Accordion` in your browser's console to see the parse result.
Or you can even type `Lava.serializer.serialize(Lava.widgets.Accordion)` to see it as text.

When you use accordion - you can assign resources to the panel inside it without rewriting it's templates:

<lavabuild:template_result as="single_view">
<accordion>
	<x:resources locale="en">
		<container path="panel.COLLAPSIBLE_PANEL_CONTAINER" add_classes="panel-info"></container>
	</x:resources>
	<panel>
		<title>Test panel</title>
		<content>Test content</content>
	</panel>
</accordion>
</lavabuild:template_result>

Or you can assign them using `resource_id`:

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<template>
		<accordion x:resource_id="$widget.my_accordion">
			<panel>
				<title>Test panel</title>
				<content>Test content</content>
			</panel>
		</accordion>
	</template>
	<resources locale="en">
		<container path="my_accordion.panel.COLLAPSIBLE_PANEL_CONTAINER" add_classes="panel-info"></container>
	</resources>
</x:widget>
</lavabuild:template_result>

With respect to `resource_id` attribute, Accordion receives `my_accordion` resource component from it's parent widget.
Panel inside accordion receives `my_accordion.panel` component, and container inside the panel uses 
`COLLAPSIBLE_PANEL_CONTAINER` resource value. As long as widgets are connected with `resource_id` you can assign
resources to them. In this example, a new class was added to container inside accordion's panel: `add_classes="panel-info"`.

Resource parent does not necessarily need to define a resource component for child. 
Resources will be applied only when they are present.

##Static tags and values

As you know, tags without control attributes are serialized back to strings in {@link Lava.parsers.Common#compileTemplate}.
There is special tag type, which is also serialized to strings, but it's done at run time: `x:type="static"`.
This allows the container to use resources:

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<template>
		<div x:type="static" x:resource_id="$widget.MAIN_CONTAINER">
			Test
		</div>
	</template>
	<resources locale="en">
		<container path="MAIN_CONTAINER" add_classes="test-class"></container>
	</resources>
</x:widget>
</lavabuild:template_result>

If `x:resource_id` attribute is present on an element - then it can not have any static properties on it 
(including styles and classes) - <b>they all must be moved to corresponding widget's &lt;container&gt; resource</b>.

How it works: tag is compiled into a block of type {@link _cStaticTag}. When {@link Lava.system.Template} creates
this kind of block - it retrieves it's resources, merges them with tag's own properties, and renders this tag as a string.

The same way functions x:static_value directive - it's compiled into {@link _cStaticValue}, 
which is replaced with a value from resource at run time.

##Locales and resource priority

Locale is collection of language and region-dependent data and methods, which are stored in `Lava.locales` namespace.
Current locale is selected by {@link Lava.schema#LOCALE} switch. In Lava framework switching locales can be done 
without page reload, but you will need to destroy all widgets and create them again.

Resources are also tied to locale. This allows you to setup properties, styles, and any arbitrary data 
(with &lt;options&gt; resource type) that will change, depending on locale.

Resources are merged: least priority have inline template resources, like container properties.
Every resources, received with `resource_id` have priority over own resources of consumer 
(be it widget, container, static container or static value).

There is a special locale, called <str>"default"</str>, which is merged before any other locale.
Common usage for it: provide some common locale-independent styles for containers.

```xml
<x:define title="HelloWidget" controller="Standard">
	<template>
		<x:static_value resource_id="$widget.HELLO_STRING"></x:static_value>
	</template>
	<resources locale="default">
		<string path="HELLO_STRING">I'm a teapot!</string>
	</resources>
	<resources locale="en">
		<string path="HELLO_STRING">Hello world!</string>
	</resources>
	<resources for="HelloWidget" locale="ru">
		<string path="HELLO_STRING">Привет мир!</string>
	</resources>
</x:define>
```

In the above example, string <str>"I'm a teapot!"</str> from <str>"default"</str> locale will be shown 
if locale is not "en" or "ru".

<lavabuild:template_result as="single_view">
<x:widget extends="HelloWidget">
	<resources locale="default">
		<string path="HELLO_STRING">I'm a big teapot!</string>
	</resources>
</x:widget>
</lavabuild:template_result>

In the above example, string "I'm a big teapot!" will override every `HELLO_STRING`, which is defined in "HelloWidget",
cause inline data overrides data from parent widgets.

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<template>
		<x:widget extends="HelloWidget" resource_id="$widget.hello_widget">
			<resources locale="en">
				<string path="HELLO_STRING">Hi all!</string>
			</resources>
		</x:widget>
	</template>
	<resources locale="default">
		<string path="hello_widget.HELLO_STRING">I'm a sunflower!</string>
	</resources>
	<resources locale="en">
		<string path="hello_widget.HELLO_STRING">I'm a teapot!</string>
	</resources>
</x:widget>
</lavabuild:template_result>

In this example, string <str>"Hi all!"</str> will be overridden by <str>"I'm a sunflower!"</str>, 
cause resources, received via `resource_id` overwrite widget's own resources, 
and "default" locale overwrites everything below it. And <str>I'm a teapot!</str> will
overwrite <str>I'm a sunflower!</str>, but only for English locale.

##See also

{@link reference:ResourcesDefinition} - reference on how to define resources<br/>
{@link Lava.extenders#_extendResources} - see the source to get better understanding of "default" locale<br/>
{@link Lava.widget.Standard#_initResources}<br/>
{@link Lava.widget.Standard#getResource}<br/>
{@link Lava.system.Template#_createStaticValue}<br/>
{@link Lava.system.Template#_createStaticTag}<br/>
{@link Lava.view.container.Element#init}<br/>
{@link reference:Directives.define_resources}<br/>
{@link Lava.resources}

##Appendix A - resource_id attribute

Format of the `resource_id` attribute:

```text
&lt;parent_locator&gt;.&lt;resource_name&gt;
```

Parent may be referenced either by "$widget_name", "@widget_label" or "#widget_id".

Attribute may be applied:
```xml
<!-- On widgets (standard syntax) -->
<x:widget resource_id="..."> ... </x:widget>
<!-- On widgets (sugar) -->
<tabs resource_id="..."> ... </tabs>
<!-- On widgets (control attribute syntax) -->
<div x:widget="DropDown" x:resource_id="..."> ... </div>

<!-- On containers (as wrappers) -->
<div x:type="container" x:resource_id="..."> ... </div>
<!-- On containers (inline view) -->
<div x:type="view" x:resource_id="..."> ... </div>
<!-- On static tags -->
<div x:type="static" x:resource_id="..."> ... </div>

<!-- On x:static_value directive -->
<x:static_value resource_id="..."></x:static_value>
```

When the attribute is applied to widgets - it belongs to the widget. For the rest - in corresponding config
of container, static tag or directive. Note: for `x:type="view"` - it's stored in config of container for that view.

##Appendix B - container resource format

Container resource is stored as array of operations, like "add_class", "remove_style", "replace_properties" and so on.
There are totally 9 possible operations (three operations of each kind: replace, add, delete).
Internally, this form of container resource is called "container_stack".

This raw format needs to be merged into "container" resource, which is understandable by Template and Element containers.
But this can be done only when widget knows all applied operations.

```xml
<x:define title="HelloWidget" controller="Standard">
	<template>
		...
	</template>
	<resources locale="defaulr">
		<container path="MAIN_HELLO_CONTAINER" add_classes="test"></container>
		<container path="panel.MAIN_CONTAINER" add_classes="test"></container>
	</resources>
</x:define>
```

In this example, `MAIN_HELLO_CONTAINER` will be merged as soon as "HelloWidget" is constructed. 
But `panel.MAIN_CONTAINER` will be merged by the panel, not by "HelloWidget".

In the process of merging - original resources are not changed, instead each widget stores it's own copy of merge results.
See {@link Lava.widget.Standard#_initResources} and {@link Lava.resources#mergeRootContainerStacks}.