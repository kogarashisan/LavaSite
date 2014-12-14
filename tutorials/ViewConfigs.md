<lavabuild:title>View configs</lavabuild:title>

#View configs

Most of other frameworks compile templates into JavaScript functions, which then render the content. Here templates
are compiled into configs for views - JavaScript classes. This has lots of benefits: framework has transparent architecture and behaviour,
easy to debug, simple, fast and predictable.

There are four views, inherited from {@link Lava.view.Abstract}:
- {@link Lava.view.If} - conditionally displays it's template
- {@link Lava.view.Foreach} - displays a copy of template for each item from argument
- {@link Lava.view.Expression} - displays result of an expression
- {@link Lava.view.View} - helper view, to create a template with container

You have already used three of them in previous lessons: when you place `{:L:}#foreach(...)}` or `{:L:}#if(...)}`
in your template - a config is created for {@link Lava.view.Foreach} and {@link Lava.view.If} classes respectively.
{@link Lava.view.Expression|Expression} view has special syntax for it: `{:L:}#> ... }`, which also creates a config.

Views can not be inserted into DOM by themselves - they can only exist inside a widget. Widgets can contain
user logic and event handlers. All widgets are inherited from {@link Lava.widget.Standard}, which is inherited
from {@link Lava.view.View}. So, widget is also a view, with all it's methods and lifecycle.

In this lesson we will learn how widgets work by manually creating their configs.
Let's start with totally blank page:

```xml
<!DOCTYPE html>
<html lang="en">
<head>
	<script src="http://ajax.googleapis.com/ajax/libs/mootools/1.5.1/mootools-yui-compressed.js"></script>
	<script src="http://lava-framework.com/lib/lava-master-DEBUG.js"></script>
	<script>
		window.addEvent('load', function() {
			Lava.bootstrap();
		});
	</script>
</head>
<body></body>
</html>
```

`lava-app` attribute was removed from &lt;body&gt;, so now it's a common tag, and it's content is not parsed. 
Now we will manually create a widget and insert it into the page:

```javascript
window.addEvent('load', function() {
	Lava.bootstrap();
	var widget = new Lava.widget.Standard({
		is_extended: true,
		container: {type: 'Element', tag_name: 'div'},
		template: ['Hello world!']
	});
	widget.inject(document.body, 'Top');
});
```

You will see a &lt;div&gt; tag with <str>"Hello world!"</str> inside it.

All framework configs are described in `support/` folder of Lava repository.
Files from this folder are not used anywhere except in JSDoc comments.
You can have a look at the {@link page:support} page, which contains all the config formats.

Widget config is described in {@link _cWidget} structure - you can follow the link to see what else can be there.
Widget configs can be inherited just like classes, that's why we need to supply `is_extended` property. 
Config extension will not be covered in tutorials, but you can read the corresponding {@link reference:ConfigExtension|reference}.

`container` config property is a config for {@link Lava.view.container.Element} class, and has type {@link _cElementContainer}.
`template` itself is config for {@link Lava.system.Template} class. It's an array with strings, 
view and widget configs, and some other structures which are recognized by Template class.

Let's add an Expression view:

```javascript
window.addEvent('load', function() {
	Lava.bootstrap();
	var widget = new Lava.widget.Standard({
		is_extended: true,
		container: {type: 'Element', tag_name: 'div'},
		template: [
			'Hello ',
			{
				type: "view",
				class: "Expression",
				argument: Lava.ExpressionParser.parse("your_name")
			}
		]
	});
	widget.set("your_name", "World");
	widget.inject(document.body, 'Top');

	// let's save it for future use
	window.demo_widget = widget;
});
```

Now you will see `<div>Hello World</div>` inside document's body. In the above example the widget was exported to
global `demo_widget` property, so now you can access it from console:

```javascript
demo_widget.set("your_name", "Jack");
Lava.refreshViews();
```

`argument` config from above example is too complex to write by hands, and you should never try to do it - 
you must always use ExpressionParser to do that job for you.

You need to know how template configs work, but you do not need to write them by hands. 
Configs are parsed by `Lava.TemplateParser`:

```javascript
window.addEvent('load', function() {
	Lava.bootstrap();
	var widget = new Lava.widget.Standard({
		is_extended: true,
		container: {type: 'Element', tag_name: 'div'},
		template: Lava.TemplateParser.parse("Hello {#> your_name}!")
	});
	widget.set("your_name", "World");
	widget.inject(document.body, 'Top');
});
```

Final example:
<iframe style="height: 30em; width: 100%" src="http://embed.plnkr.co/fHeYSF/index.html"></iframe>
<i><a href="/www/demos/tutorials/ViewConfigs.html">Alternative link</a></i>