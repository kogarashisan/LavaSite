<lavabuild:title>Widget config extension</lavabuild:title>

#Widget config extension

There are two kinds of inheritance in Lava: inheritance of classes, and inheritance of widget configs.
You can inherit your widget controllers from {@link Lava.widget.Standard} or from any other widget class.
But widget configs are also inherited: when you define a widget, which extends another global widget -
it's config is merged with parent <i>at run time</i>.

This process is a bit "magic". 
You are highly discouraged to use any hacks or magic in your own code - usually it's very harmful,
but in case of Lava framework - "magic" is used more like a software design pattern.
It's a key part of framework design, so it's important to understand how it works.

Widget configs have the following key properties:

- {@link _cView#type|type} - equals to <str>"widget"</str>. Defines type of item in template
- {@link _cWidget#extends|extends} - name of global widget this config extends
- {@link _cView#class|class} - either real class of widget's controller, or special "gateway"
- {@link _cView#real_class|real_class} - class of widget's controller
- {@link _cWidget#is_extended|is_extended} - is this config object extended with data from parent

When {@link Lava.system.Template} creates a widget as a part of template config - 
it creates it with `class` from widget's config, like this:

```javascript
// inside Lava.system.Template
// childConfig - is the widget config
var constructor = Lava.ClassManager.getConstructor(childConfig['class'], 'Lava.view');
view = new constructor(childConfig, this._widget, this._parent_view, this, properties);
```
But all widget configs, produced by {@link Lava.parsers.Common#compileTemplate}, are created with 
{@link Lava#WidgetConfigExtensionGateway} in the `class` property. 
So when the widget is created for the first time - Template invokes that gateway, not real constructor.
And that's where the magic happens.

For a new widget config, above code may be rewritten as following:

```javascript
// childConfig - is the widget config
view = new Lava.WidgetConfigExtensionGateway(childConfig, this._widget, this._parent_view, this, properties);
```

Gateway receives all parameters of a real widget and acts as a widget constructor.
What happens inside the gateway:
1. it assigns `real_class` to `class`
2. sets `is_extended = true`
3. merges properties from parent widget config into current config
4. creates widget controller (`real_class`), with it's own arguments, and returns it

If constructor in JavaScript returns an object - that object is used as result of the <kw>new</kw> operator.
So, in this case, Template receives an instance of real widget class, not an instance of the gateway.
This way you can create a constructor, which acts as a proxy to another constructors.

Second, when the widget is created for the second time - it's created with it's real class, 
which receives an already extended config. Gateway has done it's job, so it does not need to be called again.

And the final: if parent class is also inherited from another class - it's also extended in this process.

##Merged properties

Merging of properties from parent config is done in {@link Lava.extenders#Standard}. 
Generally, if a property is present in child config - it's not overwritten. Otherwise, it's copied as-is
(all properties are assigned by reference, not cloned!).

But several properties have special rules for merging:
{@link _cWidget#bindings}, {@link _cView#assigns}, {@link _cView#options} and {@link _cWidget#properties} -
these properties are merged one-level deep. For example, all properties from parent are merged to child, but they are not overwritten.
If parent has property <str>"property_one"</str>, and child has <str>"property_two"</str> - than child will have both properties.
But if child config also has <str>"property_one"</str> - than it will not be overwritten.

<b>Merging includes</b>

If include from parent is overwritten in child - than parent's include is renamed, just like parent methods in classes.
Name of parent and dollar-sign are added to the name of overwritten include, for example: "Tree$content".

<b>Merging sugar</b>

{@link _cSugar#attribute_mappings} and `content_schema.tag_roles` ({@link _cSugarContent#tag_roles}) will be merged 
as objects. All other properties are merged using standard rules.

<b>storage_schema and storage</b>

{@link _cWidget#storage_schema} is merged before storage. If item is not present in child schema - it's added, 
otherwise - {@link _cStorageItemSchema#properties} from parent is merged into child.

Collections in {@link _cWidget#storage} are not overwritten, but hashes and objects are also merged
(<str>"template_hash"</str>, <str>"object_hash"</str> and <str>"object"</str>).

For exact algorithm, see the source of {@link Lava.extenders}.

<b>Resources</b>

Resources also have their own rules for merging. See {@link reference:Resources}.

##Config sharing

First of all, you should realize the fact, that template configs are modified during application lifecycle. 
If you want to serialize a parsed template - you should do it before it's ever used, 
cause it's not even guaranteed, that extended configs can be serialized properly.
It's also not guaranteed, that they does not contain circular references.

It's highly advised to never clone extended configs. If you want to clone a config - 
you should do it before any dependent widgets or templates are created. 
If you need multiple clones - you can use {@link Lava#createCloner}.

Second, widget configs are shared between widget instances. Also, parent configs are copied to children,
so parent shares it's configs with children. Property descriptors, templates (includes), objects in options, 
sugar and storage descriptors - everything is shared for all hierarchy.

That means, that all configs are <b>static</b>. <b>You must never modify any configs in use!</b>
If you want to create a modified config - you must clone existing, or create a new one.

