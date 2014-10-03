
Currently, the only purpose of this parser is to validate serialized JS types.
If parse() does not throw an error - then the argument can be safely eval()'ed.

Example usage:

```javascript
// from Lava source code:
Lava.parseOptions = function(serialized_object) {
	Lava.schema.VALIDATE_OPTIONS && this.ObjectParser.parse(serialized_object);
	return eval('(' + serialized_object + ')');
}

var result = Lava.parseOptions('{test1: true, test2: [1,2,3]}');
```

Permitted serialized values:
- object
- array
- string
- number
- literals (<kw>true</kw>, <kw>false</kw>, <kw>null</kw>, <kw>undefined</kw>)

Objects does not need to be a valid JSON. Any combination of the above types is permitted (like array of objects with arbitrary structure).

##Usage by framework

{@link Lava#parseOptions} is used every time when framework needs to parse JavaScript objects from templates.
For example, in &lt;options&gt; and &lt;properties&gt; directives.

You can disable these checks by turning off {@link Lava.schema#VALIDATE_OPTIONS} switch (may be useful in production environment).

##External paths

ObjectParser allows external paths in objects, but keep in mind:
all configs must be serializable, so you must not create circular references or link to constructed objects with prototype.

Example:
```javascript
Lava.ObjectParser.parse(
	// parser does not check path existence, only validity
	'{external_object: Lava.user.MY_OBJECT}'
);
```

Currently, list of allowed root namespaces is hardcoded in `Lava.ObjectParser.yy.valid_globals`.