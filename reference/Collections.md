
#Collections

Collection classes are used for data binding. They provide "collection_changed", "items_added" and "items_removed"
events, which are used by views to refresh displayed data.

##Enumerable

{@link Lava.system.Enumerable} is an array-like collection of objects, but for each value it also generates a UID 
(Unique item ID) and stores "name" - the key of the item, when Enumerable was updated from Properties or an object. 

Internally it has three arrays:

```javascript
_data_uids: [],
_data_values: [],
_data_names: []
```

They are gap-less and always of the same length. Each index in these arrays holds corresponding UID, name and value.

Unique IDs are generated automatically for every new value, which you add into Enumerable.
Please note, that they are not <b>globally</b> unique - each Enumerable has it's own UID counter, which starts from zero.

All methods that add new values, also have a way to supply their names, for example:

```javascript
push: function(value, name) { ... }
```

When `name` is not supplied - then it's set to <kw>null</kw>.
When you remove a value from Enumerable - corresponding UID and name are also removed.

You are recommended to have a look at {@link Lava.system.Enumerable} API to get familiar with this class.
Most important methods are `sort()` and `filter()` - they preserve existing UIDs.

##DataViev

{@link Lava.system.DataView} is designed to display a subset of items from existing Enumerable or another DataView instance, 
preserving original item UIDs. Unlike Enumerable, DataView does not have any methods to directly add new items,
but it can be refreshed from it's data source, then filtered and sorted.

Just like Enumerable, DataView inherits from {@link Lava.system.CollectionAbstract},
and you can use it for data binding.

Example usage:

```javascript
var collection = new Lava.system.Enumerable();
collection.push("one");

var data_view = new Lava.system.DataView(collection);
data_view.getUIDs(); // [1]

collection.push("two");
data_view.refresh();

data_view.getUIDs(); // [1, 2]
```

##Role of UIDs in data binding

Foreach views in templates use Enumerable and DataView to display lists of items. 
Presence of UIDs allows views to track changes in collections and apply animations to added and removed templates.