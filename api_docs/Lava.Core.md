
The only purpose of Core is to delegate DOM events from <var>window</var> to other classes. Usage example:

```javascript
var demo_receiver = {
	onMouseMove: function() {
		console.log('mouse moved');
	}
};

// mousemove is expensive event, so it's not delegated by default
var mousemove_listener = Lava.Core.addGlobalHandler('mousemove', demo_receiver.onMouseMove, demo_receiver);
// you should release it as soon as you don't need it
Lava.Core.removeGlobalHandler(mousemove_listener);
```

##Architecture notes

Core adds listeners to the global <var>window</var> object, one listener for each active event.
Every event listener ends with a call to `Lava.view_manager.refresh()` - this refreshes scopes and views
(there will be only one refresh cycle, even if there are several consumers for an event).