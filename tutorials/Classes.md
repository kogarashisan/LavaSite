
#Using classes

Lava framework features extremely fast and convenient class system. Let's look at the structure of a class.
You can run this example in console:

```javascript
Lava.ClassManager.define(
'Lava.user.MyClass',
{
	Extends: 'Lava.mixin.Properties',

	Shared: 'shared_object',
	// this object will be shared across all class instances
	shared_object: {
		counter: 0
	},

	guid: 0,
	example_array: ['test'],
	example_object: {},

	init: function(properties) {
		// just as example
		this.guid = Lava.guid++;
		// call to parent's init() method
		this.Properties$init(properties);
	},

	incrementSharedCounter: function() {
		this.shared_object.counter ++;
	}
});
```

Using the generated class:

```javascript
// instance created with arguments for init() method
var instance1 = new Lava.user.MyClass({property: 'value'});
var instance2 = new Lava.user.MyClass();

 // call inherited method from Properties
instance1.set('test', 'value');

// demonstrate that arrays are not shared
instance1.example_array.push('test2');
instance1.example_array; // ['test', 'test2']
instance2.example_array; // ['test']

// demonstrate, that Shared directive works
instance1.incrementSharedCounter();
instance2.shared_object.counter; // 1
```

##Explanation

First of all, ClassManager has created a constructor for you. You can look at it's source code by typing
<str>Lava.user.MyClass</str> in console. When you create a class instance - it's `init()` method is automatically called
will all the arguments you have passed to generated constructor.

Our class extends {@link Lava.mixin.Properties} and inherits all it's properties and methods, so you can
use `get()` and `set()` methods on these objects.

All instance variables, even arrays and objects, are not shared between class instances. In this case each class instance
has it's own copy of <var>example_object</var> and <var>example_array</var>. You can make an object shared with the
"Shared" directive (currently, works only for objects, not for arrays).

##Calling parent methods

When a method is overridden in inherited class - method from parent is renamed.
New name will get parent's name and dollar sign ("$") added to it.
For example, if you inherit from Lava.mixin.Properties and override the `init()` method -
than parent's method will be called "Properties$init". If you inherit from Lava.widget.Standard -
than it will be "Standard$init".