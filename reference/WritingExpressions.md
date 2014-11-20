<lavabuild:title>Writing expressions</lavabuild:title>

#Writing expressions

##Property paths and prefixes

There are two ways to reference properties:

```text
// bubbling reference
{#> my_property}

// with "locator" prefix
{#> $widget.my_property}
```

When reference is bubbling - {@link Lava.scope.Argument|Argument} searches for the first a view (or widget), 
which has that property. First, it checks current view, than it's parent, than parent of parent and so on.
Search is always done up, from current view to the topmost (root) widget.

Path after property is evaluated after the property is found:

```text
{#> my_property.path1.path2}
```

This will find a view with `my_property` set, and then evaluate the full path from that view.

##View locators

Properties with "locator" prefix function differently: first, Argument finds the view by locator,
and then evaluates the path from it.

There are three kinds of view locators:
- $by_name - find the first <b>widget</b> with given name (only widgets can have name)
- @by_label - find a view with given label. Labels can be on views and widgets.
- &num;by_id - get a view or widget by it's id. View can be anywhere in hierarchy and even out of DOM.

For example:

```text
{#> $widget.my_property}
{#> $widget.my_property.path1.path2}
```

This will find a widget with name "widget", and then get `my_property` and the rest of the path from it.
Does not matter, if property is defined in widget instance or not - bindings will be created to the widget,
matched by locator.

Widget's {@link Lava.widget.Standard#name|name} is taken from JavaScript class, while view's 
{@link Lava.view.Abstract#label|label} and {@link Lava.view.Abstract#id|id} come from templates (view's config)
and are assigned in constructor. {@link Lava.widget.Standard} class has name "widget" - it's the default name, 
which you should change in your own widget classes.

When you search for views or widgets by their #id - hierarchy is ignored completely. 
This way you can target global widgets - they only need to be created, and may even be out of DOM.

##Depth operator

Locator prefix may be followed by the "depth operator", which allows you to reference parents of the target: 

```text
{#> $widget~1.my_property}
```

This tells to get the first parent of `$widget` and then get `my_property` from it. 
Number after the tilde specifies which parent to get.

For better understanding, see the source of {@link Lava.view.Abstract#locateViewByPathConfig}

##Search operator

Search operator allows you to skip certain part of hierarchy when searching for variables.

```text
$widget->level
```

This tells to find `$widget`, but skip it, and get it's parent instead. Then search for `level` starting from 
that parent (bubbling search).

On other words, `level` variable, if it exists: will be ignored on current view, on "$widget", and on any views between them. 
Search for `level` will start from parent of the "$widget".

Search and depth operators can be combined:

```text
$widget~1->level
```

This will start to search for "level" from the parent of the parent of "$widget".

##Reserved view labels

These labels may be used to reference views in expressions (but not in <i>targets</i>)
- @root - the root widget, which was inserted into the page
- @this - current view
- @parent - the parent of current view
- @widget - nearest parent widget in hierarchy

You should be careful when using @widget label - it refers to the nearest parent widget,
not to the widget where a template was defined. So if you decide to wrap a piece of template into another widget,
like CollapsiblePanel - @widget will point to that panel instead of current widget. And it does not matter,
if you wrap using full &lt;x:widget&gt; syntax, or syntax sugar, like &lt;tabs&gt; or &lt;accordion&gt;.

Also note, that these labels are valid in expressions, but <b>the only allowed label in view and role targets is</b> @root.

See the source of {@link Lava.view.Abstract#locateViewByLabel}.

##Modifiers

Modifiers are user-defined functions, which you can call from expressions. Global modifiers are defined in
{@link Lava.modifiers}. Example:
```text
{#> ucFirst(your_name)}
```

You can also define modifiers in widgets:

```javascript
Lava.define(
'Lava.widget.HelloApp',
{
	Extends: 'Lava.widget.Standard',
	name: 'hello_app',

	_modifiers: {
		say_hello: '_sayHello'
	},

	_sayHello: function(str) {
		return "Hello " + str;
	}
});
```

Here we defined a <b>protected</b> function, which we want to call from templates - `_sayHello`. 
It can take any number of arguments and return any value. In order ro make it available to templates -
it must be added to the `_modifiers` map. Keys in it are modifier names in templates, and values are name of 
class methods. Modifiers are called in context of the widget instance, so they can use other widget methods.

Widget modifier can be called like this:

```xml
<body lava-app="HelloApp">
	{#> $hello_app.say_hello("World")}
</body>
```

Widget modifiers are always called with locator. Locator may be also label or id, but it should point to a widget.
See also: {@link Lava.widget.Standard#callModifier} source.

Tip: if you have a very complex expression in your template - sometimes it's better to hide it into a modifier -
it's considered a good practice.

<b>Warning: modifiers must not have any side-effects. This means, that you should not modify your arguments or
anything else in modifiers. Also, if you create any objects with <kw>new</kw> operator inside a modifier - 
you should take care of their destruction. Otherwise - it may lead to memory leaks, so not recommended.</b>

Final example:
<iframe style="height: 26em; width: 100%" src="http://embed.plnkr.co/7eHFEz/index.html"></iframe>
<i><a href="/www/demos/reference/WritingExpressions.html">Alternative link</a></i>

##The "//depends:" operator

Expression can be followed by an optional "depends" operator - it adds scope references to {@link _cArgumentCommon#binds}
array. These references are not used in the evaluator function, but {@link Lava.scope.Argument} watches them for changes
and updates it's value when they change.

Usage example: you may need to render a tree of plain objects and arrays (not Properties and Enumerable),
and widget can sort records in the tree. Naturally, you will have a property like <var>sort_order</var>
in your widget, when it changes - widget performs sorting. There is no way for Argument to detect changes on
plain arrays and objects, but you can add dependency to <var>sort_order</var> to force update when it changes:

<lavabuild:template_result as="single_view">
{#foreach(node.children //depends:{$tree.sort_order}) as=node}
	...
{/foreach}
</lavabuild:template_result>