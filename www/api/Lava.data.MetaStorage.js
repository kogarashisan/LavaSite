var page_json = {"method_chain":[{"class_name":"Lava.data.MetaStorage","descriptors":[{"name":"createMetaRecord","belongs":"Lava.data.MetaStorage","defined":"Lava.data.MetaStorage","is_private":false,"type":"function","params":[{"name":"ext_guid","description":"<p>GUID of the external record, to which this MetaRecord will be attached</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tGUID\">_tGUID</a>"]},{"name":"raw_properties","description":"<p>Initial field values</p>\n","type_names":["Object"]},{"name":"original_record","description":"<p>Original record, which will be saved in MetaRecord instance</p>\n","is_optional":true,"type_names":["Object"]}],"param_names_string":"ext_guid, raw_properties, original_record","returns":{"type_names":["<a href=\"/www/doc/class/Lava.data.MetaRecord.html\">Lava.data.MetaRecord</a>"]},"description":"<p>Create a new MetaRecord instance</p>\n"},{"name":"get","belongs":"Lava.data.MetaStorage","defined":"Lava.mixin.Properties","is_private":false,"type":"function","params":[{"name":"ext_guid","type_names":["<a href=\"/www/doc/object/Support.html#member=_tGUID\">_tGUID</a>"]}],"param_names_string":"ext_guid","returns":{"type_names":["<a href=\"/www/doc/class/Lava.data.MetaRecord.html\">Lava.data.MetaRecord</a>"],"description":"<p>Property value</p>\n"},"description":"<p>Get an extension record by GUID of normal record</p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.mixin.Properties:</b>\nGet property</p>\n","is_overridden":true},{"name":"init","belongs":"Lava.data.MetaStorage","defined":"Lava.data.MetaStorage","is_private":false,"type":"function","params":[{"name":"config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cMetaStorage\">_cMetaStorage</a>"]}],"param_names_string":"config","description":"<p>Create an instance of MetaStorage</p>\n"},{"name":"set","belongs":"Lava.data.MetaStorage","defined":"Lava.mixin.Properties","is_private":false,"type":"function","description":"<p>Throws an error</p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.mixin.Properties:</b>\nSet property</p>\n","is_overridden":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]},{"name":"value","description":"<p>New property value</p>\n","type_names":["*"]}]}]},{"class_name":"Lava.mixin.Properties","descriptors":[{"name":"firePropertyChangedEvents","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>The name of the changed property</p>\n","type_names":["string"]}],"param_names_string":"property_name","description":"<p>Fire the &#39;property_changed&#39; event for Observable interface, and Properties&#39; native <a href=\"/www/doc/class/Lava.mixin.Properties.html#member=onPropertyChanged\">Properties#onPropertyChanged</a> event</p>\n","is_inherited":true,"is_implemented":true},{"name":"getProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"returns":{"description":"<p>Copy of <code>_properties</code> object</p>\n","type_names":["Object.&lt;name, *&gt;"]},"description":"<p>Return a copy of the properties hash</p>\n","is_inherited":true,"is_implemented":true},{"name":"isset","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]}],"param_names_string":"name","returns":{"description":"<p>True, if property exists</p>\n","type_names":["boolean"]},"description":"<p>Returns <span class=\"api-keyword\">true</span> if property exists, even if it&#39;s null/undefined</p>\n","is_inherited":true,"is_implemented":true},{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true,"is_implemented":true},{"name":"onPropertyChanged","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>Name of the property to listen for changes</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>May be usable when one callback responds to changes of different properties</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"property_name, fn, context, listener_args","returns":{"description":"<p>Listener construct, which may be removed or suspended later</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Same as <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a>, but returns listener to <code>property_name</code> instead of <code>event_name</code></p>\n","is_inherited":true,"is_implemented":true},{"name":"once","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"param_names_string":"event_name, fn, context, listener_args","is_inherited":true,"is_implemented":true},{"name":"oncePropertyChanged","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>Name of the property to listen for changes</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>May be usable when one callback responds to changes of different properties</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"property_name, fn, context, listener_args","returns":{"description":"<p>Listener construct, which may be removed or suspended later</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Same as <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=once\">Observable#once</a>, but returns listener to <code>property_name</code> instead of <code>event_name</code></p>\n","is_inherited":true,"is_implemented":true},{"name":"removeAllListenersByContext","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"context","type_names":["object"]}],"param_names_string":"context","description":"<p>Remove all listeners, which belong to <code>context</code></p>\n","is_inherited":true,"is_implemented":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true,"is_implemented":true},{"name":"removeListenersByContext","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","type_names":["string"]},{"name":"context","type_names":["object"]}],"param_names_string":"event_name, context","description":"<p>Remove all listeners to <code>event_name</code>, which belong to <code>context</code></p>\n","is_inherited":true,"is_implemented":true},{"name":"setProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"properties_object","description":"<p>A hash with new property values</p>\n","type_names":["Object.&lt;string, *&gt;"]}],"param_names_string":"properties_object","description":"<p>Set multiple properties at once</p>\n","is_inherited":true,"is_implemented":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true,"is_implemented":true},{"name":"_set","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]},{"name":"value","description":"<p>New property value</p>\n","type_names":["*"]}],"param_names_string":"name, value","description":"<p>Perform the set operation</p>\n","is_inherited":true,"is_implemented":true}],"is_mixin":true,"is_implemented":true},{"class_name":"Lava.data.ModuleAbstract","descriptors":[{"name":"destroy","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":false,"type":"function","description":"<p>Free resources and make this instance unusable</p>\n","is_inherited":true},{"name":"getAllRecords","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":false,"type":"function","returns":{"type_names":["Array.&lt;<a href=\"/www/doc/class/Lava.data.Record.html\">Lava.data.Record</a>&gt;"]},"description":"<p>Return a copy of local <code>_records</code> array</p>\n","is_inherited":true},{"name":"getCount","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":false,"type":"function","returns":{"type_names":["number"]},"description":"<p>Get number of records in the module</p>\n","is_inherited":true},{"name":"initFields","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":false,"type":"function","description":"<p>Called by App instance. Do not call this function directly.</p>\n","is_inherited":true},{"name":"_createFields","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":true,"type":"function","params":[{"name":"config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cModule\">_cModule</a>","<a href=\"/www/doc/object/Support.html#member=_cMetaStorage\">_cMetaStorage</a>"]}],"param_names_string":"config","returns":{"description":"<p>Default record properties object with initial values for each field</p>\n","type_names":["Object"]},"description":"<p>Create field instances and return the default record properties object</p>\n","is_inherited":true},{"name":"_createRecordProperties","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":true,"type":"function","returns":{"type_names":["Object"]},"description":"<p>Returns an object with record&#39;s initial properties. This function is generated in constructor</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true},{"name":"once","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"param_names_string":"event_name, fn, context, listener_args","is_inherited":true},{"name":"removeAllListenersByContext","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"context","type_names":["object"]}],"param_names_string":"context","description":"<p>Remove all listeners, which belong to <code>context</code></p>\n","is_inherited":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true},{"name":"removeListenersByContext","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","type_names":["string"]},{"name":"context","type_names":["object"]}],"param_names_string":"event_name, context","description":"<p>Remove all listeners to <code>event_name</code>, which belong to <code>context</code></p>\n","is_inherited":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true}],"is_mixin":true}],"member_chain":[{"class_name":"Lava.mixin.Properties","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_readonly":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true,"is_implemented":true},{"name":"isProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_readonly":true,"description":"<p>To signal other classes that this class implements Properties</p>\n","is_inherited":true,"is_implemented":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true,"is_implemented":true},{"name":"_properties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;name, *&gt;"],"description":"<p>Hash with property values</p>\n","is_inherited":true,"is_implemented":true}],"is_mixin":true,"is_implemented":true},{"class_name":"Lava.data.ModuleAbstract","descriptors":[{"name":"_config","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/object/Support.html#member=_cModule\">_cModule</a>","<a href=\"/www/doc/object/Support.html#member=_cMetaStorage\">_cMetaStorage</a>"],"description":"<p>Module&#39;s config</p>\n","is_inherited":true},{"name":"_fields","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, <a href=\"/www/doc/class/Lava.data.field.Abstract.html\">Lava.data.field.Abstract</a>&gt;"],"description":"<p>Module&#39;s field instances</p>\n","is_inherited":true},{"name":"_properties_by_guid","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, <a href=\"/www/doc/class/Lava.data.Record.html\">Lava.data.Record</a>&gt;"],"description":"<p>Record&#39;s properties by their global unique identifiers</p>\n","is_inherited":true},{"name":"_record_constructor","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["function"],"description":"<p>Cached record class constructor</p>\n","is_inherited":true},{"name":"_records","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;<a href=\"/www/doc/class/Lava.data.Record.html\">Lava.data.Record</a>&gt;"],"description":"<p>All records in this module</p>\n","is_inherited":true},{"name":"_records_by_guid","belongs":"Lava.data.ModuleAbstract","defined":"Lava.data.ModuleAbstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, <a href=\"/www/doc/class/Lava.data.Record.html\">Lava.data.Record</a>&gt;"],"description":"<p>Records by their global unique identifiers</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_readonly":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true}],"is_mixin":true}]}