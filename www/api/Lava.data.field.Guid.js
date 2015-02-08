{"method_chain":[{"class_name":"Lava.data.field.Guid","descriptors":[{"name":"export","belongs":"Lava.data.field.Guid","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"record, destination_object","is_overridden":true,"description":"<p>Export the field&#39;s value back to server-side data</p>\n","params":[{"name":"record","type_names":["<a href=\"/www/doc.html#class=Lava.data.Record\">Lava.data.Record</a>"]},{"name":"destination_object","description":"<p>Object with exported data</p>\n","type_names":["Object"]}]},{"name":"getValue","belongs":"Lava.data.field.Guid","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","params":[{"name":"record","type_names":["<a href=\"/www/doc.html#class=Lava.data.Record\">Lava.data.Record</a>"]},{"name":"properties","type_names":["Object"]}],"param_names_string":"record, properties","returns":{"type_names":["<a href=\"/www/doc.html#object=Support;member=_tGUID\">_tGUID</a>"]},"description":"<p>Get record&#39;s <code>guid</code> property</p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.data.field.Abstract:</b>\nGet this field&#39;s value from a record&#39;s properties</p>\n","is_overridden":true},{"name":"setValue","belongs":"Lava.data.field.Guid","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"record, properties, value","description":"<p>Throws an error</p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.data.field.Abstract:</b>\nSet this field&#39;s value to record&#39;s properties</p>\n","is_overridden":true,"params":[{"name":"record","type_names":["<a href=\"/www/doc.html#class=Lava.data.Record\">Lava.data.Record</a>"]},{"name":"properties","type_names":["Object"]},{"name":"value","type_names":["*"]}]}]},{"class_name":"Lava.data.field.Abstract","descriptors":[{"name":"destroy","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","description":"<p>Free resources and make this instance unusable</p>\n","is_inherited":true},{"name":"getInvalidReason","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","params":[{"name":"value","type_names":["*"]}],"param_names_string":"value","returns":{"is_nullable":true,"type_names":["string"]},"description":"<p>Unlike <a href=\"/www/doc.html#class=Lava.data.field.Abstract;member=isValidValue\">Abstract#isValidValue</a>, this is slow version of validity check,\nwhich returns a message in case the value is invalid</p>\n","is_inherited":true},{"name":"import","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","params":[{"name":"record","type_names":["<a href=\"/www/doc.html#class=Lava.data.Record\">Lava.data.Record</a>"]},{"name":"properties","type_names":["Object"]},{"name":"raw_properties","type_names":["Object"]}],"param_names_string":"record, properties, raw_properties","description":"<p>Initialize a field from server-side data</p>\n","is_inherited":true},{"name":"init","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","params":[{"name":"module","type_names":["<a href=\"/www/doc.html#class=Lava.data.Module\">Lava.data.Module</a>"]},{"name":"name","description":"<p>Field name</p>\n","type_names":["string"]},{"name":"config","type_names":["<a href=\"/www/doc.html#object=Support;member=_cField\">_cField</a>"]},{"name":"module_storage","description":"<p>Reference to object from module with properties of all records</p>\n","type_names":["object"]}],"param_names_string":"module, name, config, module_storage","description":"<p>Create the instance of a field</p>\n","is_inherited":true},{"name":"initNewRecord","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"record, properties","description":"<p>Records are either loaded from existing data, or created with default properties.\nHere a field may perform initialization of new records, for example: generate an id</p>\n","is_inherited":true},{"name":"isEqual","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","params":[{"name":"record_a"},{"name":"record_b"}],"param_names_string":"record_a, record_b","returns":{"description":"<p>True, in case values are equal</p>\n","type_names":["boolean"]},"description":"<p>Compare values of this field in two records</p>\n","is_inherited":true},{"name":"isLess","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","params":[{"name":"record_a","type_names":["<a href=\"/www/doc.html#class=Lava.data.Record\">Lava.data.Record</a>"]},{"name":"record_b","type_names":["<a href=\"/www/doc.html#class=Lava.data.Record\">Lava.data.Record</a>"]}],"param_names_string":"record_a, record_b","returns":{"description":"<p>True, in case the value of this field in <code>record_a</code> is less than value in <code>record_b</code></p>\n","type_names":["boolean"]},"description":"<p>Compare values of this field in two records</p>\n","is_inherited":true},{"name":"isNullable","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","returns":{"type_names":["boolean"]},"description":"<p>Get <code>_is_nullable</code></p>\n","is_inherited":true},{"name":"isValidValue","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","params":[{"name":"value","type_names":["*"]}],"param_names_string":"value","returns":{"description":"<p>True, if value is valid</p>\n","type_names":["boolean"]},"description":"<p>Is the given <code>value</code> valid for assignment to this field</p>\n","is_inherited":true},{"name":"onModuleFieldsCreated","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"default_properties","description":"<p>Module calls this method when all field objects are already created,\nand passes the object which will become default properties for all records.\nCommon purpose of this method is to set this field&#39;s default value and attach listeners to other fields</p>\n","is_inherited":true},{"name":"_fireFieldChangedEvents","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"function","params":[{"name":"record","type_names":["<a href=\"/www/doc.html#class=Lava.data.Record\">Lava.data.Record</a>"]}],"param_names_string":"record","description":"<p>Emit <a href=\"/www/doc.html#class=Lava.data.field.Abstract;event=changed\">changed</a> and fire the changed events from record instance</p>\n","is_inherited":true},{"name":"_getImportValue","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"function","params":[{"name":"properties","type_names":["Object"]},{"name":"raw_properties","type_names":["Object"]}],"param_names_string":"properties, raw_properties","returns":{"type_names":["*"]},"description":"<p>Helper method for importing values from server-side data. Performs validation</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true},{"name":"_addListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The owner of the callback</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments</p>\n","type_names":["*"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"event_name, fn, context, listener_args, listeners_by_event","returns":{"description":"<p>Listener structure</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},"description":"<p>Create the listener construct and push it into the listeners array for given event name</p>\n","is_inherited":true},{"name":"_callListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listeners","description":"<p>An array with listener structures</p>\n","type_names":["Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;"]},{"name":"event_args","description":"<p>Dynamic event arguments</p>\n","type_names":["*"]}],"param_names_string":"listeners, event_args","description":"<p>Perform fire - call listeners of an event</p>\n","is_inherited":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true},{"name":"_hasListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]}],"param_names_string":"event_name","returns":{"description":"<p>True, if there are listeners</p>\n","type_names":["boolean"]},"description":"<p>Does this object have any listeners for given event, including suspended instances</p>\n","is_inherited":true},{"name":"_removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"listener, listeners_by_event","description":"<p>Perform removal of the listener structure</p>\n","is_inherited":true}],"is_mixin":true}],"member_chain":[{"class_name":"Lava.data.field.Abstract","descriptors":[{"name":"_config","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#object=Support;member=_cField\">_cField</a>"],"description":"<p>Field&#39;s config</p>\n","is_inherited":true},{"name":"_is_nullable","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>May this field be assigned a <span class=\"api-keyword\">null</span> value</p>\n","is_inherited":true},{"name":"_module","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#class=Lava.data.ModuleAbstract\">Lava.data.ModuleAbstract</a>"],"description":"<p>Field&#39;s module</p>\n","is_inherited":true},{"name":"_name","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["string"],"description":"<p>Field&#39;s name</p>\n","is_inherited":true},{"name":"_properties_by_guid","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["Object.&lt;<a href=\"/www/doc.html#object=Support;member=_tGUID\">_tGUID</a>, Object&gt;"],"description":"<p>Reference to object from module with properties of all records</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true}],"is_mixin":true}],"events":[{"description":"<p>Field&#39;s value has changed in a record instance</p>\n","name":"changed","params":[{"name":"record","description":"<p>The record with changed field</p>\n","type_names":["<a href=\"/www/doc.html#class=Lava.data.Record\">Lava.data.Record</a>"]}],"longname":"Lava.data.field.Abstract#event:changed","kind":"event"}]}