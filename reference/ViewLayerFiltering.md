<lavabuild:title>View layer filtering</lavabuild:title>

#View layer filtering

##Role of Enumerable in Foreach views

{@link Lava.view.Foreach} view always works with Enumerable or DataView, regardless of value, returned from it's Argument.
When Argument returns a Properties instance, plain JavaScript array or common object -
then a new Enumerable instance is constructed and filled with values from argument result.

Enumerable UIDs are used by Foreach view to cache it's item templates: they are stored in
{@link Lava.view.Foreach#_current_hash} - keys are UIDs, and values are {@link Lava.system.Template} instances.
Each time an UID is added or removed from source Enumerable - a new template is created or destroyed in the hash -
this allows to apply animation to template insertion and removal. And that's why using Enumerable for data binding 
may result in faster performance.

Certain Enumerable operations, like `sort()` or `filter()` - preserve existing UIDs, so if you bind Foreach directly to Enumerable,
then you can perform sorting faster, cause templates will not be destroyed or created during view refresh. 
This will also allow you to reorder existing elements in DOM and apply animations.

When you bind Foreach to plain object or Properties - UIDs are also preserved, so it's also possible to apply animation.
However, when Enumerable is refreshed from native JavaScript array - a whole new set of UIDs is generated,
so in this case you can not apply animation properly.

##Lava.scope.Foreach

Functionality of Foreach view is split into two parts: the view itself, which manages templates, 
and {@link Lava.scope.Foreach}, which prepares Enumerable for the view.

When Argument of the scope returns Enumerable or DataView - scope passes it to view without modifications (default behaviour).
If Argument returns Properties, plain JavaScript array or object - then scope constructs an Enumerable instance from 
argument result and supplies it to it's view. Scope also listens for changes in data source
and refreshes it's Enumerable when needed (for example, when a new property is added to Properties).

From it's side, Foreach view creates and destroys templates, which correspond to items in Enumerable.

##Application

View filtering exists to satisfy the following requirements:
1. You need to sort and filter items in Foreach.
2. Item templates in Foreach can be independently inserted and removed from DOM. 
3. When you perform sorting or filtering - each item is inserted or removed independently from others.
4. Animation can be applied to item sorting, insertion and removal.

Simplest way to satisfy the second requirement would be to put one view with an Element container inside item template,
but in real world scenarios it can be any region, delimited by HTML elements (like Morph container, 
or plain text between any HTML tags).

To satisfy the last two - there must be Enumerable/DataView pair, so you could preserve UIDs while performing 
sorting and filtering operations.

Scope supports two options: 
- `own_enumerable_mode`: can be "DataView" or "Enumerable"
- `depends`: semicolon-separated list of paths to properties, that will trigger scope refresh when changed

Scope also emits {@link Lava.scope.Foreach#event:after_refresh} event, which is the right moment to apply changes (see example below).

##Example

<lavabuild:codeblocks>
	<codeblock title="Template" lang="xml">
{$foreach(records)
	as=record
	own_enumerable_mode=DataView
	depends="$example.filter_text"}
	<x:roles>$example.main_foreach</x:roles>
	<x:refresher>{type: 'Standard'}</x:refresher>
	<div x:type="container">
		{#> record.title}
	</div>
{/foreach}
	</codeblock>
	<codeblock title="Class" lang="javascript">
Lava.define(
'Lava.widget.Example',
{
	Extends: 'Lava.widget.Standard',
	name: "example",

	_properties: {
		filter_text: '',
		records: null
	},

	_role_handlers: {
		main_foreach: '_handleMainForeachView'
	},

	_handleMainForeachView: function(foreach_view) {

		foreach_view.getScope().on('after_refresh', this._onAfterForeachScopeRefreshed, this);

	},

	_onAfterForeachScopeRefreshed: function(foreach_scope) {

		foreach_scope.getValue().filter(function(record){

			return record.get('title').indexOf(this._properties.filter_text) != -1;

		});

	}

});
	</codeblock>
</lavabuild:codeblocks>

This example performs filtering of `records` inside Foreach when `filter_text` property changes.

First, template defines a Foreach with single view inside (&lt;div x:type="container"&gt;).
Such templates can be inserted and removed independently with standard framework functionality.

&lt;x:refresher&gt; directive defines refresher - a unit, which performs insertion and removal of templates
(without refresher list would be re-rendered with each change).
`own_enumerable_mode` and `depends` options are passed directly to scope (Foreach view does not care, if they are present).

And finally, view is registered with a role, which attaches handler to scope's <str>"after_refresh"</str> event:

```javascript
foreach_view.getScope().on('after_refresh', this._onAfterForeachScopeRefreshed, this);
```

<str>"after_refresh"</str> is raised every time:
- Argument value changes (it returns another instance of Enumerable, array, or something else).
- data source changes. For example, if argument has returned Properties, and one it's property has changed.
- scope from "depends" changes. That's the purpose of the "depends" options.

For this example to work, `records` must be instance of Enumerable (plain array will not work).
By default, scope.Foreach passes Enumerable to it's view, but `own_enumerable_mode` forces it to create a DataView
instance and refresh it from argument result. The `foreach_scope.getValue()` expression in the handler retrieves that
DataView instance and filters it.

Data flow in this example:

```text
$example.records -> Argument -> scope.Foreach -> DataView -> view.Foreach
```

##Limitations

First of all, you should never edit original Enumerable instance in <str>"after_refresh"</str> event.
Framework was not designed for such behaviour; it may also lead to unmaintainable program architecture.
if you listen to <str>"after_refresh"</str> event - then do not forget to provide `own_enumerable_mode` option.

Also be careful about data modifications in <str>"after_refresh"</str> event handler. It's absolutely safe to retrieve 
the DataView from scope (`foreach_scope.getValue()`), then filter and sort it. You can also modify data, 
that is displayed inside the current Foreach view (see the related 
<a href="/www/examples.html#ViewLayerFiltering">"View layer filtering"</a> example - it does just that).

But you should not modify data, that is displayed outside of the current Foreach view, especially in it's parents:
this may lead to performance degradation and errors in view refresh system.

##See also

See the view-layer filtering examples: <a href="/www/examples.html#ViewLayerFiltering">list</a>, <a href="/www/examples.html#FilteredTree">tree</a>.

Also you are recommended to study the source of {@link Lava.scope.Foreach} and {@link Lava.view.Foreach} - 
it will answer all your questions and give you clear understanding.