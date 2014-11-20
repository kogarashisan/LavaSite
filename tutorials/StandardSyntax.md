<lavabuild:title>Standard syntax</lavabuild:title>

##Standard syntax

As you remember, templates in Lava are compiled into configs for view and widget classes. 
Syntax sugar is insufficient to write complex configuration, that's why the standard syntax exists. 
Standard syntax is unified (same rules for all widgets), has more possibilities
and sometimes it may be more convenient than sugar.

So, what is a widget in Lava: in fact it's a common JavaScript object with configuration for some {@link Lava.ClassManager} class.
It contains the class name of it's controller, named templates (includes), container configuration and various config options.
This object can be inserted into template, and what is also important, widget configs can be inherited just like
JavaScript classes: child config inherits all properties from parent configuration, and can define it's own.

Tags from the "x:" namespace are called "directives". &lt;x:widget&gt; directive inserts an object with 
widget configuration into the template:

<lavabuild:template_result>
Some text
<x:widget controller="Standard">
	<main_template>Hello World</main_template>
</x:widget>
Another text
</lavabuild:template_result>

This will be rendered as "Some text Hello World Another text". As you see, content of the &lt;main_template&gt; tag became
widget's template, and widget's class will be "Lava.widget.Standard" ("Lava.widget" is default prefix for widget classes).

Here is an inline progress bar widget:

<lavabuild:template_result>
<x:widget controller="Standard">
	<main_template>
		<div x:type="view" style="width: 400px; height: 30px; border: 1px solid black; position: relative">
			<div x:type="view" x:style:width="value * 4 + 'px'" style="height:30px; background: orange; position:absolute"></div>
			<div x:type="container" style="width: 100%;text-align: center;position: absolute;color: black;font-weight: bold;">{#> $widget.value + '%'}</div>
		</div>
	</main_template>
	<properties>
		{value: 0}
	</properties>
</x:widget>
</lavabuild:template_result>

&lt;properties&gt; tag was used inside the directive - it defines `properties` config option, 
which is handled in constructor of the {@link Lava.widget.Standard} class. If we did not set it, then "width"
expression would evaluate to "NaNpx" (cause `value` would be <kw>undefined</kw>).

Let's make this widget reusable: for this we replace x:widget directive with x:define. They both have same format of
inner tags, there is only one significant difference between them: while x:widget inserts config object inline, 
x:define puts it into {@link Lava#widgets}. You also need to add `title` to widget definition:

```xml
<x:define controller="Standard" title="MyProgressBar">
	<main_template>
		<div x:type="view" style="width: 400px; height: 30px; border: 1px solid black; position: relative">
			<div x:type="view" x:style:width="value * 4 + 'px'" style="height:30px; background: orange; position:absolute"></div>
			<div x:type="container" style="width: 100%;text-align: center;position: absolute;color: black;font-weight: bold;">{#> $widget.value + '%'}</div>
		</div>
	</main_template>
	<properties>
		{value: 0}
	</properties>
</x:define>
```

##Using widgets

You can insert a global widget into template by it's title:

<lavabuild:template_result as="single_view">
<x:widget extends="MyProgressBar"></x:widget>
</lavabuild:template_result>

The same syntax allows you to make any modifications to original config, or even rewrite it completely:

<lavabuild:template_result as="single_view">
<x:widget extends="MyProgressBar" id="my_bar">
	<properties>
		{value: 50}
	</properties>
</x:widget>
</lavabuild:template_result>

You could assign new controller, define new &lt;main_template&gt; and use many other config options, which we will learn later.
Also notice the `id` attribute.

##Define container

Like any view, widgets can have container. Container and main template are defined together:

```xml
<x:define controller="Standard" title="MyProgressBar">
	<main_view>
		<div x:type="view" style="width: 400px; height: 30px; border: 1px solid black; position: relative">
			<div x:type="view" x:style:width="value * 4 + 'px'" style="height:30px; background: orange; position:absolute"></div>
			<div x:type="container" style="width: 100%;text-align: center;position: absolute;color: black;font-weight: bold;">{#> $widget.value + '%'}</div>
		</div>
	</main_view>
	<properties>
		{value: 0}
	</properties>
</x:define>
```

&lt;main_view&gt; tag replaces the &lt;main_template&gt; tag, which expects a single View config inside it.
Container and template are copied from view into widget config.

Either one of &lt;main_view&gt; or &lt;main_template&gt; tags are allowed, 
and if one of them exists - it must be the first (topmost) tag in widget definition.

Final example:
<iframe style="height: 26em; width: 100%" src="http://embed.plnkr.co/2boMQw/preview"></iframe>
<i><a href="/www/demos/tutorials/StandardSyntax.html">Alternative link</a></i>

##Widget includes

"include" is a <i>named template</i> from widget. You define them with &lt;include&gt; tag in widget definition:

```xml
<x:define controller="Standard" title="MyPanel">
	<main_template>
		<div class="my-panel">
			{> $widget.header}
			{> $widget.content}
		</div>
	</main_template>
	<include name="header">
		<div class="panel-header">{#> $widget.title}</div>
	</include>
	<include name="content">
		<div class="panel-content">{#> $widget.content}</div>
	</include>
</x:define>
```

Content of &lt;include&gt; tag is parsed like any template, this means that inside there can be other views, 
widgets and includes. Includes are inserted into template with the following construct: `{:L:}> ...}`
(same as Expression views, but without "#" or "$").

How includes work: <b>at run time</b> include construct is replaced with exact template.
You can replace them by hands (copy-and-paste), and you will get the same result:

```xml
<!-- Result is equivalent to previous example -->
<x:define controller="Standard" title="MyPanel2">
	<main_template>
		<div class="my-panel">
			<div class="panel-header">{#> $widget.title}</div>
			<div class="panel-content">{#> $widget.content}</div>
		</div>
	</main_template>
</x:define>
```

Includes can be overwritten in inherited widgets. In previous lessons you have seen CollapsiblePanel widget, 
written with sugar syntax; here is the same example in standard syntax:

<lavabuild:template_result as="single_view">
<x:widget extends="CollapsiblePanel">
	<include name="title">The title</include>
	<include name="content">The content</include>
</x:widget>
</lavabuild:template_result>

Include can be bubbling, like property: `{:L:}> title}` - this will find the first parent which has <str>"title"</str> 
include and insert it's content. Once again - you should prefer targeted includes over bubbling.