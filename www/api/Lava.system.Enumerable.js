var page_json = {"description":"<p>Internally, Enumerable has 3 gapless arrays: <code>_data_uids</code>, <code>_data_values</code> and <code>_data_names</code>.\n<code>_data_names</code> is populated with object keys when you construct Enumerable from object or Properties instance.\nYou can also add keys manually when you add an item into collection (for example, <code>push(value, name)</code>).\nWhen constructing from array - <code>_data_names</code> is filled with nulls.</p>\n<p>Each name-value pair has unique ID in <code>_data_uids</code> - they are used by views to track changes in collection. \nEach time you add a new value into collection - a new UID is generated. Even if you remove an item, \nand then insert it back - it will have new UID.</p>\n<p>Some operations preserve UIDs, like filtering or sorting - this allows views to remove or reorder existing \ntemplates in DOM, and apply animation to this process.</p>\n<p>Enumerable UIDs are <b>not</b> globally unique - you should take that into account when you replace one\nEnumerable instance with another in your own code, cause same UIDs from new instance now correspond to different values.</p>\n<p>The only property, which is supported, is &quot;length&quot; (readonly).</p>\n","events":[{"description":"<p>Fires when either content or order of items in collection changes</p>\n","name":"collection_changed","longname":"Lava.system.Enumerable#event:collection_changed","kind":"event"},{"description":"<p>Values were added to collection</p>\n","name":"items_added","params":[{"name":"uids","description":"<p>Internal unique IDs that were generated for added values</p>\n","type_names":["Array.&lt;number&gt;"]},{"name":"values","description":"<p>Values, that were added</p>\n","type_names":["array.&lt;*&gt;"]},{"name":"names","description":"<p>Names (keys) of values that were added</p>\n","type_names":["Array.&lt;string&gt;"]}],"longname":"Lava.system.Enumerable#event:items_added","kind":"event"},{"description":"<p>Values were removed from collection</p>\n","name":"items_removed","params":[{"name":"uids","description":"<p>Unique IDs of values, internal to this instance</p>\n","type_names":["Array.&lt;number&gt;"]},{"name":"values","description":"<p>Values, that were removed</p>\n","type_names":["array.&lt;*&gt;"]},{"name":"names","description":"<p>Names (keys) of values that were removed</p>\n","type_names":["Array.&lt;string&gt;"]}],"longname":"Lava.system.CollectionAbstract#event:items_removed","kind":"event"},{"description":"<p>Property has changed</p>\n","name":"property_changed","params":[{"name":"name","description":"<p>The name of the changed property</p>\n","type_names":["string"]}],"longname":"Lava.mixin.Properties#event:property_changed","kind":"event"}],"method_chain":[{"class_name":"Lava.system.Enumerable","descriptors":[{"name":"append","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"values","description":"<p>New values</p>\n","type_names":["Array.&lt;*&gt;"]},{"name":"names","description":"<p>Corresponding names</p>\n","is_optional":true,"type_names":["Array.&lt;string&gt;"]}],"param_names_string":"values, names","description":"<p>Append new values to the end of the collection</p>\n"},{"name":"includeValue","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"value","description":"<p>New value</p>\n","type_names":["*"]},{"name":"name","description":"<p>New name</p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"value, name","returns":{"description":"<p><span class=\"api-keyword\">true</span>, if value did not exist and was included</p>\n","type_names":["boolean"]},"description":"<p>If value does not exist - push it into collection</p>\n"},{"name":"init","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"data_source","type_names":["Array","Object","<a href=\"/www/doc/class/Lava.mixin.Properties.html\">Lava.mixin.Properties</a>","<a href=\"/www/doc/class/Lava.system.Enumerable.html\">Lava.system.Enumerable</a>"]}],"param_names_string":"data_source","description":"<p>Creates Enumerable instance and fills initial data from <code>data_source</code></p>\n"},{"name":"insertAt","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"index","description":"<p>Index to insert at</p>\n","type_names":["number"]},{"name":"value","description":"<p>New value</p>\n","type_names":["*"]},{"name":"name","description":"<p>New name</p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"index, value, name","description":"<p>Insert a value at index</p>\n"},{"name":"insertRange","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"start_index","description":"<p>Index of the beginning of new values. Must be less or equal to collection&#39;s <code>_count</code></p>\n","type_names":["number"]},{"name":"values","description":"<p>New values</p>\n","type_names":["Array.&lt;*&gt;"]},{"name":"names","description":"<p>Names that correspond to each value</p>\n","is_optional":true}],"param_names_string":"start_index, values, names","description":"<p>Insert a sequence of values into collection</p>\n"},{"name":"push","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"value","description":"<p>New value to add</p>\n","type_names":["*"]},{"name":"name","description":"<p>New name</p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"value, name","returns":{"description":"<p>New collection <code>_count</code></p>\n","type_names":["number"]},"description":"<p>Add the name/value pair to the end of the collection, generating a new UID</p>\n"},{"name":"refreshFromDataSource","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"data_source","type_names":["Array","Object","<a href=\"/www/doc/class/Lava.mixin.Properties.html\">Lava.mixin.Properties</a>","<a href=\"/www/doc/class/Lava.system.Enumerable.html\">Lava.system.Enumerable</a>"]}],"param_names_string":"data_source","description":"<p>Update the collection from <code>data_source</code></p>\n"},{"name":"replaceAt","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"index","description":"<p>Index of value in Enumerable</p>\n","type_names":["number"]},{"name":"value","description":"<p>New value for given index</p>\n","type_names":["*"]},{"name":"name","description":"<p>New name for the value</p>\n","is_optional":true,"type_names":["number"]}],"param_names_string":"index, value, name","description":"<p>Replace the corresponding <code>value</code> and <code>name</code> at specified <code>index</code>, generating a new UID</p>\n"},{"name":"unshift","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"value","description":"<p>New value</p>\n","type_names":["*"]},{"name":"name","description":"<p>New name</p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"value, name","description":"<p>Put the value at the beginning of collection</p>\n"},{"name":"_push","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"uid","type_names":["number"]},{"name":"value","type_names":["*"]},{"name":"name","type_names":["string"]}],"param_names_string":"uid, value, name","description":"<p>Append the given uid, value and name to corresponding instance arrays: <code>_data_uids</code>, <code>_data_values</code> and <code>_data_names</code></p>\n"},{"name":"_updateFromArray","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"source_array","type_names":["Array"]},{"name":"names","type_names":["Array.&lt;string&gt;"]}],"param_names_string":"source_array, names","description":"<p>Remove all current values and add values from array</p>\n"},{"name":"_updateFromEnumerable","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"data_source","type_names":["<a href=\"/www/doc/class/Lava.system.Enumerable.html\">Lava.system.Enumerable</a>"]}],"param_names_string":"data_source","description":"<p>Same as <code>_updateFromArray</code>, but uses names from <code>data_source</code></p>\n"},{"name":"_updateFromObject","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"source_object","type_names":["Object"]}],"param_names_string":"source_object","description":"<p>Compares item names with object keys, removing values without names and values that do not match.\nAdds new values from <code>source_object</code></p>\n"}]},{"class_name":"Lava.system.CollectionAbstract","descriptors":[{"name":"containsLocalUID","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"uid","type_names":["number"]}],"param_names_string":"uid","returns":{"description":"<p><span class=\"api-keyword\">true</span>, if collection has given UID</p>\n","type_names":["boolean"]},"description":"<p>Does collection contain the given <code>uid</code></p>\n","is_inherited":true},{"name":"containsValue","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"value","description":"<p>Value to search for</p>\n","type_names":["*"]}],"param_names_string":"value","returns":{"description":"<p><span class=\"api-keyword\">true</span>, if collection has given value</p>\n","type_names":["boolean"]},"description":"<p>Does collection contain the <code>value</code></p>\n","is_inherited":true},{"name":"destroy","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","description":"<p>Free resources and make this instance unusable</p>\n","is_inherited":true},{"name":"each","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"callback","type_names":["<a href=\"/www/doc/object/Support.html#member=_tEnumerableEachCallback\">_tEnumerableEachCallback</a>"]}],"param_names_string":"callback","description":"<p>Execute the <code>callback</code> for each item in collection</p>\n","is_inherited":true},{"name":"filter","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"callback","type_names":["<a href=\"/www/doc/object/Support.html#member=_tEnumerableFilterCallback\">_tEnumerableFilterCallback</a>"]}],"param_names_string":"callback","description":"<p>Pass each value to callback and leave only those, for which it has returned <span class=\"api-keyword\">true</span>.\nRemove the others</p>\n","is_inherited":true},{"name":"get","belongs":"Lava.system.CollectionAbstract","defined":"Lava.mixin.Properties","is_private":false,"type":"function","params":[{"name":"name","type_names":["string"],"description":"<p>Property name</p>\n"}],"param_names_string":"name","returns":{"description":"<p>Returns <code>_count</code> for <span class=\"api-string\">&quot;length&quot;</span> property</p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.mixin.Properties:</b>\nProperty value</p>\n","type_names":["number"]},"description":"<p>The only supported property is <span class=\"api-string\">&quot;length&quot;</span></p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.mixin.Properties:</b>\nGet property</p>\n","is_overridden":true,"is_inherited":true},{"name":"getCount","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","returns":{"description":"<p>Get <code>_count</code></p>\n","type_names":["number"]},"description":"<p>Get current item count</p>\n","is_inherited":true},{"name":"getNameAt","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"index","type_names":["number"]}],"param_names_string":"index","returns":{"type_names":["string"]},"description":"<p>Get name at given <code>index</code></p>\n","is_inherited":true},{"name":"getNames","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","returns":{"description":"<p><code>_data_names</code></p>\n","type_names":["Array.&lt;string&gt;"]},"description":"<p>Get a copy of local names array</p>\n","is_inherited":true},{"name":"getUIDAt","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"index","type_names":["number"]}],"param_names_string":"index","returns":{"description":"<p>Requested UID</p>\n","type_names":["number"]},"description":"<p>Get UID at given <code>index</code></p>\n","is_inherited":true},{"name":"getUIDToIndexMap","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","returns":{"description":"<p>An object with keys being collection&#39;s internal UIDs and their indices as values</p>\n","type_names":["Object.&lt;number, number&gt;"]},"description":"<p>Get an object with local UIDs as keys and their indices in local array as values.\nThe result map is valid until any modification to Enumerable</p>\n","is_inherited":true},{"name":"getUIDs","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","returns":{"description":"<p><code>_data_uids</code></p>\n","type_names":["Array.&lt;number&gt;"]},"description":"<p>Get a copy of local UIDs array</p>\n","is_inherited":true},{"name":"getValueAt","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"index","type_names":["number"]}],"param_names_string":"index","returns":{"description":"<p>Requested value</p>\n","type_names":["*"]},"description":"<p>Get value at given <code>index</code></p>\n","is_inherited":true},{"name":"getValueByLocalUID","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"uid","type_names":["number"]}],"param_names_string":"uid","returns":{"type_names":["*"]},"description":"<p>Get the value, that corresponds to given UID</p>\n","is_inherited":true},{"name":"getValues","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","returns":{"description":"<p><code>_data_values</code></p>\n","type_names":["Array.&lt;*&gt;"]},"description":"<p>Get a copy of local values array</p>\n","is_inherited":true},{"name":"getValuesHash","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","returns":{"description":"<p>Object with local UIDs as keys and corresponding values</p>\n","type_names":["Object.&lt;number, *&gt;"]},"description":"<p>Create an object with [uid] =&gt; value structure</p>\n","is_inherited":true},{"name":"indexOfUID","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"uid","description":"<p>Local UID to search for</p>\n","type_names":["number"]}],"param_names_string":"uid","returns":{"description":"<p>Zero-based index of uid in Enumerable, or -1, if uid is not in array</p>\n","type_names":["number"]},"description":"<p>Get index of given <code>uid</code> in the collection</p>\n","is_inherited":true},{"name":"indexOfValue","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"value","description":"<p>Value to search for</p>\n","type_names":["*"]}],"param_names_string":"value","returns":{"description":"<p>Zero-based index of value in Enumerable, or -1, if value is not in array</p>\n","type_names":["number"]},"description":"<p>Get index of given <code>value</code> in collection</p>\n","is_inherited":true},{"name":"isEmpty","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","returns":{"description":"<p>True if there are no items in collection</p>\n","type_names":["boolean"]},"description":"<p>Does it have any items</p>\n","is_inherited":true},{"name":"pop","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","returns":{"description":"<p>Removed value</p>\n","type_names":["*"]},"description":"<p>Remove a value from the end of the collection</p>\n","is_inherited":true},{"name":"removeAll","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","returns":{"description":"<p>Values that were in collection</p>\n","type_names":["Array"]},"description":"<p>Remove all values and return them</p>\n","is_inherited":true},{"name":"removeAt","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"index","description":"<p>Index to remove</p>\n","type_names":["number"]}],"param_names_string":"index","returns":{"description":"<p>The removed value</p>\n","type_names":["*"]},"description":"<p>Remove value at <code>index</code></p>\n","is_inherited":true},{"name":"removeRange","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"start_index","type_names":["number"]},{"name":"count","type_names":["number"]}],"param_names_string":"start_index, count","returns":{"description":"<p>Removed values</p>\n","type_names":["Array"]},"description":"<p>Remove range of indices from collection and return removed values</p>\n","is_inherited":true},{"name":"removeValue","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"value","type_names":["*"]}],"param_names_string":"value","returns":{"description":"<p><span class=\"api-keyword\">true</span>, if the value existed</p>\n","type_names":["boolean"]},"description":"<p>Removes the first occurrence of value within collection</p>\n","is_inherited":true},{"name":"reorder","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"new_indices","type_names":["Array.&lt;number&gt;"]}],"param_names_string":"new_indices","description":"<p>Sort items by premade array of new item indices</p>\n","is_inherited":true},{"name":"set","belongs":"Lava.system.CollectionAbstract","defined":"Lava.mixin.Properties","is_private":false,"type":"function","description":"<p>Will throw exception. You can not set any properties to Enumerable instance</p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.mixin.Properties:</b>\nSet property</p>\n","is_overridden":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]},{"name":"value","description":"<p>New property value</p>\n","type_names":["*"]}],"is_inherited":true},{"name":"shift","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","returns":{"description":"<p>The removed value</p>\n","type_names":["*"]},"description":"<p>Remove value from the beginning of collection</p>\n","is_inherited":true},{"name":"sort","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"less","description":"<p>A callback to compare items</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tLessCallback\">_tLessCallback</a>"]},{"name":"algorithm_name","description":"<p>The name of the sorting method from <a href=\"/www/doc/object/Firestorm.Sorting.html\">Firestorm.Sorting</a></p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"less, algorithm_name","description":"<p>Sort items in collection</p>\n","is_inherited":true},{"name":"sortByNames","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"less","description":"<p>A callback to compare items</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tLessCallback\">_tLessCallback</a>"]},{"name":"algorithm_name","description":"<p>The name of the sorting method from <a href=\"/www/doc/object/Firestorm.Sorting.html\">Firestorm.Sorting</a></p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"less, algorithm_name","description":"<p>Sort items by the array of names</p>\n","is_inherited":true},{"name":"swap","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"function","params":[{"name":"index_a","description":"<p>First index to swap</p>\n","type_names":["number"]},{"name":"index_b","description":"<p>Second index to swap</p>\n","type_names":["number"]}],"param_names_string":"index_a, index_b","description":"<p>Swap values, names and UIDs at given index. Does not generate <a href=\"/www/doc/class/Lava.system.CollectionAbstract.html#event=items_removed\">items_removed</a>\nand <a href=\"/www/doc/class/Lava.system.Enumerable.html#event=items_added\">items_added</a> events, just <a href=\"/www/doc/class/Lava.system.Enumerable.html#event=collection_changed\">collection_changed</a></p>\n","is_inherited":true},{"name":"_assignStorage","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":true,"type":"function","params":[{"name":"storage","description":"<p>Temporary helper object</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_cEnumerableHelperStorage\">_cEnumerableHelperStorage</a>"]}],"param_names_string":"storage","description":"<p>Take the temporary helper object, returned from <a href=\"/www/doc/class/Lava.system.Enumerable.html#member=_createHelperStorage\">Enumerable#_createHelperStorage</a>\nand assign it&#39;s corresponding arrays to local arrays</p>\n","is_inherited":true},{"name":"_createHelperStorage","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":true,"type":"function","returns":{"description":"<p>Helper object</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_cEnumerableHelperStorage\">_cEnumerableHelperStorage</a>"]},"description":"<p>Create an internal helper object, which allows to write less code</p>\n","is_inherited":true},{"name":"_setLength","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":true,"type":"function","params":[{"name":"new_length","type_names":["number"]}],"param_names_string":"new_length","description":"<p>Used in editing operations to set <code>_count</code> and fire changed events for <span class=\"api-string\">&quot;length&quot;</span> property</p>\n","is_inherited":true},{"name":"_sort","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":true,"type":"function","params":[{"name":"less","description":"<p>A callback to compare items</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tLessCallback\">_tLessCallback</a>"]},{"name":"values","type_names":["Array"]},{"name":"algorithm_name","description":"<p>The name of the sorting method from <a href=\"/www/doc/object/Firestorm.Sorting.html\">Firestorm.Sorting</a></p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"less, values, algorithm_name","description":"<p>Perform sorting</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Properties","descriptors":[{"name":"firePropertyChangedEvents","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>The name of the changed property</p>\n","type_names":["string"]}],"param_names_string":"property_name","description":"<p>Fire the &#39;property_changed&#39; event for Observable interface, and Properties&#39; native <a href=\"/www/doc/class/Lava.mixin.Properties.html#member=onPropertyChanged\">Properties#onPropertyChanged</a> event</p>\n","is_inherited":true},{"name":"getProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"returns":{"description":"<p>Copy of <code>_properties</code> object</p>\n","type_names":["Object.&lt;name, *&gt;"]},"description":"<p>Return a copy of the properties hash</p>\n","is_inherited":true},{"name":"isset","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]}],"param_names_string":"name","returns":{"description":"<p>True, if property exists</p>\n","type_names":["boolean"]},"description":"<p>Returns <span class=\"api-keyword\">true</span> if property exists, even if it&#39;s null/undefined</p>\n","is_inherited":true},{"name":"onPropertyChanged","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>Name of the property to listen for changes</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>May be usable when one callback responds to changes of different properties</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"property_name, fn, context, listener_args","returns":{"description":"<p>Listener construct, which may be removed or suspended later</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Same as <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a>, but returns listener to <code>property_name</code> instead of <code>event_name</code></p>\n","is_inherited":true},{"name":"oncePropertyChanged","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>Name of the property to listen for changes</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>May be usable when one callback responds to changes of different properties</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"property_name, fn, context, listener_args","returns":{"description":"<p>Listener construct, which may be removed or suspended later</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Same as <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=once\">Observable#once</a>, but returns listener to <code>property_name</code> instead of <code>event_name</code></p>\n","is_inherited":true},{"name":"setProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"properties_object","description":"<p>A hash with new property values</p>\n","type_names":["Object.&lt;string, *&gt;"]}],"param_names_string":"properties_object","description":"<p>Set multiple properties at once</p>\n","is_inherited":true},{"name":"_set","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]},{"name":"value","description":"<p>New property value</p>\n","type_names":["*"]}],"param_names_string":"name, value","description":"<p>Perform the set operation</p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true},{"name":"once","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"param_names_string":"event_name, fn, context, listener_args","is_inherited":true},{"name":"removeAllListenersByContext","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"context","type_names":["object"]}],"param_names_string":"context","description":"<p>Remove all listeners, which belong to <code>context</code></p>\n","is_inherited":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true},{"name":"removeListenersByContext","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","type_names":["string"]},{"name":"context","type_names":["object"]}],"param_names_string":"event_name, context","description":"<p>Remove all listeners to <code>event_name</code>, which belong to <code>context</code></p>\n","is_inherited":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true}],"is_mixin":true}],"member_chain":[{"class_name":"Lava.system.Enumerable","descriptors":[{"name":"isEnumerable","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_readonly":true,"description":"<p>To tell other classes that this is instance of Enumerable</p>\n"},{"name":"_uid","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"member","default_value":1,"type_names":["number"],"description":"<p>Counter for next internal UID</p>\n"}]},{"class_name":"Lava.system.CollectionAbstract","descriptors":[{"name":"guid","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/object/Support.html#member=_tGUID\">_tGUID</a>"],"description":"<p>Global unique identifier of this instance</p>\n","is_inherited":true},{"name":"isCollection","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_readonly":true,"description":"<p>To tell other classes that this is instance of Enumerable</p>\n","is_inherited":true},{"name":"_count","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":true,"type":"member","default_value":0,"type_names":["number"],"description":"<p>Count of items in Enumerable instance</p>\n","is_inherited":true},{"name":"_data_names","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;string&gt;"],"description":"<p>Holds object keys, when Enumerable was constructed from object. Each name corresponds to it&#39;s value</p>\n","is_inherited":true},{"name":"_data_uids","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;number&gt;"],"description":"<p>Unique identifiers for values, internal to this instance of enumerable. Note: they are not globally unique, just to this instance</p>\n","is_inherited":true},{"name":"_data_values","belongs":"Lava.system.CollectionAbstract","defined":"Lava.system.CollectionAbstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;*&gt;"],"description":"<p>Values, stored in this Enumerable</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Properties","descriptors":[{"name":"isProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_readonly":true,"description":"<p>To signal other classes that this class implements Properties</p>\n","is_inherited":true},{"name":"_properties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;name, *&gt;"],"description":"<p>Hash with property values</p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_readonly":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true}],"is_mixin":true}]}