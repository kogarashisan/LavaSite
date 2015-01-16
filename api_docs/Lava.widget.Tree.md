
Tree widget allows you to configure the source of certain columns.
For example, `is_expanded` property can be taken from tree records directly, or from widget's MetaStorage instance.
This matters when you bind two instances of Tree to the same data - they will either expand their nodes independently 
from each other (with MetaStorage), or both trees will expand and collapse nodes simultaneously.

By default, `is_expanded` property is taken from records directly.
Usage example:

```xml
<x:widget extends="Tree">
	<assign name="records">#example.tree_records</assign>
	<script x:equiv="options" type="lava/options">
		{
			meta_storage_columns: ["is_expanded"],
			refresher: {type: 'Collapse'}
		}
	</script>
</x:widget>
```

The "Collapse" refresher option will enable animation of node children, when they are expanded,
and `meta_storage_columns` lists columns, that should be served from MetaStorage.

##Data format

Important: standard Tree widget does not work with plain arrays and objects - it expects records to implement 
Properties, and their "children" property must be Enumerable. Root records also must be Enumerable.

Each record must have unique `guid` property.

##Node icons

Tree has the "icon" template, which allows you to show node icons. 
For example, this widget is used by Lava documentation and examples:

```xml
<x:define extends="Tree" title="FolderTree">
	<include name="icon">
		<img x:type="view" class="lava-tree-icon" x:classes="'lava-tree-icon-' + node.type" x:bind:src="'/www/design/tree/' + node.type + '.gif'" />
	</include>
</x:define>
```
