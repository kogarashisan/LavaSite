<lavabuild:title>Binding attributes</lavabuild:title>

#The View class

The fourth view in Lava is called simply a "view" ({@link Lava.view.View}):

```xml
{#view()}
	Hello world
{/view}
```

It does not have an argument and should always be written with empty braces. 
By itself, this class is totally useless, and just wraps it's template.

But this view can be given a Morph container - this will allow to update views without container inside it:

```xml
{$view()}
	{#> something} and {#> otherthing}
{/view}
```

And most often you will give this view an Element container:

```xml
<div x:type="container">
	{$view()}
		Hello world
	{/view}
</div>
```

This form has special syntax equivalent:

<lavabuild:template_result>
<div x:type="view">
	Hello world
</div>
</lavabuild:template_result>

This will create a View with an Element container.

Why this is so important: cause container's properties, styles and classes can be bound to expressions.
Containers can also delegate events, like "click" or "mouseover", so you will use this form often.

##Elements in templates

When Lava parses templates - all elements without control attributes are converted back to strings, for example:

<lavabuild:template_result>
<div x:type="view">
	<span>{#> your_name}</span>
</div>
</lavabuild:template_result>

&lt;span&gt; tag will be converted to string, and Expression view inside it will not be able to use it for update:
when `your_name` changes - it will update parent's &lt;div&gt; tag. In this case it may be better to convert &lt;span&gt;
into container for the Expression view:

<lavabuild:template_result>
<div x:type="view">
	<span x:type="container">{#> your_name}</span>
</div>
</lavabuild:template_result>

##Element bindings

You can bind any element's properties to expressions, for example:

<lavabuild:template_result>
<img x:type="view" x:bind:src="'/www/images/' + image_name" />
</lavabuild:template_result>

Here we bind `src` property to an expression. You are not limited when writing expressions for attributes -
you can use any variables, modifiers (function calls) and operators, like in any other expression.

Classes and styles are bound separately.

You bind styles with `x:style:<name>` syntax. <b>And if you have units, like "px" - 
you should manually add it to the style value.</b>

```xml
<!-- 
example volume bar. 
It expects "volume" property to be defined somewhere in parent views or widgets 
-->
<div x:type="view" x:style:width="volume * 2 + 'px'" class="volume-bar">
	{#> volume}%
</div>
```

Class binding accepts multiple expressions, each of them can return a string with any number of CSS class names:

```xml
<div x:type="view" x:classes="is_open ? 'open' : ''; 
	is_highlighted ? 'box-highlighted box-white' : 'box-gray'">
...
</div>
```

Here are two semicolon-separated expressions: first returns either 'open' class or empty string. Second expression
returns either two classes or one, depending on `is_highlighted` variable, which is taken somewhere from view parents.

Expressions of `x:classes` binding must not return <kw>null</kw> - you should return empty string when you don't 
need to apply any classes.

##Using bindings

You can:
- use newlines in expressions
- use bindings on view containers (elements with `x:container`)
- have bound and unbound styles and classes at the same time

For example, if you have an array of objects with <var>href</var> and <var>title</var> properties,
that's how you can render them:

```xml
{#foreach(links) as=link}
	<a x:type="container" x:bind:href="link.href">
		{#> link.title}
	</a>
{/foreach}
```

Another example - an element with bound and static styles:
```xml
<div x:type="view" x:style:width="volume * 2 + 'px'" style="height: 20px; background: blue">
	{#> volume}%
</div>
```

What you should not do: if you have elements, controlled by the framework - you should not edit their properties 
from outside of the framework. Due to nature of Lava templates - properties can be refreshed at any time, 
so you can lose your changes. You can change properties manually, but you should respect the template lifecycle and use
{@link Lava.view.container.Element|Element container's API}.