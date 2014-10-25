
#Data(ORM) layer

Note: data layer is still in development, but even in current state it's powerful and worth using.

Data layer includes:
- {@link Lava.data.Module|Modules} - analog of server-side database table
- Each module has {@link Lava.data.Record|Records} - represents a row in that table
- Records have {@link Lava.data.field.Abstract|Fields}

You can create modules and records with custom functionality, as well as custom fields.
Modules can be referenced by their name, all module instances are global.

###Advanced usage example

```javascript
// configs are global
Lava.schema.modules['DemoFiles'] = {
	fields: {
		// holds a unique integer from server-side table
		id: {type: 'Id'},
		title: {type: 'Basic', 'default': ''},
		// Virtual field. References a record from another module.
		// Id of that record is stored in "directory_id" field
		directory: {type: 'Record', module: 'DemoFolders', foreign_key_field: 'directory_id'},
		directory_id: {type: 'ForeignKey'}
	}
};

Lava.schema.modules['DemoFolders'] = {
	fields: {
		id: {type: 'Id'},
		title: {type: 'Basic', 'default': ''},
		// id of the parent directory
		parent_id: {type: 'ForeignKey'},
		// virtual field: parent directory. References record from this module, by id from "parent_id" field
		parent: {type: 'Record', module: 'this', foreign_key_field: 'parent_id'},
		// virtual field. Collection of "child" directories
		// (who's parent_id refers to this instance)
		directories: {type: 'Collection', module: 'this', record_field: 'parent'},
		// collection of records from another module
		files: {type: 'Collection', module: 'DemoFiles', record_field: 'directory'}
	}
}

// create and get a global instance
var folders_module = Lava.app.getModule('DemoFolders');
// load data manually
folders_module.loadRecords([{
	id: 1,
	title: 'Folder 1',
	directories: [{
		id: 2,
		title: 'Folder 2',

		// notice: raw records from another module
		files: [{
			id: 1, // id in DemoFiles module
			title: 'File 1'
		}]
	}],
	files: [{
		id: 2,
		title: 'File 2'
	}]
},{
	id: 3,
	title: 'Folder 3'
}]);

// at this moment, DemoFiles module is created, and already has two records in it

// get Enumerable with files in directory #1
var files = folders_module.getRecordById(1).get('files');
// it has one file
var file = files.getValueAt(0); // returns an instance of Record from DemoFiles module

// the most important feature
file.set('directory', folders_module.getRecordById(3));

// now file has gone from old directory
files.getValueAt(0) == null; // true
// third directory now has one file
folders_module.getRecordById(3).get('files').getValueAt(0) == file; // true

// you can also get the same file record directly from it's module
Lava.app.getModule('DemoFiles').getRecordById(2) == file; // true
```

In this example, when we retrieved DemoFolders module, the other one was created automatically
(cause they depend on each other). Also notice how DemoFolders loaded records into DemoFiles, in `files` from import.

Note: Collection field does not need Id and ForeignKey fields to function properly,
so if you don't need them - they can be removed.

##Architecture

- In it's constructor, {@link Lava.data.Module} creates all fields, than calls onModuleFieldsCreated of each field,
and passes an object with default record's properties.
- Default record's properties then are serialized into a constructor.
Each time a new record is created - it receives a new instance of it's properties from module.
- All record's properties are stored in module's internal hash - {@link Lava.data.ModuleAbstract#_properties_by_guid}.
All fields have a reference to that hash - this way every field has access to properties of all records, that belong to it's module.
- All records have a reference to their module's fields object.
Record's getter and setter call {@link Lava.data.field.Abstract#getValue} and {@link Lava.data.field.Abstract#setValue} of corresponding fields.

As was mentioned, fields have access to all properties of all records of their module.
Any field can read properties of other fields directly, but fields should not modify properties, that don't belong to them.

Also note, that a field can store it's value in two or more record's properties.
For example, you can imagine a ComplexNumber field:
```javascript
record.get('complex_field'); // returns an object: {x: number, y: number}
record.set('complex_field', {
	x: 1,
	y: 0
});
```

Internally, you may decide to store the "x" and "y" properties separately, in `record._properties['complex_field_x']` and
`record._properties['complex_field_y']` respectively.

##MetaStorage module

This module is designed to extend records from standard modules with additional fields.
For example, the Tree widget stores the "expanded" state of it's records in MetaStorage.
This allows to have several trees on one page, that are bound to same data, but expand their nodes separately from each other.

```javascript
var meta_storage = new Lava.data.MetaStorage({
	fields: {
		'is_expanded': {type:'Boolean'}
	}
});

var meta_record = meta_storage.get(123); // you pass a GUID of record from standard module
```

{@link Lava.data.MetaStorage#get} creates a new record for every requested GUID.

##Field roles and naming conventions

Two frequently used field names are "name" and "title".
- "name" is for computers, while "title" is for humans.
- "name" is usually shown in URL, while "title" may be inside &lt;H1&gt; or page's &lt;title&gt; tag.
- "name" is usually unique, while there may be several records with one title.

Example: a cheese titled "Fontina Val d'Aosta" could have name "fontina_val_d_aosta".

Example 2: you have two records in your database, titled "Nokia Lumia 1020".
But one is named "nokia_lumia_1020_black", and other is "nokia_lumia_1020_white".

##Record and Collection fields

Record field holds a record, usually from another module. Collection field holds an Enumerable with records.
Module which owns the field is called "local" module, and module which owns the records
from these fields is called "external" or "foreign module".

Foreign module may be the same as local (field references another record from it's own module).
In this case, you need to supply <str>"this"</str> as referenced module name:

```javascript
Lava.schema.modules['DemoTree'] = {
	fields: {
		title: {type: 'Basic', 'default': ''},
		parent: {type: 'Record', module: 'this'},
		children: {type: 'Collection', module: 'this', record_field: 'parent'}
	}
};
```

Collection field needs corresponding Record field to function.
In config you must provide the name of it's `record_field` in foreign module.
Setting Record field to new value moves the record to new Enumerable in corresponding Collection field.

Collection fields are readonly, you can not assign a new Enumerable to record's "children".
Instead, you must iterate over collection records and set their "parent" to new value.
You can also add and remove records directly from
Enumerable instances, and corresponding Record fields will also be updated.

Each Record field may have an attached ForeignKey field from the same module.
Setting Record field to new value also updates corresponding ForeignKey field
(which in turn moves record to new Enumerable), and vice versa.

```javascript
Lava.schema.modules['DemoTree'] = {
	fields: {
		id: {type: 'Id'},
		title: {type: 'Basic', 'default': ''},
		parent: {type: 'Record', module: 'this', foreign_key_field: 'parent_id'},
		parent_id: {type: 'ForeignKey'},
		children: {type: 'Collection', module: 'this', record_field: 'parent'}
	}
};
```