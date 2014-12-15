
Serializer is commonly used by the framework to serialize templates and widget configs into JavaScript code.
Another usage example would be to change class sources during build time and serialize them back into JavaScript.

##Example usage

```javascript
var source_object = {
	test: true,
	exampleMethod: function() { return true; }
}
// using default instance
var serialized_result = Lava.serializer.serialize(source_object);
var another_object = eval('(' + serialized_result + ')');
another_object.exampleMethod();
```