
#Refreshers

You need refreshers when you want to insert templates independently from each other: either for performance reasons, 
or when you need to apply animation to insertion and removal. Excellent example is the Tree widget:
when node is expanded - you don't want to re-render whole tree, just children of that node. 

Refreshers are used only by Foreach and If views.

##Using Emulated containers

{@link Lava.view.container.Emulated|Emulated} container is "invisible" - it does not have any real HTML elements:

```javascript
// Lava.view.container.Emulated
wrap: function(html) {
	return html;
}
```

There is no universal way to remove content from it, so calls to `setHTML` and `remove` will
throw an error. But you can use surroundings to insert HTML into an Emulated container:

```xml
<div x:type="view"></div>
{$if(is_expanded)}
	<x:container_config>
		{
			type: "Emulated",
			options: {
				prepender: 'AfterPrevious'
			}
		}
	</x:container_config>
	<x:refresher>{type: 'Standard'}</x:refresher>
	<div x:type="view">
		text
	</div>
{/if}
```

Here we have a view with an Element container, followed by a view with Emulated container.
When you prepend HTML to this Emulated container - it's the same as if you appended it after the previous view.

Internally, container has two options: "appender", which replaces it's `appendHTML` class method, and "prepender", 
which replaces `prependHTML`. And you have the following methods to choose from:

```javascript
// _appendBottom algorithm:
this._view.getParentView().getContainer().appendHTML(html);
// _appendTop:
this._view.getParentView().getContainer().prependHTML(html);
// _appendAfterPrevious:
this._view.getTemplate().getPreviousView(this._view).getContainer().insertHTMLAfter(html);
// _appendBeforeNext:
this._view.getTemplate().getNextView(this._view).getContainer().insertHTMLBefore(html);
```

In options you should amend the "_append" part, so `prepender: 'AfterPrevious'` will attach `_appendAfterPrevious` method:

```javascript
// in Emulated container constructor
// - this is executed when you supply `prepender: 'AfterPrevious'` option
this.prependHTML = this._appendAfterPrevious
```

As you see, you can also insert HTML before the next view in template, and at the top and bottom of view's parent container.
The If view does not use `prependHTML` to refresh - it uses `setHTML`, so <b>without Refresher this example will not work</b>.

Tip: if your view has real container, like Element or Morph - then you don't need to use Emulated container.
Common usage for Emulated containers is to make your HTML lighter (for example, in trees).

See also: source of {@link Lava.view.container.Emulated}.

##Creating a refresher

There are two ways to create a refresher: you either configure it in template, or call `createRefresher()` directly.

Example - setting config:

```xml
{$if($my_panel.is_expanded)}
	<x:refresher>{type: 'Standard'}</x:refresher>
	<div x:type="view">
		...
	</div>
{/if}
```

Example - creating refresher directly:

<lavabuild:codeblocks>
	<codeblock title="Template" lang="xml">
{$if($my_panel.is_expanded)}
	<x:roles>$my_panel.content_if</x:roles>
	<div x:type="view">
		...
	</div>
{/if}
	</codeblock>
	<codeblock title="Javascript" lang="javascript">
Lava.define(
'Lava.widget.MyPanel',
{
	Extends: 'Lava.widget.Standard',
	name: 'my_panel',
	
	_role_handlers: {
		content_if: '_handleContentIf'
	},
	
	_handleContentIf: function(view) {
	
		view.createRefresher({type: 'Standard'});
	
	}
});
	</codeblock>
</lavabuild:codeblocks>

Refresher is part of static template configuration, so once it was created - it can not be removed.

Important: you should call `createRefresher()` only in role handlers, before any templates are created.

##View-refresher interaction

View stores it's refresher instance in `this._refresher` property. When refresher is created - view also modifies 
it's template-controlling algorithms, so they use refresher API rather than view's own methods.

View interacts with refresher by loading templates into it: in `render` and `refresh` it loads templates, 
which need to be in DOM, and on argument changes - it loads templates which need to be removed.

From source of the {@link Lava.view.Foreach}:

```javascript
_renderContent_Refresher: function() {

	this._requires_refresh_children && this._refreshChildren();
	return this._refresher.render(this._current_templates);

},
_refresh_Refresher: function() {

	this._requires_refresh_children && this._refreshChildren();
	this._refresher.refresh(this._current_templates);

},

_removeTemplates_Refresher: function(removed_templates) {

	this._refresher.prepareRemoval(removed_templates);

}
```

View is responsible for construction and destroying of templates, while refresher inserts templates into DOM, 
removes them from DOM and applies insertion and removal animations.

##From refresher's side

Refresher needs to be able to manipulate templates independently, this means that template content must be surrounded 
by HTML elements. If template is a piece of plain text - it can not be removed from DOM independently, cause in this 
case sequential templates will be glued together during rendering.

How template removal algorithms work:

```javascript
// Lava.view.refresher.Standard
_getStartElement: function(template) {

	return template.getFirstView().getContainer().getDOMElement();

},
_getEndElement: function(template) {

	return template.getLastView().getContainer().getDOMElement();

},
_removeTemplate: function(template) {

	var start_element = this._getStartElement(template),
		end_element = this._getEndElement(template);

	template.broadcastRemove();

	if (start_element == end_element) {

		Firestorm.Element.destroy(start_element);

	} else {

		Firestorm.DOM.clearOuterRange(start_element, end_element);

	}

}
```

Refresher gets the first and the last DOM nodes of a template, then removes everything between them, including 
nodes themselves. Examples of templates, that can be separated from each other:

<lavabuild:codeblocks>
	<codeblock title="Template" lang="xml">
{$foreach(items) as=item}
	<div x:type="view">
		text
	</div>
{/foreach}
	</codeblock>
	<codeblock title="Template" lang="xml">
{$foreach(items) as=item}
	<div x:type="view">...</div>
	text...
	<div x:type="view">...</div>
{/foreach}
	</codeblock>
	<codeblock title="Template" lang="xml">
{$foreach(items) as=item}
	<div x:type="view">...</div>
	plain text
{/foreach}
	</codeblock>
</lavabuild:codeblocks>

Standard algorithm assumes, that template is surrounded by views, so templates from the first and second examples
can be removed with standard algorithm. However, the last example requires you to provide your own algorithm for 
getting the last template node, something like the following:

```javascript
view.createRefresher({
	type: 'Standard',
	get_end_element_callback: function(template) {

		// in this case getLastView returns the only view inside template
		return template.getLastView().getContainer().getDOMElement().nextSibling;

	}
});
```

For the third template, we know that each &lt;div x:type="view"&gt; is followed by exactly one DOM text node, 
which is followed by another &lt;div x:type="view"&gt; of the next item. Foreach view also has Morph container, 
so the last item's text will not be glued with text after Foreach.

##Insertion and refresh

Each time view needs to be refreshed - it loads the list of it's current templates into refresher:

```javascript
this._refresher.render(this._current_templates);
// or
this._refresher.refresh(this._current_templates);
```

First, refresher removes from DOM those templates, which are not in list, then renders and inserts new templates 
and reorders existing ones. New templates are inserted after the last node of previous template:

```javascript
Firestorm.DOM.insertHTMLAfter(this._getEndElement(previous_template), template.render());
```

If template is already in DOM, then it's nodes are moved after the previous template to apply sorting:

```javascript
Firestorm.DOM.moveRegionAfter(
	this._getEndElement(previous_template), 
	this._getStartElement(template), 
	this._getEndElement(template)
);
```

##Animation

When animation is enabled - then templates are animated before removal, and new templates are animated after 
insertion into DOM. Technically it's also possible to apply animations that reorder templates.

Templates are removed by view with call to {@link Lava.view.refresher.Standard#prepareRemoval} method, which does not 
remove templates immediately, but instead puts them into {@link Lava.view.refresher.Standard#_remove_queue}.
Removal animation does not start until call to {@link Lava.view.refresher.Standard#refresh}.

If view returns the template into DOM, and removal animation is still playing - 
then it's reversed. In other words: if view returns template to DOM before it was actually removed by refresher - 
then template is not re-rendered, just it's animation is reversed.

View listens to {@link Lava.view.refresher.Standard#event:removal_complete} event to take care of templates, 
that were removed from DOM (usually, view will destroy them).

See the source of refreshers for better understanding.