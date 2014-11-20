
Each time you set a property - two events are fired. One for Observable interface, 
which allows you to discover new properties:

```javascript
var listener = instance.on("changed", this._onInstancePropertyChanged, this);
```

And the other - for Properties event interface, which allows you to listen for existing property changes:

```javascript
var listener = instance.onPropertyChanged("my_property", this._onMyPropertyChanged, this);
```

Naturally, you should use `onPropertyChanged` listeners, unless you specifically need the "changed" event.