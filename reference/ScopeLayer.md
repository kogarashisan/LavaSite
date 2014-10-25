<lavabuild:title>Scope layer</lavabuild:title>

#Scope layer

The term "scope layer" refers to classes inside the src/Scope folder.
These classes provide data bindings for view layer. Most likely, you will not need to use any of them directly,
but view system depends on them, so it's important to understand how they work.

All scopes extend {@link Lava.mixin.Refreshable}, which allows them to form a hierarchy of dependent instances.
Hierarchy is needed to maintain correct refresh order.

##PropertyBinding

{@link Lava.scope.PropertyBinding} can be used to bind to instances of {@link Lava.mixin.Properties} mixin.
It's used to bind to views and widgets, since they all extend it.

You can execute the following example in your browser's console:

```javascript
var binding_target = new Lava.mixin.Properties({
	test: 'value1'
});
// second parameter is property name, third will be explained later
var property_binding = new Lava.scope.PropertyBinding(binding_target, 'test', 0);

property_binding.getValue(); // returns 'value1'

binding_target.set('test', 'new value');
property_binding.getValue(); // still returns 'value1'

Lava.ScopeManager.refreshScopes();
property_binding.getValue(); // now returns 'new value'
```

As you see, scope did not refresh it's value immediately, only after calling {@link Lava.ScopeManager#refreshScopes}.
Alternatively, you can make a click anywhere on page: every DOM event listener callback ends with a call to `refreshScopes`.

How it works:
- when you call `set` on `binding_target` - scope receives the "property changed" event from {@link Lava.mixin.Properties}
- scope places itself into refresh queue in {@link Lava.ScopeManager}
- on every refresh cycle {@link Lava.ScopeManager} calls {@link Lava.mixin.Refreshable#doRefresh} of every scope in it's queue.
During this process new scopes may be added into the queue. Process stops when there are no scopes to refresh.
- when PropertyBinding instance receives `doRefresh` call - it compares the old and new property values of the bound object.
If values differ - it refreshes it's local value and fires it's own {@link Lava.scope.PropertyBinding#event:changed} event.

```javascript
var test_handler = {
	onChanged: function() {console.log('Inside the changed event handler');}
};
var listener = property_binding.on('changed', test_handler.onChanged, test_handler);

binding_target.set('test', 'This value differs from previous');
Lava.ScopeManager.refreshScopes();
// you will see "Inside the changed event handler" in console

property_binding.removeListener(listener);
```

Also note, that bound property does not necessarily need to exist:
```javascript
var example_binding = new Lava.scope.PropertyBinding(new Lava.mixin.Properties(), 'test', 0);
example_binding.getValue(); // returns undefined
```

###Setiing bound values

To provide two-way binding for input controls, PropertyBinding, {@link Lava.scope.DataBinding}
and {@link Lava.scope.Segment} support setting the bound value.

```javascript
property_binding.setValue('this value was set via setValue');
```

##DataBinding

{@link Lava.scope.DataBinding} is constructed from PropertyBinding and binds to property of it's value.
PropertyBinding itself may return anything: object, instance of Properties, Enumerable, string or even null.

```javascript

// ... previous example goes here ...

binding_target.set('test', {
	property_of_test: 'second level property'
});
var data_binding = new Lava.scope.DataBinding(property_binding, 'property_of_test', 0);

// or:
// var data_binding = property_binding.getDataBinding('property_of_test');

data_binding.getValue(); // returns 'second level property'
```

Note, that if you bind to a plain object, like in previous example, DataBinding will not detect changes to it's properties.

```javascript
var data_source = binding_target.get('test');
data_source.property_of_test = 'new value'; // it's a plain object

Lava.ScopeManager.refreshScopes();
data_binding.getValue(); // still returns 'second level property'

// now we assign completely new object
binding_target.set('test', {
	property_of_test: 'new value of object property'
});
Lava.ScopeManager.refreshScopes();
data_binding.getValue(); // now returns 'new value of object property'
```

There are two ways to make DataBinding to detect changes: either to bind it to a Properties instance,
or change the whole object, to which it's bound - in that case it will receive 'changed' event from PropertyBinding
and update itself. Example of binding to an object:

```javascript
// now it will always detect changes
binding_target.set('test', new Lava.mixin.Properties({
	property_of_test: 'new value of object property'
}));

binding_target.get('test').set('property_of_test', 'this will be detected');
```

###Binding to Enumerable indices

You can bind to Enumerable indices, and be notified when bound index changes.
```javascript
var demo_enumerable = new Lava.system.Enumerable(['initial value']);
property_binding.setValue(demo_enumerable);
var index_data_binding = property_binding.getDataBinding('0');
demo_enumerable.replaceAt(0, 'new value at index 0');
// data_binding has received 'collection_changed' event from Enumerable and will update it's value
```

##Segments

Segments bind to a dynamically selected property name.

```javascript
var data_source = new Lava.mixin.Properties({
	people: {
		good_man: 'Harry Potter',
		bad_man: 'Lord Voldemort'
	},
	name_source: 'good_man' // we will show `data_source.people.good_man`
});

// the scope, which will tell us, who we want to show
var name_source_binding = new Lava.scope.PropertyBinding(data_source, 'name_source', 0);
// in practice, container will be instance of view, not PropertyBinding
var container = new Lava.scope.PropertyBinding(data_source, 'people', 0);
var segment = new Lava.scope.Segment(container, name_source_binding, 0);
segment.getValue(); // returns 'Harry Potter'

name_source_binding.setValue('bad_man');
Lava.ScopeManager.refreshScopes();
segment.getValue(); // now returns 'Lord Voldemort'
```

Note, that you cannot bind directly to the root `data_source` object: you need another property inside it,
in this case `people`. But in practice, it's not a problem, since all properties belong to a widget.

```javascript
var test_widget = new Lava.widget.Standard({is_extended: true});
test_widget.setProperties({
	good_man: 'Harry Potter',
	bad_man: 'Lord Voldemort',
	name_source: 'good_man' // we will show `data_source.people.good_man`
});

var name_source_binding = test_widget.getDataBinding('name_source'); // returns instance of Lava.scope.PropertyBinding
var segment = test_widget.getSegment(name_source_binding); // returns instance of Lava.scope.Segment
segment.getValue(); // returns 'Harry Potter'

name_source_binding.setValue('bad_man');
Lava.ScopeManager.refreshScopes();
segment.getValue(); // now returns 'Lord Voldemort'
```

Internally, Segment gets the property name, which it should bind to, from `name_source_binding` scope.
And then calls getDataBinding from it's value container (first argument, either scope or widget).

See also: {@link Lava.widget.Standard#getDataBinding}.

###setValue on DataBinding and segment

Unlike PropertyBinding, which is always bound to a widget, Segment and DataBinding may be bound to different
kinds of objects, which may be null sometimes. If setValue is impossible - it will be ignored silently.

##Scope caching

Once you bind to another property - a new scope is created. When you bind to the same property again, you will receive
the same scope instance. Segments are also cached.

```javascript
var test_widget = new Lava.widget.Standard({is_extended: true});
var binding1 = test_widget.getDataBinding('property1');
var binding2 = binding1.getDataBinding('property2');

binding1 == test_widget.getDataBinding('property1'); // true
binding2 == binding1.getDataBinding('property2'); // true

var segment = test_widget.getSegment(binding1);
segment == test_widget.getSegment(binding1); // true
```

