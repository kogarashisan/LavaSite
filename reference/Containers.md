<lavabuild:title>Containers</lavabuild:title>

#Containers overview

In Lava framework you never create DOM elements directly, instead framework renders them as text and inserts into
the document. This is fast, and what is more important - this allows to provide an abstraction layer 
between DOM and framework.

Framework accesses DOM elements with the help of <i>containers</i> - they are the bridge between views and DOM.
Each view can have a container, and there are three kinds of them.

##Element container

{@link Lava.view.container.Element} container controls a html element, with ability to bind it's properties,
styles and classes to expression results. May be used to delegate events. Rendered DOM element of this container
always has auto-generated `id` attribute, for example:

```xml
<div id="e123"> ... </div>
```

Id is used to retrieve the element from DOM after rendering. 
Number in the attribute equals to {@link Lava.view.Abstract#guid} of container's view.

##Morph container

{@link Lava.view.container.Morph} - represents two &lt;script&gt; tags, with content between them.
That's how it looks like in DOM:

```xml
<script id='c123s' type='x'></script>
...
<script id='c123e' type='x'></script>
```

<str>"s"</str> and <str>"e"</str> stand for "start" and "end".

Content between script tags can be replaced. Script tags are invisible and inline, 
so this container can be used to replace inline text.
Script tags can also be inserted where text and markup is not allowed, 
for example between &lt;table&gt; and &lt;tbody&gt; tags.

##Emulated container

{@link Lava.view.container.Emulated} - virtual, invisible container without actual DOM representation.
But, it can use surrounding Element and Morph containers to manipulate DOM.

Consider this example: you have an If view with Emulated container, and another view with an Element container before it. 
Emulated container of the If view can be configured to insert it's content after previous element, 
so when condition of the IF view changes from <kw>false</kw> to <kw>true</kw> - 
it will be able to perform refresh on it's own (without help of it's parent views).

Emulated containers are typically used with {@link reference:Refreshers}.

##Container state

When you want to render a container - you call `wrap(html)` - it renders container tags with all attributes
and wraps `html` inside them. You must insert the rendered HTML into DOM immediately:
if you change data or refresh bindings - then rendered data will become stale,
and container will not refresh itself properly. After insert, you must call `informInDOM()` - 
to tell the container, that it's now in DOM.

Views and containers have very simple state machine: it does not track the fact that it was rendered,
so they will not notice if you render them several times in a row (<b>but it's not safe to do that</b>).
When Element container knows that it's in DOM - it will start to refresh it's property 
bindings, and calls to {@link Lava.view.container.Element#getDOMElement} will return it's DOM element.

<b>Before</b> removing container from DOM, you must call `informRemove()` - this makes the container to forget cached reference
to it's DOM element(s) and stops synchronization of bound properties.

##Element container in depth

Due to nature of Lava views - they can be re-rendered at any moment. Generally, you should not manually change 
properties on elements inside Lava views, cause you will lose your changes when they are refreshed. 
Animation is an exception: it's performed directly on elements, without access to containers.

When container is rendered - it renders itself with it's current properties.
To keep your changes in sync - you can use Element container's API, for example:
- `setProperty(name, value)` - sets a static property to container and sets it on it's DOM element
- `storeProperty(name, value)` - sets property on container, but does <b>not</b> set it on the DOM element
- `syncProperty(name)` - refreshes the value on DOM element

Similar methods exists for styles and classes.

For an example of `storeProperty` usage - see the framework's input widgets: they listen to the "changed" event on
&lt;input&gt; DOM elements, and store new "value" in their container.

You should know:
- when container is in DOM - property bindings are refreshed immediately when change notification is received
- void tags are always rendered as selfclosing. This is compatible with HTML5 mode, and required prior to HTML5
- attributes with <kw>null</kw> and <kw>false</kw> values are not rendered. 
When an attribute is set to <kw>null</kw> - it's removed from DOM element. You can also return <kw>null</kw> 
from binding arguments (and <kw>false</kw> for boolean attributes) to remove the attribute.

Boolean <kw>true</kw> attributes are rendered in `<name>="<name>"` form (for example: `checked="checked"`).

<b>Important note on attribute validity</b>: it's not safe to bind your attributes to user input,
and it's your responsibility to check user input to avoid XSS attacks.