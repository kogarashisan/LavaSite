
#Using classes

Lava framework features extremely fast and convenient class system. Let's look at the structure of a class.
You can run this example in console:

```javascript
Lava.define(
'Lava.user.MyClass',
{
	Extends: 'Lava.mixin.Properties',

	// By default, each class owns it's own copy of all objects and arrays from class body.
	// "Shared" directive makes objects shared between class instances.
	Shared: 'shared_object',
	// this object will be shared across all class instances
	shared_object: {
		counter: 0
	},

	// example instance properties
	guid: 0,
	example_array: ['test'],
	example_object: {},

	init: function(properties) {
		// just an example
		this.guid = Lava.guid++;
		// call to parent's init() method
		this.Properties$init(properties);
	},

	incrementSharedCounter: function() {
		this.shared_object.counter ++;
	}
});
```

Quick facts about this class:
- a constructor was generated for it, so you can run `new Lava.user.MyClass()` to create it's instance
- it extends {@link Lava.mixin.Properties}, so it inherits all it's methods and properties, like `get()` and `set()`
- It has `init()` method, which receives the arguments, passed to constructor. 
For example: `new Lava.user.MyClass({test: true})` - argument will be passed to `init()`

Quick exercise: execute the above example in console and type `Lava.user.MyClass` to see the source code of 
the generated constructor. Then explore `Lava.user.MyClass.prototype`.

Using the generated class (you can execute this example line-by-line in console):

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

`Lava.define` internally calls `Lava.ClassManager`, which creates class constructors. 
You can see generated source code by typing `Lava.user.MyClass` in console.
Generated constructor automatically calls the `init()` method, with all arguments, received by constructor.

All instance variables, even arrays and objects - are not shared between class instances. In this case each class instance
has it's own copy of <var>guid</var>, <var>example_object</var> and <var>example_array</var>. You can make an object shared with the
"Shared" directive (currently, works only for objects, not for arrays).

##Calling parent methods

When a method is overridden in inherited class - method from parent is renamed.
New name will get parent's name and dollar sign ("$") added to it.

For example, if you inherit from `Lava.mixin.Properties` and override the `init()` method -
than parent's method will be called "Properties$init". If you inherit from `Lava.widget.Standard` -
than it will be "Standard$init".

##See also

For in-depth explanation of all ClassManager features, see the corresponding {@link reference:Classes|reference}.