
You can suspend and resume listeners. Example:
```javascript
var instance = new Lava.mixin.Properties();
var listener = instance.on('property_changed', function(){}, {});
Lava.suspendListener(listener);
Lava.resumeListener(listener);
```

##Arhitecture notes

In Lava framework you will never attach this kind of listeners to DOM elements.
Also, you will not fire custom events from DOM elements - here it makes no sense.

Also notice, that `_fire` method is protected, that means that only object itself can fire events from it's instance.
In other words, you can not fire events on behalf of other object instances, only current instance can fire an event from it's name.
This is done for one simple reason: in well-designed program you will never need to fire events from other object's instances.

However, there is need for global events. App class has explicitly defined public method to allow you to fire global events
from it's instance. This is not a workaround, but important design rule.

```javascript
// from App class source code:
Lava.app.fireGlobalEvent = function(event_name, event_args) {
	this._fire(event_name, event_args);
}

// example usage from DropDown class
Lava.app.fireGlobalEvent('close_popups');
```

