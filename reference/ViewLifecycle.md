<lavabuild:title>View lifecycle</lavabuild:title>

#Refresh cycle

When data changes - scopes do not refresh themselves immediately, instead they are placed into update queue 
in {@link Lava.ScopeManager}. The same for views - they have their own queue in {@link Lava.system.ViewManager}.

And there are two separate refresh cycles - for scopes ({@link Lava.ScopeManager#refresh}), 
and for views ({@link Lava.system.ViewManager#refresh}). Scopes are updated before views.

How views are refreshed: ViewManager calls `refresh()` method of all views in it's queue, which does the following:
renders view's content and replaces HTML inside view's container. Only views with container can be refreshed, 
and only views with container can be placed into the refresh queue. When views without container need to refresh - 
they find their nearest parent with container and call it's {@link Lava.view.Abstract#trySetDirty} - 
this will place their parent into refresh queue.

Views that need to be refreshed - are marked "dirty" (their {@link Lava.view.Abstract#_is_dirty} becomes <kw>true</kw>).
When view is rendered or refreshed - it clears it's "dirty" state. `refresh()` <b>will update only dirty views.</b>

Views inside refresh queue are sorted by their {@link Lava.view.Abstract#depth} property (indicates how many 
parents does a view have). Views are updated from parents to children, this allows all views to be updated only once
during refresh cycle:

```xml
<div x:type="view">
	<div x:type="view">
		{#> inner_text}
	</div>
	{#> outer_text}
</div>
```

If both Expression views change - they will place their parent views into update queue (elements with x:type="view").
Outer view will always be refreshed first - it will render everything inside it and replace HTML inside it's container.
Render operation will clear "dirty" state on the inner view, so when ViewManager calls `refresh()` of inner view - it will do nothing.

##View lifecycle

State of views is determined by the following properties:
- {@link Lava.view.Abstract#_is_inDOM} - is the view currently in DOM
- {@link Lava.view.Abstract#_is_dirty} - set when it's content in DOM should be refreshed

There is no "rendered" state, cause rendered views must be immediately inserted into DOM.
View state diagram:

<a href="/www/reference_img/view-state-diagram.png" target="_blank">
	<img src="/www/reference_img/view-state-diagram.png" style="width: 50%;"/>
</a>

<i>Red square indicates a process (not a state).</i>

State is controlled by the following methods:
- {@link Lava.view.Abstract#broadcastInDOM|broadcastInDOM} - inform hierarchy, that it's now in DOM, so now it can access it's DOM elements
- {@link Lava.view.Abstract#broadcastRemove|broadcastRemove} - inform hierarchy that now it will be removed
- {@link Lava.view.Abstract#render|render} - renders hierarchy, marks views as clean
- {@link Lava.view.Abstract#refresh|refresh} - refresh one single view with container (render and update HTML inside container)
and mark it as clean

Each of these methods controls state of hierarchy under the view: for example, if you call any broadcast* method on 
a view - it will call the same method on it's children, and they will call it on their own children.

{@link Lava.system.Template} acts like a proxy between view and it's children: it also has each or these methods
(except `refresh`). When you call broadcast* methods on a template - it calls them on it's child views.

##Created state

When a view is created - it's not in dom and clean (_is_inDOM = _is_dirty = false).

```javascript
var dummy_widget = new Lava.widget.Standard({
	is_extended: true
});
dummy_widget.set("your_name", "World");
var demo_template = Lava.TemplateParser.parse("Hello {$> your_name}!");
var template_instance = new Lava.system.Template(demo_template, dummy_widget, dummy_widget);
```

The same process happens inside Foreach and If views - they create an instance of {@link Lava.system.Template} 
for each item or branch inside them. 

##"InDOM" state

Created template can be rendered and inserted into DOM:

```javascript
Firestorm.setProperty(document.body, 'html', template_instance.render());
template_instance.broadcastInDOM();
```

This operation will move the view into "InDOM" state (right square on the diagram).
`broadcastInDOM()` informs all the hierarchy inside the template that it's now in DOM, so now it can access it's DOM elements:
attach listeners, apply animation, etc.

Very important: between rendering and `broadcastInDOM()` there must be no data modifications.
After you render a template - you should immediately insert it into DOM, then immediately call `broadcastInDOM()`.
Reason: if you modify any data after render - then rendered data will become stale.
If you violate the view lifecycle - it may lead to unexpected errors.

##Removed state

When Template is in DOM, it can be removed.

```javascript
template_instance.broadcastRemove();
// optional - clean DOM:
Firestorm.setProperty(document.body, 'html', '');
```

`broadcastRemove()` tells hierarchy, that now it going to be removed from DOM - this allows widgets to prepare for
removal: detach element listeners, if there are any, stop animations, etc. `broadcastRemove` must be dispatched 
<b>before</b> Template is actually removed, when DOM elements are still accessible.

##Refresh

At any moment a template can be rendered and inserted into DOM (even when it's already in DOM).
That's how view's {@link Lava.view.Abstract#refresh} functions: it renders view's template(s) and replaces HTML
inside it's container:

```javascript
Firestorm.setProperty(document.body, 'html', template_instance.render());
template_instance.broadcastInDOM();
```

Let's clarify this once more:

```xml
<div x:type="view">
	<div x:type="view">
		{#> inner_text}
	</div>
	{#> outer_text}
</div>
```

If `outer_text` changes, then outer view will refresh itself: it will render and replace everything inside 
it's container (outer &lt;div&gt;). View, which displays `inner_text` can be clean at this moment, but it will
be rendered anyway.

If you have listeners on DOM elements - you should remove them in `render()`, cause all existing content will be replaced.