<lavabuild:title>Widget properties</lavabuild:title>

#Widget properties

{@link Lava.widget.Standard} overrides the `get()` and `set()` methods to provide validation and give you better control 
over widget properties. Initial property values are stored in `_properties` class field, while additional behaviour
can be specified in `_property_descriptors`:

```javascript
Lava.define(
"Lava.widget.MyWidget",
{
	Extends: "Lava.widget.Standard",

	_property_descriptors: {
		readonly_property: {is_readonly: true},
		boolean_property: {type: 'Boolean'},
		gender: {type: 'Set', allowed_values: ['Male', 'Female'], is_nullable: true},
		my_property: {getter: '_getMyProperty', setter: '_setMyProperty'}
	},

	_properties: {
		readonly_property: "Only widget itself can change this text",
		boolean_property: true,
		gender: null,
		my_property: null,

		// property without descriptor
		basic_property: null
	},

	changeReadonlyProperty: function() {

		this._set('readonly_property', Math.random());

	},

	_getMyProperty: function() {

		return this._properties.my_property;

	},

	_setMyProperty: function(value, name) {

		// name here equals to "my_property"

		this.changeReadonlyProperty();
		this._set(name, value);

	}

});
```

Property descriptor can have the following fields:

<b>is_readonly</b>

If property is readonly, then `set()` throws an error.

<b>is_nullable</b>

Allow <kw>null</kw> in addition to other property values.

If property has descriptor, and you want it to be nullable - then you must explicitly specify `is_nullable: false`.
In example above `boolean_property` and `my_property` can not be assigned nulls, while `basic_property` can,
cause it does not have a descriptor.

<b>type</b>

A type from {@link Lava.types}, which is used for validation.

You must assign only valid values to properties: for example, you must not assign numbers to Boolean fields,
or you will get exception. However, this validation <b>is enabled only in DEBUG mode</b> 
and inappropriate for checking user input.

In the example above, the `gender` property has additional type-specific data in it - `allowed_values`.
When widget checks property value for validity, it passes property descriptor to the type, like this:

```javascript
Lava.types.Set.isValidValue("Male", this._property_descriptors.gender);
```

The {@link Lava.types#Set} type uses `allowed_values` from descriptor to check for allowed strings.

<b>"setter" and "getter"</b>

Class methods, used to get and set property values.

Property setter will be called only when new property value differs from previous.
Remember: the order of arguments in setters is reversed (`value, name` instead of `name, value`).