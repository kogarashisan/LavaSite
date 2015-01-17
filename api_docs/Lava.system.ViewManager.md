
<i>Term "target" here refers to result of {@link Lava.parsers.Common#parseTargets}, See {@link reference:Targets}</i>

#Event dispatch algorithm clarification

When DOM event occurs - ViewManager first builds a stack of elements from event target 
(here "event target" refers to the element, which triggered the event).

```xml
<body id="e14">
	<div id="e16">
		<ul id="e18">
			<li>
				<a id="e20">Click me!</a>
...
```

When the link is clicked - ViewManager creates an array and fills it with all parent nodes of the link element,
so in this case it will contain the following elements: &#x5b;a, li, ul, div, body&#x5d; 
(not strings, but actual DOM elements). 

This stack is always built from actual DOM tree, not view hierarchy. It's done this way cause view hierarchy 
does not always reflect the actual state of DOM elements.
For example: you can bootstrap &lt;body&gt; as one widget, and then <i>manually</i> insert another widget into it:

<lavabuild:codeblocks>
	<codeblock title="Page template" lang="xml">
<body lava-app>
	<x:define title="MyContent" controller="Standard">
		<view>
			<ul x:type="view">
				<li>
					<a x:type="view" x:event:click="on_link_click">Click me!</a>
				</li>
			</ul>
		</view>
	</x:define>
	<div x:type="view" id="main_container" x:event:click="on_container_click">
	</div>
</body>
	</codeblock>
	<codeblock title="Page loaded handler" lang="javascript">
Lava.bootstrap();
var content_widget = Lava.createWidget('MyContent');
content_widget.inject(Lava.view_manager.getViewById("main_container").getContainer().getDOMElement(), 'Top');
	</codeblock>
</lavabuild:codeblocks>

Now there are two root widgets on the page, one inside another. And their hierarchy is not connected:
parent of `content_widget` is <kw>null</kw>, but physically it's inside the body widget.

##The element dispatch loop

For each element in the stack, ViewManager checks if it belongs to a view (element has `id` attribute,
and there is view with corresponding GUID). If element is owned by a view - 
then ViewManager gets it's container and looks for event targets. Then each target is dispatched to corresponding 
widgets in hierarchy.

So the dispatch loop consists of two parts: when ViewManager traverses DOM element stack (let's call this an "element" loop),
and when <i>targets</i> from elements are dispatched to the hierarchy.

In the example above: link has bubbling `on_link_click` target on it, so it will be dispatched to all parents of the 
link's view, then to global targets. Link has one parent - MyContent widget, which itself does not have a parent,
cause it was inserted manually. <b>So `on_link_click` target will not reach the 
&lt;body&gt; widget, cause &lt;body&gt; widget is not parent of `content_widget`</b>.

After dispatching targets from the link - ViewManager continues to traverse elements in the stack, and finds the
&lt;div id="main_container"&gt;. It has `on_container_click` target, which is dispatched to the body widget and 
global target handlers.

Element loop can not be cancelled: both `on_link_click` and `on_container_click` targets will be dispatched.
Let's look at another example:

```xml
<div x:type="view" x:event:click="on_div_click">
	<span x:type="view" x:event:click="on_span_click; on_title_click">
		...
```

Here, all three targets will be dispatched: first `on_span_click` and `on_title_click`, then `on_div_click`.

##Cancelling events

In your event handler, you can call {@link Lava.system.ViewManager#cancelBubble} to cancel bubbling of the 
<b>current</b> target. As for the previous example, you can individually cancel any of the three targets:
`on_span_click`, `on_title_click` or `on_div_click`. But if you cancel the first one - the second and the third will
be dispatched anyway. The same applies to cancelling of `on_title_click` and `on_div_click`: 
you can cancel any of them individually, but after you do it - ViewManager will switch to the next target,
and then to the next element in the stack.

Note: there is no reason to call `cancelBubble` in <b>targeted</b> event handlers (when you know that event target does not bubble).

The same rules apply to roles.

Summary: when you call `cancelBubble` - you cancel bubbling of the <b>current</b> role or event target. 
If Element container has multiple targets on it - then they all can be cancelled individually in their handlers,
but they will be dispatched anyway.

See also: source code of {@link Lava.system.ViewManager}.

##What else you should know

When ViewManager dispatches event or role target - it calls either {@link Lava.widget.Standard#handleEvent} 
or {@link Lava.widget.Standard#handleRole}, and if you need more control - then both methods can be overridden.