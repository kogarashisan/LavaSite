
Serializer is commonly used by the framework to serialize templates and widget configs into JavaScript code.
Another usage example would be to change class sources during build time and serialize them back into JavaScript.

##Example usage

```javascript
var serialized_result = Lava.Serializer.serialize(Lava.Serializer);
var another_serializer = eval('(' + serialized_result + ')');
```