#Classes

ClassManager generates class constructors from class bodies. Generated constructor assigns instance properties 
and calls `init()`, if it exists. Methods and other shared members are assigned to generated constructor's prototype.

##Class structure

Functions and <b>RegExp</b> objects are always assigned to prototype and are shared for all class instances.
If you want to have different instances of RegExp objects for each class instance - then you can assign it in constructor.

Value types can also be safely moved to prototype, cause they are never assigned by reference
(this includes strings, nulls, booleans and numbers).

Arrays and objects are not shared by default - arrays are sliced, and objects are recursively copied:

```javascript
Lava.define(
'Lava.user.MyClass',
{
	array: [{test: true}],
	object: {
		function_property: function() {},
		array_property: [{test: true}]
	}
});
```

Generated equivalent:

```javascript
Lava.user.MyClass = function() {
	var r = this.Class.references;
	this.array = r[0].slice();
	this.object = {
		function_property: r[1],
		array_property: r[2].slice()
	}
}
```

Before class is constructed - all complex arrays and methods from objects are collected into `Class.references` array,
so they can be referenced in constructor.

The fact, that arrays are sliced from original, means that objects inside arrays will be shared across all class instances 
(see `{test: true}` objects in the example above). If you need to deep copy an array with objects - you should do it
in constructor.

##Inherited methods

Method overriding happens with the following algorithm: 
1. First, methods from parent class are copied into child's prototype
2. Then methods from child body are merged into it's prototype, but if a method with the same name already exists - 
old method is renamed (parent's name with dollar-sign are prepended to it)

Note: actual implementation significantly differs, but result is equivalent to the algorithm above.
Here is an example of method overriding:

```javascript
Lava.define('Lava.user.MyClass', {
	init: function(name) { console.log("Hello " + name); }
});

Lava.define('Lava.user.InheritedClass', {
	Extends: 'Lava.user.MyClass',
	init: function(name) {
		this.MyClass$init(name);
	}
});
```

Equivalent code:

```javascript
Lava.user.MyClass = function() {
	this.init.apply(this, arguments);
}
Lava.user.MyClass.prototype.init = function(name) { console.log("Hello " + name); }

Lava.user.InheritedClass = function() {
	this.init.apply(this, arguments);
}
// rename parent's init() in child's prototype
Lava.user.InheritedClass.prototype.MyClass$init = Lava.user.MyClass.prototype.init;
Lava.user.InheritedClass.prototype.init = function(name) {
	this.MyClass$init(name);
}
```

##Root namespaces

Before you can use ClassManager - you must register root namespaces with a call to
{@link Lava.ClassManager#registerRootNamespace}. Lava registers itself in {@link Lava#init}, this makes possible to
create classes with paths starting with "Lava.".

If you want to create global classes - you could register <var>window</var> as a root.
All class paths must start with name of a root namespace:

```javascript
Lava.ClassManager.registerRootNamespace('global', window);
Lava.ClassManager.define('global.MyClass', {/*...*/});
// paths can contain other namespaces
Lava.ClassManager.define('global.MyLibrary.MyClass', {/*...*/});

```

If intermediate namespace does not exist at the moment of definition - then it's created as empty object.
Equivalent code for the above example:

```javascript
window.MyLibrary = {}
window.MyLibrary.MyClass = function() { /*...*/ }
```

<i>Standalone ClassManager version does not register any root namespaces, so you must do it manually</i>

##Instanceof operator

Lava classes do not have prototype chain - there is no need for it. Having one prototype with all required methods and members -
is a faster, easier to debug and more convenient solution. This also means, that native JavaScript
<kw>instanceof</kw> operator does not work.

In a well-designed program there is no need for <kw>instanceof</kw> operator, cause objects of different types are not
mixed together. Strong-typed programs have less bugs, they are much easier to develop and maintain.

Instead of <kw>instanceof</kw> operator some Lava classes have a unique type marker in their class bodies,
like {@link Lava.system.Enumerable#isEnumerable}, or {@link Lava.mixin.Properties#isProperties}.
But if you really need it, there is analog of <kw>instanceof</kw> for Lava classes - {@link Lava#instanceOf}.

##Constructing classes

If you know the exact class path, you can access class constructor directly.

```javascript
// way 1: create class directly
var instance = new Lava.view.container.Element(/* ... */);
```

But often class names are stored in configs, in this case you can retrieve the constructor from ClassManager:

```javascript
// way 2: search for the constructor. Second argument is the namespace.
var constructor = lava.ClassManager.getConstructor('Element', 'Lava.view.container');
var instance = new constructor(/* ... */);
// or you can pass full path
var constructor = lava.ClassManager.getConstructor('Lava.view.container.Element');
```

See also: {@link Lava.ClassManager#getConstructor} source code.

##Lava.define

Before call to {@link Lava#init} - {@link Lava#define} puts class bodies into {@link Lava#classes} object,
and after call to `init()` - it becomes direct proxy to {@link Lava.ClassManager#define}.
`init()` then recursively loads all class bodies, stored in {@link Lava#classes} - this is done to allow user to modify any classes
before they are loaded ("monkey patching").

Although such possibility exists - you should not misuse it.
It's designed for such rare cases like "add possibility to switch locales on the fly", or applying patches,
so if you really want to modify core classes - think again, it may be a sign that you are doing something wrong.
For most of your needs inheritance is more than enough.

<b>When writing your own classes - you must not call {@link Lava.ClassManager#define} directly,
use {@link Lava#define} instead.</b>

<i>In standalone ClassManager version `Lava.define` is an alias to `Lava.ClassManager.define`.</i>

##Architecture notes

Class body, passed to `define()` is "disassembled" into <var>skeleton</var> - internal structure, which describes all class members.
<var>skeleton</var> is then used for class extension and constructor generation.
While building the <var>skeleton</var>, ClassManager stores functions from class body into <var>references</var> array.

All internal class data is stored in <var>Class</var> property of each constructed instance,
and described in {@link _cClassData} helper object. For example, have a look at:

```javascript
// type in console
Lava.widget.Standard.prototype.Class;

// or inside a class instance:
// this.Class
```

Keep in mind, that everything inside <var>Class</var> is readonly.

##Class directives

###Extends

All members from parent class are merged into inherited class.
Certain limitations exist, for example if member of parent class was a function,
than it cannot become a string or object in child (adequate programmer should not try to do it, anyway).
Objects from parent and child are merged recursively.

When a method is overridden in child class - parent's method is renamed:
a prefix of short parent's name and dollar sign are added before it. For example,
when you inherit from "Lava.data.field.Abstract" - all parent methods will start with "Abstract$".

Multiple inheritance is not allowed. Usage example:

```javascript
Lava.define(
'Lava.widget.MyWidget',
{
	Extends: 'Lava.widget.Standard',

	init: function(config, widget, parent_view, template, properties) {
		this.Standard$init(config, widget, parent_view, template, properties);
	}

});
```

<b>Rule of thumb: you can only call overridden methods of a class you directly inherit.
You can not skip a call to parent's method and call "grandfather's" methods directly.</b>

Naming limitation: you can not have two classes with same short name in one inheritance chain 
(short name is the name after the last dot). For example: you can not create a class `Lava.widget.input.Abstract`, 
inherited from `Lava.widget.Standard`, cause the latter inherits from `Lava.view.Abstract`. This limitation arises from
the algorithm of {@link Lava.ClassManager#patch} (see {@link reference:ClassPatches}).

###Implements

Is similar to Extends, with one difference: if child overrides a parent's method -
than overridden method is not renamed, but simply ignored.

In other words - it copies to child everything, that does not already exists there. Example:

```javascript
Lava.define(
'Lava.user.MyClass',
{
	Implements: ['Lava.mixin.Properties', 'Lava.user.MyMixin']
});
```

Implements can be used together with Extends. Several classes may be implemented with one directive.

###Shared

Shared objects and arrays are moved to prototype, this makes them common to all class instances.

When you inherit shared objects from parent - they are copied.
In the following example, all instances of "MyClass" and "InheritedClass" will have two different copies of `_shared_object`
in their prototype. That means, that all instances of MyClass will have one copy of `shared_counter`,
and all instances of InheritedClass will have their own.

At the same time, `other_object` is copied by reference,
so it will be shared among all class hierarchy, and `true_shared_counter` will be shared between parent and inherited class.

```javascript
Lava.define('Lava.user.MyClass', {
	Shared: '_shared',
	// Shared: ['_shared_object', '_shared_array'], // you can share multiple objects
	_shared_object: {
		shared_counter: 0,
		other_object: {
			true_shared_counter: 0
		}
	},
	_shared_array: []
});

Lava.define('Lava.user.InheritedClass', {
	Extends: 'Lava.user.MyClass',
	
	_shared_object: {
		hello: "World"
	}
});
```

Equivalent generated code:

```javascript
// parent class
Lava.user.MyClass = function() {/*...*/}
Lava.user.MyClass.prototype._shared_object = {
	shared_counter: 0,
	other_object: {
		true_shared_counter: 0
	}
};
Lava.user.MyClass.prototype._shared_array = []

// inherited class
Lava.user.InheritedClass = function() {/*...*/}
// copy shared object from parent
Lava.user.InheritedClass.prototype._shared_object = Firestorm.Object.copy(Lava.user.MyClass.prototype._shared_object);
// and merge own properties of inherited class
Lava.user.InheritedClass.prototype._shared_object.hello = "World";
// arrays are assigned and overridden as-is
Lava.user.InheritedClass.prototype._shared_array = Lava.user.MyClass.prototype._shared_array;
```

When you override a shared object in inherited class - it's merged with parent (child members have priority).
Several properties can be shared with one directive (`Shared: [/*...*/]`).

##Limitations

You can not use compressor/mangler that renames methods in class bodies, cause this will break inheritance.
Good-behaving compression tools will not do it, anyway.

##See also

{@link reference:Packages}
