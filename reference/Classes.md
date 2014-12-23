
#Classes

##Root namespaces

Before you can use ClassManager - you must register root namespaces with a call to
{@link Lava.ClassManager#registerRootNamespace}. Lava registers itself in {@link Lava#init}, this makes possible to
create classes with paths starting with "Lava.".

If you want to create global classes - you could register <var>window</var> as a root.
Anyway, class paths must start with name of a root namespace:
```javascript
Lava.ClassManager.registerRootNamespace('global', window);
Lava.ClassManager.define(
	'global.MyClass', // path starts with namespace name
	{/*...*/}
);
```

##Lava.define

Before call to {@link Lava#init} - {@link Lava#define} puts class bodies into {@link Lava#classes} object,
and after call to `init()` - it becomes direct proxy to {@link Lava.ClassManager#define}.
`init()` then recursively loads all class bodies, stored in {@link Lava#classes} - this is done to allow user to modify any classes
before they are loaded (you have direct access to class bodies).

Although such possibility exists - you should not misuse it.
It's designed for such rare cases like "add possibility to switch locales on the fly", or applying patches,
so if you really want to modify core classes - think again, it may be a sign that you are doing something wrong.
For most of your needs inheritance is more than enough.

<b>When writing your own classes - you must not call {@link Lava.ClassManager#define} directly,
use {@link Lava#define} instead.</b>

##Instanceof operator

Lava classes do not have prototype chain - there is no need for it. Having one prototype with all methods and members
from parents is faster, easier to debug and more convenient solution. This also means, that native JavaScript
<kw>instanceof</kw> operator does not work.

In a well-designed program there is no need for <kw>instanceof</kw> operator, cause objects of different types are not
mixed together. Strong-typed programs have less bugs, they are much easier to develop and maintain.

Instead of <kw>instanceof</kw> operator some Lava classes have a unique type marker in their class bodies,
like `isEnumerable` in {@link Lava.system.Enumerable}, or `isProperties` in {@link Lava.mixin.Properties}.
But if you really need it, then there is analog for Lava classes - {@link Lava#instanceOf}.

##Constructing classes

If you know the exact class path, you can access class constructor directly.
When class name is stored in configs, you can search for the constructor:

```javascript
// way 1: create class directly
var instance = new Lava.view.container.Element(/* ... */);
// way 2: get constructor first
var constructor = lava.ClassManager.getConstructor('Element', 'Lava.view.container');
var instance = new constructor(/* ... */);
// or you can pass full path
var constructor = lava.ClassManager.getConstructor('Lava.view.container.Element');
```

See also: {@link Lava.ClassManager#getConstructor} source code.

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

All value members, like <kw>null</kw>'s, strings, numbers and booleans - are moved to constructor's prototype,
while constructor itself creates everything that should not be shared between class instances, like arrays and objects.
Arrays are `slice()`'d from original, so if there are objects inside - they will not be cloned.

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

Rule of thumb: you can only call overridden methods of a class you directly inherit.
You can not skip a call to parent's method and call "grandfather's" methods directly.

Naming limitation: you can not have two classes with same short name in one inheritance chain 
(short name - name after the last dot). For example: you can not create a class `Lava.widget.input.Abstract`, 
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

Shared objects are moved to prototype, this makes them common to all class instances.
Currently, only objects can be shared.

When you inherit shared objects from parent - they are copied.
In the following example, all instances of "MyClass" and "InheritedClass" will have two different copies of `_shared`
in their prototype. That means, that all instances of MyClass will have one copy of `shared_counter`,
and all instances of InheritedClass will have their own.

At the same time, `shared_object` is copied by reference,
so it will be shared among all class hierarchy, and `true_shared_counter` will be shared between parent and inherited class.

```javascript
Lava.define('Lava.user.MyClass', {
	Shared: '_shared',
	_shared: {
		shared_counter: 0,
		shared_object: {
			true_shared_counter: 0
		}
	}
});

Lava.define('Lava.user.InheritedClass', {
	Extends: 'Lava.user.MyClass'
});
```

When you override a shared object in inherited class - it's merged with parent (child members have priority).
Several properties can be shared with one directive (`Shared: [/*...*/]`).

##Exporting and loading classes

In production environment you can speed up class generation even more, if you export generated class data.
See the build script for an example usage of `exportClass()` and `loadClass()`.

Build script does not export skeletons, cause they are rather heavy.
But they are needed for inheritance, so you have two choices: either inherit your classes on server and export them
in the same way, or manually export only the skeletons you need.

##See also

{@link reference:Packages}