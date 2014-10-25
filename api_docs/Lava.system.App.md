
Application class constructs Modules, see reference for Data layer.

##Global events

Classes also use the App instance to fire global events for communication between class instances.
For example: {@link Lava.widget.DropDown} widget listens to it's own 'close_popups' event.
When a DropDown is expanded - this allows it to close other DropDown instances.

```javascript
// inside DropDown class
Lava.app.on('close_popups', this._onClosePopups, this); // listener closes the popup
// ...
Lava.app.fireGlobalEvent('close_popups');
```