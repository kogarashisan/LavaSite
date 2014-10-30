<lavabuild:title>Storage</lavabuild:title>

#Widget storage

{@link _cWidget#storage} allows you to define a hash of items with flexible structure. 
It may be arrays and objects with templates and Lava types in them.

You may define storage in x:define and x:widget tags, and also via {@link reference:Sugar|sugar}.
There are two tags which describe it: 
- &lt;storage_schema&gt; - describes format of items inside storage
- and &lt;storage&gt; - actual storage data
In widget definition &lt;storage_schema&gt; must always precede &lt;storage&gt;.

Tip: storage is parsed in {@link Lava.parsers.Storage}.

##Storage item types

Schema represents an object with it's keys being item names in storage. 
Values describe format of the storage object, see {@link _cStorageItemSchema}.

Storage can contain the following kinds of items:

###template_collection

Define an item in storage, that represents an array of templates.

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<storage_schema>
		{
			this_is_template_collection: {
				type: 'template_collection',
				tag_name: 'one_template'
			}
		}
	</storage_schema>
	<storage>
		<this_is_template_collection>
			<one_template>
				This is first template
			</one_template>
			<one_template>
				This is second template
			</one_template>
			<one_template>
				This is third template
			</one_template>
		</this_is_template_collection>
	</storage>
</x:widget>
</lavabuild:template_result>

###template_hash

Define an item that represents a hash of templates.
Syntax is the same as for array, but `name` attribute is added to templates.

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<storage_schema>
		{
			this_is_template_hash: {
				type: 'template_hash',
				tag_name: 'one_template'
			}
		}
	</storage_schema>
	<storage>
		<this_is_template_hash>
			<one_template name="one">
				This is first template
			</one_template>
			<one_template name="two">
				This is second template
			</one_template>
			<one_template name="three">
				This is third template
			</one_template>
		</this_is_template_hash>
	</storage>
</x:widget>
</lavabuild:template_result>

Example usage for template hashes: define cell templates for different types of table columns. 
See Table widget template for an example.

###object

Define an object with arbitrary structure. Type of each property is described in `properties` config member.

Currently. there are two kinds of properties:
- <str>"template"</str> - self-explanatory
- <str>"lava_type"</str> - a type from {@link Lava.types}. You must also provide it's `type_name`.

You can allow a property to be defined as object's attribute, by setting `is_attribute` config switch.

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<storage_schema>
		{
			this_is_object: {
				type: 'object',
				properties: {
					this_is_template: {type: 'template'},
					is_active: {type: 'lava_type', type_name: 'Boolean', is_attribute: true},
					this_is_number: {type: 'lava_type', type_name: 'Number'}
				}
			}
		}
	</storage_schema>
	<storage>
		<this_is_object is_active="true">
			<this_is_template>Hello world!</this_is_template>
			<this_is_number>123.45</this_is_number>
		</this_is_object>
	</storage>
</x:widget>
</lavabuild:template_result>

###object_collection

Here applies the same logic as in <str>"object"</str> and <str>"template_collection"</str> types.

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<storage_schema>
		{
			this_is_object_collection: {
				type: 'object_collection',
				tag_name: 'this_is_object',
				properties: {
					this_is_template: {type: 'template'},
					is_active: {type: 'lava_type', type_name: 'Boolean', is_attribute: true},
					this_is_number: {type: 'lava_type', type_name: 'Number'}
				}
			}
		}
	</storage_schema>
	<storage>
		<this_is_object_collection>
			<this_is_object is_active="true">
				<this_is_template>Hello world! (1)</this_is_template>
				<this_is_number>1</this_is_number>
			</this_is_object>
			<this_is_object is_active="false">
				<this_is_template>Hello world! (2)</this_is_template>
				<this_is_number>2</this_is_number>
			</this_is_object>
			<this_is_object is_active="true">
				<this_is_template>Hello world! (3)</this_is_template>
				<this_is_number>3</this_is_number>
			</this_is_object>
		</this_is_object_collection>
	</storage>
</x:widget>
</lavabuild:template_result>

###object_hash

Here applies the same logic as in <str>"object"</str> and <str>"template_hash"</str> types.
Note, that `name` attribute defines object's key in the hash, but you can also create the same property in hash objects
and set it via &lt;name&gt; tag.

<lavabuild:template_result as="single_view">
<x:widget controller="Standard">
	<storage_schema>
		{
			this_is_object_hash: {
				type: 'object_hash',
				tag_name: 'this_is_object',
				properties: {
					this_is_template: {type: 'template'},
					is_active: {type: 'lava_type', type_name: 'Boolean', is_attribute: true},
					this_is_number: {type: 'lava_type', type_name: 'Number'}
				}
			}
		}
	</storage_schema>
	<storage>
		<this_is_object_hash>
			<this_is_object name="one" is_active="true">
				<this_is_template>Hello world! (1)</this_is_template>
				<this_is_number>1</this_is_number>
			</this_is_object>
			<this_is_object name="two" is_active="false">
				<this_is_template>Hello world! (2)</this_is_template>
				<this_is_number>2</this_is_number>
			</this_is_object>
			<this_is_object name="three" is_active="true">
				<this_is_template>Hello world! (3)</this_is_template>
				<this_is_number>3</this_is_number>
			</this_is_object>
		</this_is_object_hash>
	</storage>
</x:widget>
</lavabuild:template_result>

##Storage inheritance

In case of config inheritance, `storage` and `storage_schema` have their own ruler for merging. See {@link reference:ConfigExtension}.