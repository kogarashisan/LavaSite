<lavabuild:title>Properties and events</lavabuild:title>

#Properties and events

Properties and events are the basement of Lava framework.
You can execute the following example in your browser's console:

```javascript
var instance = new Lava.mixin.Properties();
// you can also create it with initial properties
var instance = new Lava.mixin.Properties({
	property1: 'value1',
	property2: 'value2'
});
// when you get or set a property - it does not necessarily need to be defined
instance.set('test', 123);
instance.get('test'); // returns 123
```

At first glance, it may seem inconvenient to type those ".get()" and ".set()" every time you want to access a property,
but in practice it's very easy to develop this way, cause behaviour is transparent.

There are also two kinds of events, one is regular event, added with "on":

```javascript
var demo_responder = {
	onPropertyChanged: function(observable, event_args, native_args) {
		console.log('property changed: ' + event_args.name);
	}
}
// arguments: event name, callback, context
var listener = instance.on('property_changed', demo_responder.onPropertyChanged, demo_responder);

instance.set('test', 'new value');
// will print 'property changed: test' in console
```

In Lava framework you do not need to create bound functions for listener callbacks. Instead, you will supply the <b>context</b>
for calling listener callback (context will become "<kw>this</kw>" inside the callback). It's faster than wrappers,
and this way you avoid writing unnecessary code.

You can suspend, resume and remove listeners:

```javascript
// now you will not receive 'property_changed' event, but listener is still attached
Lava.suspendListener(listener);
// turn it back on
Lava.resumeListener(listener);
// remove it completely
instance.removeListener(listener);
```

##Property listeners

There is another kind of listeners - for single property:

```javascript
var demo_responder = {
	onTestChanged: function(observable, event_args, native_args) {
		console.log('test property changed');
	}
}
var listener = instance.onPropertyChanged('test', demo_responder.onTestChanged, demo_responder);
instance.set('test', 'another value');
// you will see 'test property changed' in console

instance.removePropertyListener(listener);
```

Notice how you remove this kind of listeners: you call `removePropertyListener` instead of `removeListener`.
Property listeners can also be suspended and resumed.

Now you are encouraged to have a look at the source of {@link Lava.mixin.Observable} and {@link Lava.mixin.Properties}.