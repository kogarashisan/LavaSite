{"events":[{"description":"<p>Fired, when the field&#39;s value changes: local record (<code>child</code>) now references the <code>collection_owner</code></p>\n","name":"added_child","params":[{"name":"collection_owner","description":"<p>New referenced record</p>\n","type_names":["Lava.data.RecordAbstract"]},{"name":"child","description":"<p>Referencing record from local module</p>\n","type_names":["Lava.data.RecordAbstract"]}],"longname":"Lava.data.field.Record#event:added_child","kind":"event"},{"description":"<p>Fired, when the field&#39;s value changes: local record (<code>child</code>) no longer references the <code>collection_owner</code></p>\n","name":"removed_child","params":[{"name":"collection_owner","description":"<p>Old referenced record</p>\n","type_names":["Lava.data.RecordAbstract"]},{"name":"child","description":"<p>Referencing record from local module</p>\n","type_names":["Lava.data.RecordAbstract"]}],"longname":"Lava.data.field.Record#event:removed_child","kind":"event"},{"description":"<p>Field&#39;s value has changed in a record instance</p>\n","name":"changed","params":[{"name":"record","description":"<p>The record with changed field</p>\n","type_names":["Lava.data.RecordAbstract"]}],"longname":"Lava.data.field.Abstract#event:changed","kind":"event"}],"method_chain":[{"class_name":"Lava.data.field.Record","descriptors":[{"name":"destroy","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","is_overridden":true,"description":"<p>Free resources and make this instance unusable</p>\n"},{"name":"export","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"record, destination_object","is_overridden":true,"description":"<p>Export the field&#39;s value back to server-side data</p>\n","params":[{"name":"record","type_names":["Lava.data.RecordAbstract"]},{"name":"destination_object","description":"<p>Object with exported data</p>\n","type_names":["Object"]}]},{"name":"getCollection","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":false,"type":"function","params":[{"name":"referenced_record","description":"<p>The collection&#39;s owner record from referenced module</p>\n","type_names":["Lava.data.RecordAbstract"]}],"param_names_string":"referenced_record","returns":{"description":"<p>All records</p>\n","type_names":["Array"]},"description":"<p>API for <a href=\"/www/doc.html#class=Lava.data.field.Collection\">Lava.data.field.Collection</a> field. Get all local records, which reference <code>referenced_record</code></p>\n"},{"name":"getCollectionCount","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":false,"type":"function","params":[{"name":"referenced_record","description":"<p>The collection&#39;s owner record from referenced module</p>\n","type_names":["Lava.data.RecordAbstract"]}],"param_names_string":"referenced_record","returns":{"type_names":["Number"]},"description":"<p>API for <a href=\"/www/doc.html#class=Lava.data.field.Collection\">Lava.data.field.Collection</a> field. Get count of local records, which reference the <code>referenced_record</code></p>\n"},{"name":"getInvalidReason","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"value","is_overridden":true,"description":"<p>Unlike <a href=\"/www/doc.html#class=Lava.data.field.Abstract;member=isValidValue\">Abstract#isValidValue</a>, this is slow version of validity check,\nwhich returns a message in case the value is invalid</p>\n","returns":{"is_nullable":true,"type_names":["string"]},"params":[{"name":"value","type_names":["*"]}]},{"name":"getReferencedModule","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":false,"type":"function","returns":{"type_names":["<a href=\"/www/doc.html#class=Lava.data.Module\">Lava.data.Module</a>"]},"description":"<p>Get <code>_referenced_module</code></p>\n"},{"name":"getValue","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"record, properties","is_overridden":true,"description":"<p>Get this field&#39;s value from a record&#39;s properties</p>\n","params":[{"name":"record","type_names":["Lava.data.RecordAbstract"]},{"name":"properties","type_names":["Object"]}]},{"name":"import","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"record, properties, raw_properties","is_overridden":true,"description":"<p>Initialize a field from server-side data</p>\n","params":[{"name":"record","type_names":["Lava.data.RecordAbstract"]},{"name":"properties","type_names":["Object"]},{"name":"raw_properties","type_names":["Object"]}]},{"name":"init","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","params":[{"name":"module","type_names":["<a href=\"/www/doc.html#class=Lava.data.Module\">Lava.data.Module</a>"]},{"name":"name","description":"<p>Field name</p>\n","type_names":["string"]},{"name":"config","type_names":["<a href=\"/www/doc.html#object=Support;member=_cRecordField\">_cRecordField</a>"]},{"name":"module_storage","description":"<p>Reference to object from module with properties of all records</p>\n","type_names":["object"]}],"param_names_string":"module, name, config, module_storage","is_overridden":true,"description":"<p>Create the instance of a field</p>\n"},{"name":"initNewRecord","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"record, properties","is_overridden":true,"description":"<p>Records are either loaded from existing data, or created with default properties.\nHere a field may perform initialization of new records, for example: generate an id</p>\n"},{"name":"isEqual","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"record_a, record_b","is_overridden":true,"description":"<p>Compare values of this field in two records</p>\n","returns":{"description":"<p>True, in case values are equal</p>\n","type_names":["boolean"]},"params":[{"name":"record_a"},{"name":"record_b"}]},{"name":"isLess","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"record_a, record_b","is_overridden":true,"description":"<p>Compare values of this field in two records</p>\n","returns":{"description":"<p>True, in case the value of this field in <code>record_a</code> is less than value in <code>record_b</code></p>\n","type_names":["boolean"]},"params":[{"name":"record_a","type_names":["Lava.data.RecordAbstract"]},{"name":"record_b","type_names":["Lava.data.RecordAbstract"]}]},{"name":"isValidValue","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"new_record","is_overridden":true,"description":"<p>Is the given <code>value</code> valid for assignment to this field</p>\n","returns":{"description":"<p>True, if value is valid</p>\n","type_names":["boolean"]},"params":[{"name":"value","type_names":["*"]}]},{"name":"onModuleFieldsCreated","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"default_properties","is_overridden":true,"description":"<p>Module calls this method when all field objects are already created,\nand passes the object which will become default properties for all records.\nCommon purpose of this method is to set this field&#39;s default value and attach listeners to other fields</p>\n"},{"name":"setValue","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","param_names_string":"record, properties, new_ref_record","is_overridden":true,"description":"<p>Set this field&#39;s value to record&#39;s properties</p>\n","params":[{"name":"record","type_names":["Lava.data.RecordAbstract"]},{"name":"properties","type_names":["Object"]},{"name":"value","type_names":["*"]}]},{"name":"_getComparisonValue","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"function","params":[{"name":"record","type_names":["Lava.data.RecordAbstract"]}],"param_names_string":"record","returns":{"type_names":["string"]},"description":"<p>Get field&#39;s value equivalent for comparison</p>\n"},{"name":"_onExternalIdCreated","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"function","params":[{"name":"foreign_module_id_field","type_names":["<a href=\"/www/doc.html#class=Lava.data.field.Id\">Lava.data.field.Id</a>"]},{"name":"event_args","type_names":["<a href=\"/www/doc.html#class=Lava.data.field.Abstract\">Lava.data.field.Abstract</a>#event:changed"]}],"param_names_string":"foreign_module_id_field, event_args","description":"<p>A record was saved to the database and assigned an id. Need to assign foreign keys for local records</p>\n"},{"name":"_onForeignKeyChanged","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"function","params":[{"name":"foreign_key_field","type_names":["<a href=\"/www/doc.html#class=Lava.data.field.ForeignKey\">Lava.data.field.ForeignKey</a>"]},{"name":"event_args","type_names":["<a href=\"/www/doc.html#class=Lava.data.field.Abstract\">Lava.data.field.Abstract</a>#event:changed"]}],"param_names_string":"foreign_key_field, event_args","description":"<p>Fires, when local record&#39;s foreign id field is assigned a new value.\nExample:</p>\n<div class=\"lava-code-container\"><div class=\"lava-code\"><pre class=\"lava-code-line-numbers\">&nbsp;&nbsp;1\r\n</pre><pre class=\"lava-code-content hljs javascript\">record.set(<span class=\"hljs-string\">'category_id'</span>, <span class=\"hljs-number\">123</span>); <span class=\"hljs-comment\">// 'record' is from local module, 123 - id of foreign record</span></pre></div></div>"},{"name":"_onReferencedModuleRecordsLoaded","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"function","params":[{"name":"module","type_names":["<a href=\"/www/doc.html#class=Lava.data.Module\">Lava.data.Module</a>"]},{"name":"event_args","type_names":["<a href=\"/www/doc.html#class=Lava.data.Module\">Lava.data.Module</a>#event:records_loaded"]}],"param_names_string":"module, event_args","description":"<p>There may be local records that reference external records, which are not yet loaded (by ForeignKey).\nThis field is <span class=\"api-keyword\">null</span> for them.\nWhen referenced records are loaded - local records must update this field with the newly loaded instances</p>\n"},{"name":"_registerByReferencedId","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"function","params":[{"name":"record","description":"<p>The local record</p>\n","type_names":["Lava.data.RecordAbstract"]},{"name":"properties","description":"<p>The properties of local record</p>\n","type_names":["Object"]},{"name":"referenced_record_id","description":"<p>The id of foreign record, which it belongs to</p>\n","type_names":["string"]}],"param_names_string":"record, properties, referenced_record_id","description":"<p>Update value of this field in local <code>record</code> and add the record to field&#39;s internal collections</p>\n"},{"name":"_registerRecord","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"function","params":[{"name":"local_record","type_names":["Lava.data.RecordAbstract"]},{"name":"referenced_record","description":"<p>The collection owner</p>\n","type_names":["Lava.data.RecordAbstract"]}],"param_names_string":"local_record, referenced_record","description":"<p>Add <code>local_record</code> to field&#39;s internal collection of records from local module, referenced by <code>referenced_record</code></p>\n"},{"name":"_unregisterRecord","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"function","params":[{"name":"local_record","type_names":["Lava.data.RecordAbstract"]},{"name":"referenced_record","type_names":["Lava.data.RecordAbstract"]}],"param_names_string":"local_record, referenced_record","description":"<p>Remove <code>local_record</code> from field&#39;s internal collection referenced by <code>referenced_record</code></p>\n"}]},{"class_name":"Lava.data.field.Abstract","descriptors":[{"name":"isNullable","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":false,"type":"function","returns":{"type_names":["boolean"]},"description":"<p>Get <code>_is_nullable</code></p>\n","is_inherited":true},{"name":"_fireFieldChangedEvents","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"function","params":[{"name":"record","type_names":["Lava.data.RecordAbstract"]}],"param_names_string":"record","description":"<p>Emit <a href=\"/www/doc.html#class=Lava.data.field.Abstract;event=changed\">changed</a> and fire the changed events from record instance</p>\n","is_inherited":true},{"name":"_getImportValue","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"function","params":[{"name":"properties","type_names":["Object"]},{"name":"raw_properties","type_names":["Object"]}],"param_names_string":"properties, raw_properties","returns":{"type_names":["*"]},"description":"<p>Helper method for importing values from server-side data. Performs validation</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true},{"name":"_addListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The owner of the callback</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments</p>\n","type_names":["*"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"event_name, fn, context, listener_args, listeners_by_event","returns":{"description":"<p>Listener structure</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},"description":"<p>Create the listener construct and push it into the listeners array for given event name</p>\n","is_inherited":true},{"name":"_callListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listeners","description":"<p>An array with listener structures</p>\n","type_names":["Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;"]},{"name":"event_args","description":"<p>Dynamic event arguments</p>\n","type_names":["*"]}],"param_names_string":"listeners, event_args","description":"<p>Perform fire - call listeners of an event</p>\n","is_inherited":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true},{"name":"_hasListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]}],"param_names_string":"event_name","returns":{"description":"<p>True, if there are listeners</p>\n","type_names":["boolean"]},"description":"<p>Does this object have any listeners for given event, including suspended instances</p>\n","is_inherited":true},{"name":"_removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"listener, listeners_by_event","description":"<p>Perform removal of the listener structure</p>\n","is_inherited":true}],"is_mixin":true}],"member_chain":[{"class_name":"Lava.data.field.Record","descriptors":[{"name":"EMPTY_FOREIGN_ID","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":false,"type":"member","default_value":0,"is_constant":true,"description":"<p>The foreign ID value, when there is no referenced record</p>\n"},{"name":"isRecordField","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","type_names":["boolean"],"is_constant":true,"description":"<p>This class is instance of a Record field</p>\n"},{"name":"_collections_by_foreign_guid","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#class=Lava.data.Record\">Lava.data.Record</a>&gt;&gt;"],"description":"<p>Records, grouped by this field. Serves as a helper for mirror Collection field.\nKey is GUID of the foreign record, value is collection of records from local module</p>\n"},{"name":"_external_id_changed_listener","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"],"description":"<p>The listener for external ID creation event (<a href=\"/www/doc.html#class=Lava.data.field.Abstract;event=changed\">changed</a> in <code>_external_id_field</code> field)</p>\n"},{"name":"_external_id_field","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#class=Lava.data.field.Abstract\">Lava.data.field.Abstract</a>"],"description":"<p>The <a href=\"/www/doc.html#class=Lava.data.field.Id\">Lava.data.field.Id</a> field in external module</p>\n"},{"name":"_external_records_loaded_listener","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"],"description":"<p>Listener for <a href=\"/www/doc.html#class=Lava.data.Module;event=records_loaded\">records_loaded</a> in external module</p>\n"},{"name":"_foreign_key_changed_listener","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"],"description":"<p>Listener for <a href=\"/www/doc.html#class=Lava.data.field.Abstract;event=changed\">changed</a> in <code>_foreign_key_field</code></p>\n"},{"name":"_foreign_key_field","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#class=Lava.data.field.ForeignKey\">Lava.data.field.ForeignKey</a>"],"description":"<p>Local field with ID of the record in external module</p>\n"},{"name":"_foreign_key_field_name","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["string"],"description":"<p>Name of accompanying <a href=\"/www/doc.html#class=Lava.data.field.ForeignKey\">Lava.data.field.ForeignKey</a> field from local module. Example: &#39;parent_id&#39;</p>\n"},{"name":"_is_nullable","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_overridden":true,"description":"<p>May this field be assigned a <span class=\"api-keyword\">null</span> value</p>\n","type_names":["boolean"]},{"name":"_referenced_module","belongs":"Lava.data.field.Record","defined":"Lava.data.field.Record","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#class=Lava.data.Module\">Lava.data.Module</a>"],"description":"<p>Owner module for the records of this field</p>\n"}]},{"class_name":"Lava.data.field.Abstract","descriptors":[{"name":"_config","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#object=Support;member=_cField\">_cField</a>"],"description":"<p>Field&#39;s config</p>\n","is_inherited":true},{"name":"_module","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#class=Lava.data.ModuleAbstract\">Lava.data.ModuleAbstract</a>"],"description":"<p>Field&#39;s module</p>\n","is_inherited":true},{"name":"_name","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["string"],"description":"<p>Field&#39;s name</p>\n","is_inherited":true},{"name":"_properties_by_guid","belongs":"Lava.data.field.Abstract","defined":"Lava.data.field.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["Object.&lt;<a href=\"/www/doc.html#object=Support;member=_tGUID\">_tGUID</a>, Object&gt;"],"description":"<p>Reference to object from module with properties of all records</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true}],"is_mixin":true}]}