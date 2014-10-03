{"events":[{"description":"<p>Values were removed from collection</p>\n","name":"items_removed","params":[{"name":"uids","description":"<p>Unique IDs of values, internal to this instance</p>\n","type_names":["Array.&lt;number&gt;"]},{"name":"values","description":"<p>Values, that were removed</p>\n","type_names":["array.&lt;*&gt;"]},{"name":"names","description":"<p>Names (keys) of values that were removed</p>\n","type_names":["Array.&lt;string&gt;"]}],"longname":"Lava.system.Enumerable#event:items_removed","kind":"event"},{"description":"<p>Values were added to collection</p>\n","name":"items_added","params":[{"name":"uids","description":"<p>Internal unique IDs that were generated for added values</p>\n","type_names":["Array.&lt;number&gt;"]},{"name":"values","description":"<p>Values, that were added</p>\n","type_names":["array.&lt;*&gt;"]},{"name":"names","description":"<p>Names (keys) of values that were added</p>\n","type_names":["Array.&lt;string&gt;"]}],"longname":"Lava.system.Enumerable#event:items_added","kind":"event"},{"description":"<p>Fires when either content or order of items in collection changes</p>\n","name":"collection_changed","longname":"Lava.system.Enumerable#event:collection_changed","kind":"event"},{"description":"<p>Property has changed</p>\n","name":"property_changed","params":[{"name":"name","description":"<p>The name of the changed property</p>\n","type_names":["string"]}],"longname":"Lava.mixin.Properties#event:property_changed","kind":"event"}],"method_chain":[{"class_name":"Lava.system.Enumerable","descriptors":[{"name":"append","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"values","description":"<p>New values</p>\n","type_names":["Array.&lt;*&gt;"]},{"name":"names","description":"<p>Corresponding names</p>\n","is_optional":true,"type_names":["Array.&lt;string&gt;"]}],"param_names_string":"values, names","description":"<p>Append new values to the end of the collection</p>\n"},{"name":"containsLocalUID","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"uid","type_names":["number"]}],"param_names_string":"uid","returns":{"description":"<p><span class=\"api-keyword\">true</span>, if collection has given UID</p>\n","type_names":["boolean"]},"description":"<p>Does collection contain the given <code>uid</code></p>\n"},{"name":"containsValue","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"value","description":"<p>Value to search for</p>\n","type_names":["*"]}],"param_names_string":"value","returns":{"description":"<p><span class=\"api-keyword\">true</span>, if collection has given value</p>\n","type_names":["boolean"]},"description":"<p>Does collection contain the <code>value</code></p>\n"},{"name":"destroy","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","description":"<p>Free resources and make this instance unusable</p>\n"},{"name":"each","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"callback","type_names":["<a href=\"/www/doc.html#object=Support;member=_tEnumerableEachCallback\">_tEnumerableEachCallback</a>"]}],"param_names_string":"callback","description":"<p>Execute the <code>callback</code> for each item in collection</p>\n"},{"name":"filter","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"callback","type_names":["<a href=\"/www/doc.html#object=Support;member=_tEnumerableFilterCallback\">_tEnumerableFilterCallback</a>"]}],"param_names_string":"callback","description":"<p>Pass each value to callback and leave only those, for which it has returned <span class=\"api-keyword\">true</span>.\nRemove the others</p>\n"},{"name":"get","belongs":"Lava.system.Enumerable","defined":"Lava.mixin.Properties","is_private":false,"type":"function","params":[{"name":"name","type_names":["string"],"description":"<p>Property name</p>\n"}],"param_names_string":"name","returns":{"description":"<p>Returns <code>_count</code> for <span class=\"api-string\">&quot;length&quot;</span> property</p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.mixin.Properties:</b>\nProperty value</p>\n","type_names":["number"]},"description":"<p>The only supported property is <span class=\"api-string\">&quot;length&quot;</span></p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.mixin.Properties:</b>\nGet property</p>\n","is_overridden":true},{"name":"getCount","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","returns":{"description":"<p>Get <code>_count</code></p>\n","type_names":["number"]},"description":"<p>Get current item count</p>\n"},{"name":"getNameAt","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"index","type_names":["number"]}],"param_names_string":"index","returns":{"type_names":["string"]},"description":"<p>Get name at given <code>index</code></p>\n"},{"name":"getNames","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","returns":{"description":"<p><code>_data_names</code></p>\n","type_names":["Array.&lt;string&gt;"]},"description":"<p>Get a copy of local names array</p>\n"},{"name":"getUIDAt","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"index","type_names":["number"]}],"param_names_string":"index","returns":{"description":"<p>Requested UID</p>\n","type_names":["number"]},"description":"<p>Get UID at given <code>index</code></p>\n"},{"name":"getUIDToIndexMap","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","returns":{"description":"<p>An object with keys being collection&#39;s internal UIDs and their indices as values</p>\n","type_names":["Object.&lt;number, number&gt;"]},"description":"<p>Get an object with local UIDs as keys and their indices in local array as values.\nThe result map is valid until any modification to Enumerable</p>\n"},{"name":"getUIDs","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","returns":{"description":"<p><code>_data_uids</code></p>\n","type_names":["Array.&lt;number&gt;"]},"description":"<p>Get a copy of local UIDs array</p>\n"},{"name":"getValueAt","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"index","type_names":["number"]}],"param_names_string":"index","returns":{"description":"<p>Requested value</p>\n","type_names":["*"]},"description":"<p>Get value at given <code>index</code></p>\n"},{"name":"getValueByLocalUID","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"uid","type_names":["number"]}],"param_names_string":"uid","returns":{"type_names":["*"]},"description":"<p>Get the value, that corresponds to given UID</p>\n"},{"name":"getValues","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","returns":{"description":"<p><code>_data_values</code></p>\n","type_names":["Array.&lt;*&gt;"]},"description":"<p>Get a copy of local values array</p>\n"},{"name":"getValuesHash","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","returns":{"description":"<p>Object with local UIDs as keys and corresponding values</p>\n","type_names":["Object.&lt;number, *&gt;"]},"description":"<p>Create an object with [uid] =&gt; value structure</p>\n"},{"name":"hasSourceObject","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","returns":{"description":"<p>True, if <code>_source_object</code> is not null</p>\n","type_names":["boolean"]},"description":"<p>Does it have <code>_source_object</code></p>\n"},{"name":"includeValue","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"value","description":"<p>New value</p>\n","type_names":["*"]},{"name":"name","description":"<p>New name</p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"value, name","returns":{"description":"<p><span class=\"api-keyword\">true</span>, if value did not exist and was included</p>\n","type_names":["boolean"]},"description":"<p>If value does not exist - push it into collection</p>\n"},{"name":"indexOfUID","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"uid","description":"<p>Local UID to search for</p>\n","type_names":["number"]}],"param_names_string":"uid","returns":{"description":"<p>Zero-based index of uid in Enumerable, or -1, if uid is not in array</p>\n","type_names":["number"]},"description":"<p>Get index of given <code>uid</code> in the collection</p>\n"},{"name":"indexOfValue","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"value","description":"<p>Value to search for</p>\n","type_names":["*"]}],"param_names_string":"value","returns":{"description":"<p>Zero-based index of value in Enumerable, or -1, if value is not in array</p>\n","type_names":["number"]},"description":"<p>Get index of given <code>value</code> in collection</p>\n"},{"name":"init","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"data_source","description":"<p>What will become <code>_source_object</code></p>\n","type_names":["Array","Object","<a href=\"/www/doc.html#class=Lava.mixin.Properties\">Lava.mixin.Properties</a>","<a href=\"/www/doc.html#class=Lava.system.Enumerable\">Lava.system.Enumerable</a>"]}],"param_names_string":"data_source","description":"<p>Creates Enumerable instance, sets <code>_source_object</code></p>\n"},{"name":"insertAt","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"index","description":"<p>Index to insert at</p>\n","type_names":["number"]},{"name":"value","description":"<p>New value</p>\n","type_names":["*"]},{"name":"name","description":"<p>New name</p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"index, value, name","description":"<p>Insert a value at index</p>\n"},{"name":"insertRange","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"start_index","description":"<p>Index of the beginning of new values. Must be less or equal to collection&#39;s <code>_count</code></p>\n","type_names":["number"]},{"name":"values","description":"<p>New values</p>\n","type_names":["Array.&lt;*&gt;"]},{"name":"names","description":"<p>Names that correspond to each value</p>\n","is_optional":true}],"param_names_string":"start_index, values, names","description":"<p>Insert a sequence of values into collection</p>\n"},{"name":"isEmpty","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","returns":{"description":"<p>True if there are no items in collection</p>\n","type_names":["boolean"]},"description":"<p>Does it have any items</p>\n"},{"name":"pop","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","returns":{"description":"<p>Removed value</p>\n","type_names":["*"]},"description":"<p>Remove a value from the end of the collection</p>\n"},{"name":"push","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"value","description":"<p>New value to add</p>\n","type_names":["*"]},{"name":"name","description":"<p>New name</p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"value, name","returns":{"description":"<p>New collection <code>_count</code></p>\n","type_names":["number"]},"description":"<p>Add the name/value pair to the end of the collection, generating a new UID</p>\n"},{"name":"removeAll","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","returns":{"description":"<p>Values that were in collection</p>\n","type_names":["Array"]},"description":"<p>Remove all values and return them</p>\n"},{"name":"removeAt","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"index","description":"<p>Index to remove</p>\n","type_names":["number"]}],"param_names_string":"index","returns":{"description":"<p>The removed value</p>\n","type_names":["*"]},"description":"<p>Remove value at <code>index</code></p>\n"},{"name":"removeRange","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"start_index","type_names":["number"]},{"name":"count","type_names":["number"]}],"param_names_string":"start_index, count","returns":{"description":"<p>Removed values</p>\n","type_names":["Array"]},"description":"<p>Remove range of indices from collection and return removed values</p>\n"},{"name":"removeValue","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"value","type_names":["*"]}],"param_names_string":"value","returns":{"description":"<p><span class=\"api-keyword\">true</span>, if the value existed</p>\n","type_names":["boolean"]},"description":"<p>Removes the first occurrence of value within collection</p>\n"},{"name":"reorder","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"new_indices","type_names":["Array.&lt;number&gt;"]}],"param_names_string":"new_indices","description":"<p>Sort items by premade array of new item indices</p>\n"},{"name":"replaceAt","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"index","description":"<p>Index of value in Enumerable</p>\n","type_names":["number"]},{"name":"value","description":"<p>New value for given index</p>\n","type_names":["*"]},{"name":"name","description":"<p>New name for the value</p>\n","is_optional":true,"type_names":["number"]}],"param_names_string":"index, value, name","description":"<p>Replace the corresponding <code>value</code> and <code>name</code> at specified <code>index</code>, generating a new UID</p>\n"},{"name":"set","belongs":"Lava.system.Enumerable","defined":"Lava.mixin.Properties","is_private":false,"type":"function","description":"<p>Will throw exception. You can not set any properties to Enumerable instance</p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.mixin.Properties:</b>\nSet property</p>\n","is_overridden":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]},{"name":"value","description":"<p>New property value</p>\n","type_names":["*"]}]},{"name":"setSourceObject","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"data_source","type_names":["Array","Object","<a href=\"/www/doc.html#class=Lava.mixin.Properties\">Lava.mixin.Properties</a>","<a href=\"/www/doc.html#class=Lava.system.Enumerable\">Lava.system.Enumerable</a>"]}],"param_names_string":"data_source","description":"<p>Set <code>_source_object</code></p>\n"},{"name":"shift","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","returns":{"description":"<p>The removed value</p>\n","type_names":["*"]},"description":"<p>Remove value from the beginning of collection</p>\n"},{"name":"sort","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"less","description":"<p>A callback to compare items</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tLessCallback\">_tLessCallback</a>"]},{"name":"algorithm_name","description":"<p>The name of the sorting method from Lava.algorithms.sorting</p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"less, algorithm_name","description":"<p>Sort items in collection</p>\n"},{"name":"sortByNames","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"less","description":"<p>A callback to compare items</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tLessCallback\">_tLessCallback</a>"]},{"name":"algorithm_name","description":"<p>The name of the sorting method from <a href=\"/www/doc.html#object=Lava.algorithms.sorting\">Lava.algorithms.sorting</a></p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"less, algorithm_name","description":"<p>Sort items by the array of names</p>\n"},{"name":"swap","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"index_a","description":"<p>First index to swap</p>\n","type_names":["number"]},{"name":"index_b","description":"<p>Second index to swap</p>\n","type_names":["number"]}],"param_names_string":"index_a, index_b","description":"<p>Swap values, names and UIDs at given index. Does not generate <a href=\"/www/doc.html#class=Lava.system.Enumerable;event=items_removed\">items_removed</a>\nand <a href=\"/www/doc.html#class=Lava.system.Enumerable;event=items_added\">items_added</a> events, just <a href=\"/www/doc.html#class=Lava.system.Enumerable;event=collection_changed\">collection_changed</a></p>\n"},{"name":"unshift","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","params":[{"name":"value","description":"<p>New value</p>\n","type_names":["*"]},{"name":"name","description":"<p>New name</p>\n","is_optional":true,"type_names":["string"]}],"param_names_string":"value, name","description":"<p>Put the value at the beginning of collection</p>\n"},{"name":"updateFromSourceObject","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"function","description":"<p>Update the collection from <code>_source_object</code>: remove values, that are not in source object, and add new values</p>\n"},{"name":"_assignStorage","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"storage","description":"<p>Temporary helper object</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_cEnumerableHelperStorage\">_cEnumerableHelperStorage</a>"]}],"param_names_string":"storage","description":"<p>Take the temporary helper object, returned from <a href=\"/www/doc.html#class=Lava.system.Enumerable;member=_createHelperStorage\">Enumerable#_createHelperStorage</a>\nand assign it&#39;s corresponding arrays to local arrays</p>\n"},{"name":"_createHelperStorage","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","returns":{"description":"<p>Helper object</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_cEnumerableHelperStorage\">_cEnumerableHelperStorage</a>"]},"description":"<p>Create an internal helper object, which allows to write less code</p>\n"},{"name":"_initFromObject","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"data_source","type_names":["Object"]}],"param_names_string":"data_source","description":"<p>If <code>_source_object</code> is an Object</p>\n"},{"name":"_push","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"uid","type_names":["number"]},{"name":"value","type_names":["*"]},{"name":"name","type_names":["string"]}],"param_names_string":"uid, value, name","description":"<p>Append the given uid, value and name to corresponding instance arrays: <code>_data_uids</code>, <code>_data_values</code> and <code>_data_names</code></p>\n"},{"name":"_setLength","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"new_length","type_names":["number"]}],"param_names_string":"new_length","description":"<p>Used in editing operations to set <code>_count</code> and fire changed events for <span class=\"api-string\">&quot;length&quot;</span> property</p>\n"},{"name":"_sort","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"less","description":"<p>A callback to compare items</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tLessCallback\">_tLessCallback</a>"]},{"name":"values","type_names":["Array"]},{"name":"algorithm_name","is_optional":true,"type_names":["string"]}],"param_names_string":"less, values, algorithm_name","description":"<p>Perform sorting</p>\n"},{"name":"_updateFromArray","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"source_array","type_names":["Array"]}],"param_names_string":"source_array","description":"<p>Update from <code>_source_object</code> version for arrays</p>\n"},{"name":"_updateFromEnumerable","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"data_source","type_names":["<a href=\"/www/doc.html#class=Lava.system.Enumerable\">Lava.system.Enumerable</a>"]}],"param_names_string":"data_source","description":"<p>Update from <code>_source_object</code> version for Enumerable</p>\n"},{"name":"_updateFromObject","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"function","params":[{"name":"source_object","type_names":["Object"]}],"param_names_string":"source_object","description":"<p>Update from <code>_source_object</code> - version for objects</p>\n"}]},{"class_name":"Lava.mixin.Properties","descriptors":[{"name":"firePropertyChangedEvents","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>The name of the changed property</p>\n","type_names":["string"]}],"param_names_string":"property_name","description":"<p>Fire the &#39;property_changed&#39; event for Observable interface, and Properties&#39; native <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=onPropertyChanged\">Properties#onPropertyChanged</a> event</p>\n","is_inherited":true},{"name":"getProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"returns":{"description":"<p>Copy of <code>_properties</code> object</p>\n","type_names":["Object.&lt;name, *&gt;"]},"description":"<p>Return a copy of the properties hash</p>\n","is_inherited":true},{"name":"isset","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]}],"param_names_string":"name","returns":{"description":"<p>True, if property exists</p>\n","type_names":["boolean"]},"description":"<p>Returns <span class=\"api-keyword\">true</span> if property exists, even if it&#39;s null/undefined</p>\n","is_inherited":true},{"name":"onPropertyChanged","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>Name of the property to listen for changes</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>May be usable when one callback responds to changes of different properties</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"property_name, fn, context, listener_args","returns":{"description":"<p>Listener construct, which may be removed or suspended later</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},"description":"<p>The same, as <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=on\">Observable#on</a>, but returns listener to <code>property_name</code> instead of <code>event_name</code></p>\n","is_inherited":true},{"name":"removePropertyListener","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>The listener structure, returned from <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=onPropertyChanged\">Properties#onPropertyChanged</a></p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Removes listeners added with <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=onPropertyChanged\">Properties#onPropertyChanged</a></p>\n","is_inherited":true},{"name":"setProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"properties_object","description":"<p>A hash with new property values</p>\n","type_names":["Object.&lt;string, *&gt;"]}],"param_names_string":"properties_object","description":"<p>Set multiple properties at once</p>\n","is_inherited":true},{"name":"_firePropertyChanged","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>Name of the changed property</p>\n","type_names":["string"]}],"param_names_string":"property_name","description":"<p>Same as <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_fire\">Observable#_fire</a>, but for property listeners</p>\n","is_inherited":true},{"name":"_set","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]},{"name":"value","description":"<p>New property value</p>\n","type_names":["*"]}],"param_names_string":"name, value","description":"<p>Perform the set operation</p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true},{"name":"_addListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The owner of the callback</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments</p>\n","type_names":["*"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"event_name, fn, context, listener_args, listeners_by_event","returns":{"description":"<p>Listener structure</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},"description":"<p>Create the listener construct and push it into the listeners array for given event name</p>\n","is_inherited":true},{"name":"_callListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listeners","description":"<p>An array with listener structures</p>\n","type_names":["Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;"]},{"name":"event_args","description":"<p>Dynamic event arguments</p>\n","type_names":["*"]}],"param_names_string":"listeners, event_args","description":"<p>Perform fire - call listeners of an event</p>\n","is_inherited":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true},{"name":"_hasListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]}],"param_names_string":"event_name","returns":{"description":"<p>True, if there are listeners</p>\n","type_names":["boolean"]},"description":"<p>Does this object have any listeners for given event, including suspended instances</p>\n","is_inherited":true},{"name":"_removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"listener, listeners_by_event","description":"<p>Perform removal of the listener structure</p>\n","is_inherited":true}],"is_mixin":true}],"member_chain":[{"class_name":"Lava.system.Enumerable","descriptors":[{"name":"guid","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#object=Support;member=_tGUID\">_tGUID</a>"],"description":"<p>Global unique identifier of this instance</p>\n"},{"name":"isEnumerable","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>To tell other classes that this is instance of Enumerable</p>\n"},{"name":"_count","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"member","default_value":0,"type_names":["number"],"description":"<p>Count of items in Enumerable instance</p>\n"},{"name":"_data_names","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;string&gt;"],"description":"<p>Holds object keys, when Enumerable was constructed from object. Each name corresponds to it&#39;s value</p>\n"},{"name":"_data_uids","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;number&gt;"],"description":"<p>Unique identifiers for values, internal to this instance of enumerable. Note: they are not globally unique, just to this instance</p>\n"},{"name":"_data_values","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;*&gt;"],"description":"<p>Values, stored in this Enumerable</p>\n"},{"name":"_source_object","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["Array","Object","<a href=\"/www/doc.html#class=Lava.mixin.Properties\">Lava.mixin.Properties</a>","<a href=\"/www/doc.html#class=Lava.system.Enumerable\">Lava.system.Enumerable</a>"],"description":"<p>Object, from which this collection was constructed or refreshed</p>\n"},{"name":"_source_object_type","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["Lava.ENUMERABLE_SOURCE_OBJECT_TYPES"],"description":"<p>The type of <code>_source_object</code></p>\n"},{"name":"_uid","belongs":"Lava.system.Enumerable","defined":"Lava.system.Enumerable","is_private":true,"type":"member","default_value":1,"type_names":["number"],"description":"<p>Counter for next internal UID</p>\n"}]},{"class_name":"Lava.mixin.Properties","descriptors":[{"name":"isProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>To signal other classes that this class implements Properties</p>\n","is_inherited":true},{"name":"_properties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;name, *&gt;"],"description":"<p>Hash with property values</p>\n","is_inherited":true},{"name":"_property_listeners","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>Separate listeners hash for property changed events, same as <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_listeners\">Observable#_listeners</a></p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true}],"is_mixin":true}]}