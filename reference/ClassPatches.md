<lavabuild:title>Class patches</lavabuild:title>

##Patches and static constructors

Sometimes you may want to apply browser fixes at run time - replace one method in a class prototype with another.
But you can not replace methods directly, as method names change during inheritance. 

Consider the following example:

```javascript
Lava.define(
'Lava.user.BottomClass',
{

	init: function() {
		// do something
	}

});

Lava.define(
'Lava.user.MiddleClass',
{

	Extends: "Lava.user.BottomClass",

	init: function() {
		this.BottomClass$init();
	}

});

Lava.define(
'Lava.user.TopClass',
{

	Extends: "Lava.user.MiddleClass",

	init: function(init_arguments) {
		this.MiddleClass$init();
	}

});
```

Depending on inherited classes, the `init` method of `BottomClass` will be named differently:
it will not be renamed inside the `BottomClass` itself, and in child classes, if they don't have their own `init`.
In `TopClass` from example above - it will be renamed to `BottomClass$init`, or into `MiddleClass$init`
(if we remove `init` from the middle class).

Now if "BottomClass" wants to replace <b>it's own</b> `init` in prototype - then it needs to find it's correct name.
ClassManager has {@link Lava.ClassManager#patch|patch} method, which does this job.

##Creating a static constructor

You can create a class with a static constructor - `init` method, which will be called only once,
when the first instance of that class is created. Then it can replace itself with another method, 
or even remove itself completely.

```javascript
Lava.define(
'Lava.user.MyParentClass',
{
	init: function(init_arguments) {
		// do something
	}
});

Lava.define(
'Lava.user.MyChildClass',
{
	Extends: "Lava.user.MyParentClass",

	// static constructor
	init: function(init_arguments) {

		// apply some decision logic and choose the new constructor name:

		// replace with a method from this class
		var new_init_name = "init_Normal";
		var new_init_name = "init_WithBrowserFix";
		// or remove the method completely (replace with parent's constructor)
		var new_init_name = "MyParentClass$init";

		// do your static constructor tasks here

		// call the new init method before it's renamed
		this[new_init_name](init_arguments);

		// rename this method in prototype
		var exact_name = Lava.ClassManager.patch(
			// must always be "this"
			this,
			// Must always be the name of CURRENT class, which you pass to Lava.define above
			"MyChildClass",
			// method to replace
			"init",
			// name of the new method
			new_init_name
		);

		// exact_name is name of the method that was replaced

	},

	// this is real constructor
	init_Normal: function(init_arguments) {

		this.MyParentClass$init(init_arguments);

	},

	// example of another constructor
	init_WithBrowserFix: function(init_arguments) {

		// do something in addition to init_Normal

		this.init_Normal(init_arguments);

	}

});
```

How this works:

```javascript
Lava.ClassManager.patch(this, "MyChildClass", "init", new_init_name);
```

This line replaces the `init` that belongs to `MyChildClass` with another method. 
It can be any method that belongs to the class, like `init_Normal` or `init_WithBrowserFix` (notice how the second calls the first one).
Or you can totally remove current `init` by replacing it with parent's version: "MyParentClass$init".

Method is replaced in prototype - this way it will be called only once for each class in inheritance chain,
when the first instance of that class is constructed. For example, if you inherit 
`MyGrandChildClass` from `MyChildClass`, then static constructor will be called for both classes:

```javascript
// each class has it's own prototype with `init` from `MyChildClass`
// so here it will be called twice (if this is the first created instance)
new Lava.user.MyChildClass();
new Lava.user.MyGrandChildClass();
```

Method which was used for replacing is assigned <kw>null</kw>, so after you call

```javascript
Lava.ClassManager.patch(this, "MyChildClass", "init", "MyParentClass$init");
```

Then reference to the current `init` method will be lost, 
and `this.Class.constructor.prototype.MyParentClass$init` will become <kw>null</kw>.

There are certain limitations to using `patch`:
1. The class may patch only itself, and never it's child or parent classes. 
In other words, replaced method must belong to current class.
2. `init` method can not be removed for the root (bottom) classes, cause generated constructor still calls it.
3. Current system allows you to replace a method only once. You can not swap them multiple times.

##Patching methods

This is simplified version of framework's `TextInputElement` container:

```javascript
Lava.define(
'Lava.view.container.TextInputElement',
{
	Extends: "Lava.view.container.Element",

	init: function(view, config, widget) {

		var needs_shim = true;

		Lava.ClassManager.patch(this, "TextInputElement", "informInDOM", needs_shim ? "informInDOM_OldIE" : "Element$informInDOM");

		this.Element$init(view, config, widget);
		Lava.ClassManager.patch(this, "TextInputElement", "init", "Element$init");

	},

	// Dummy method, which will be replaced in static constructor
	informInDOM: function() {

		Lava.t();

	},

	informInDOM_OldIE: function() {
    
    	// we have our own `informInDOM`, so parent's method exists
		this.Element$informInDOM();
		// ... apply fixes here ...

	}
});
```

Here we replace local `informInDOM` with another method with browser fixes - `informInDOM_OldIE`, 
or we remove it completely by replacing with parent's method - `Element$informInDOM`.

We need dummy `informInDOM` to rename parent's method to `Element$informInDOM` - this allows us to call it 
from `informInDOM_OldIE` and to use it for replacing.

##Direct replacement

Naturally, you can replace methods in class instance directly, and you don't need to patch prototypes for that:

```javascript
Lava.define(
'Lava.user.MyClass',
{

	init: function(config) {

		this.getWay = config.use_alternative_methods 
			? this.getWay_Alternative
			: this.getWay_Normal;

	},

	// default method that will be replaced in constructor
	getWay: function() {

		Lava.t();

	},

	getWay_Normal: function() {

		return "Way of the sword";

	},

	getWay_Alternative: function() {

		return "Way of the gun";

	},

	switchMethod: function() {

		if (this.getWay == this.getWay_Alternative) {

			this.getWay = this.getWay_Normal;

		} else {

			this.getWay = this.getWay_Alternative;

		}

	}

});

var instance = new Lava.user.MyClass({});
instance.switchMethod();
instance.getWay(); // returns "Way of the gun"
```

As you see, you can swap methods in class instance freely. And this example supports inheritance:
you can define a new class, which inherits from <str>"Lava.user.MyClass"</str>, override `getWay_Normal` and
`getWay_Alternative` methods, and it will work as expected.