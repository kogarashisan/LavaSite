<lavabuild:title>Introduction to templates</lavabuild:title>

#Introduction to templates

Let's return to the introductory example and learn how to write templates.
We need a property, which can be referenced in templates, so we define a controller for the page:

```javascript
Lava.define('Lava.widget.HelloApp', {
	Extends: 'Lava.widget.Standard',
	_properties: {
		your_name: 'World'
	}
});
```

This class is inherited from {@link Lava.widget.Standard} - base class for all widgets.
Widgets are independent pieces of functionality, which can respond to events and contain user-defined logic.
This class also defines `your_name` property, which we will reference in our templates.

Place the following attribute on the &lt;body&gt; tag;

```xml
<body lava-app="HelloApp">
</body>
```

Now framework will parse content of the &lt;body&gt; tag and turn it into a widget with HelloApp controller.
Widgets in-depth will be discussed later.

#Views

View represents a page region.
There are four main views in Lava: "if", "foreach", "expression" and "view".

Expression view displays result of an expression. This will output `your_name` property from HelloApp widget:

```xml
{#> your_name}
```

View arguments can be any JavaScript expressions, that do not modify their operands 
(for example, there must be no increment or assignment operators), so you can write something like this:

```xml
<h1>{#> "Hello " + your_name + "!"}</h1>
```

You can also call a set of predefined methods in expressions:

```xml
<h1>{#> "Hello " + ucFirst(your_name) + "!"}</h1>
```

`ucFirst` is a method from {@link Lava.modifiers} ("Upper Case First Letter").

##If and Foreach views

<i>If</i> view conditionally displays a template:

```xml
{#if(your_name.length &lt; 3)}
	Error: your name is too short
{/if}
```

You can set `your_name` to something shorter, than 3 letters and you will see the message.
"elseif" and "else" sections are also supported:

```xml
{#if(your_name.length &gt; 3)}
	Error: your name is too short
{else}
	Your name is {#> your_name.length} characters long
{/if}
```

<i>Foreach</i> view displays a template for each item from argument:

```xml
{#foreach(['Alice', 'Bob', 'Mark']) as=name}
	Hello {#> name}!
{/foreach}
```

This time argument is inline - to demonstrate such possibility.
Expression parser recognizes keywords, like <kw>true</kw> or <kw>null</kw>, 
strings and arrays. You can also use all operators, which do not modify their operands. 
<b>Objects are not allowed in expressions,</b> but they can be taken from widget variables.

```xml
{#foreach(['Alice', 'Bob', your_name]) as=name}
	Hello {#> name}!
{/foreach}
```

This example will pass `['Alice', 'Bob', 'World']` array to <i>foreach</i> view.

Templates inside the view can also access `count` and `foreach_index` properties:

```xml
{#foreach(['Alice', 'Bob', 'Mark']) as=name}
	Hello {#> name}!
	{#if(foreach_index + 1 < count)}
		<br/>
	{/if}
{/foreach}
```

`foreach_index` is zero-based index of the item in `foreach`, so this example will output `<br/>` after all names,
except the last one.

See the final result (<b>tip: click on the "Preview" button to see it in action</b>):
<iframe style="height: 30em; width: 100%" src="http://embed.plnkr.co/xCmkN7/index.html"></iframe>

<i><a href="/www/demos/tutorials/TemplatesIntro.html">Alternative link</a></i>

##Iterating over objects

Foreach view also allows you to iterate over an object or a {@link Lava.mixin.Properties} instance.
In this case you can access additional `foreach_name` variable inside the view's template,
which holds the current key in object.

Let's declare an object in HelloApp widget:

```javascript
Lava.define('Lava.widget.HelloApp', {
	Extends: 'Lava.widget.Standard',
	_properties: {
		people: {
		  open_source: {message:"I'm good", name: "Linus Torvalds"},
		  many_lawyers: {message: "I'm bad", name: "Steve Ballmer"},
		  respected: {message: "I'm happy", name: "Richard Branson"}
		}
	}
});
```

Now we can iterate over it:

```xml
<body lava-app="HelloApp">
	{#foreach(people) as=record}
		{#> foreach_name} | {#> record.name} says: {#> record.message} <br/>
	{/foreach}
</body>
```

Each template inside `foreach` has access to four additional variables: `count`, `foreach_name`, `foreach_index`
and to the current item, which can be specified in `as` option. In this case it's `record`.

In expressions you can also reference paths inside objects, like `record.name`.

Final result:
<iframe style="height: 30em; width: 100%" src="http://embed.plnkr.co/4CAgHS/index.html"></iframe>

<i><a href="/www/demos/tutorials/TemplatesIntro2.html">Alternative link</a></i>