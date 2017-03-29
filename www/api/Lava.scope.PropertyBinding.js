var page_json = {"events":[{"description":"<p>Value of this PropertyBinding instance has changed</p>\n","name":"changed","longname":"Lava.scope.PropertyBinding#event:changed","kind":"event"}],"method_chain":[{"class_name":"Lava.scope.PropertyBinding","descriptors":[{"name":"destroy","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.Abstract","is_private":false,"type":"function","is_overridden":true,"description":"<p>Free resources and make this instance unusable</p>\n"},{"name":"getValue","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","returns":{"type_names":["*"]},"description":"<p>Get <code>_value</code></p>\n"},{"name":"init","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","params":[{"name":"view","description":"<p>Scope&#39;s owner view, to which it&#39;s bound</p>\n","type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"]},{"name":"property_name","type_names":["string"]},{"name":"assign_config","description":"<p>Config for the Argument, in case this scope is created in &quot;assign&quot; mode</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_cAssign\">_cAssign</a>"]}],"param_names_string":"view, property_name, assign_config","description":"<p>Create the PropertyBinding instance. Refresh value from view&#39;s property or set value from assign</p>\n"},{"name":"isConnected","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","returns":{"description":"<p>Always returns <span class=\"api-keyword\">true</span></p>\n","type_names":["boolean"]},"description":"<p>PropertyBinding is always bound to it&#39;s view</p>\n"},{"name":"onAssignChanged","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","description":"<p>Value of &quot;assign&quot; argument has changed. Set view&#39;s property and schedule refresh</p>\n"},{"name":"onContainerPropertyChanged","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","description":"<p>View&#39;s property has changed. Schedule refresh</p>\n"},{"name":"setValue","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","params":[{"name":"value","type_names":["*"]}],"param_names_string":"value","description":"<p>Set property value to the bound view</p>\n"},{"name":"_doRefresh","belongs":"Lava.scope.PropertyBinding","defined":"Lava.mixin.Refreshable","is_private":true,"type":"function","is_overridden":true,"description":"<p>Must be overridden in classes that implement Refreshable to perform the actual refresh logic</p>\n"}]},{"class_name":"Lava.scope.Abstract","descriptors":[{"name":"getDataBinding","belongs":"Lava.scope.Abstract","defined":"Lava.scope.Abstract","is_private":false,"type":"function","params":[{"name":"property_name","type_names":["string"]}],"param_names_string":"property_name","returns":{"type_names":["<a href=\"/www/doc/class/Lava.scope.DataBinding.html\">Lava.scope.DataBinding</a>"]},"description":"<p>Get a scope, which is bound to property of the value of this container</p>\n","is_inherited":true},{"name":"getSegment","belongs":"Lava.scope.Abstract","defined":"Lava.scope.Abstract","is_private":false,"type":"function","params":[{"name":"name_source_scope","type_names":["<a href=\"/www/doc/class/Lava.scope.PropertyBinding.html\">Lava.scope.PropertyBinding</a>","<a href=\"/www/doc/class/Lava.scope.DataBinding.html\">Lava.scope.DataBinding</a>"]}],"param_names_string":"name_source_scope","returns":{"type_names":["<a href=\"/www/doc/class/Lava.scope.Segment.html\">Lava.scope.Segment</a>"]},"description":"<p>Get a <a href=\"/www/doc/class/Lava.scope.Segment.html\">Lava.scope.Segment</a>, which is bound to property of the value of this container</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Refreshable","descriptors":[{"name":"debugAssertClean","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"description":"<p>Internal debug assertion, called to verify that the scope does not need to be refreshed</p>\n","is_inherited":true},{"name":"isWaitingRefresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"returns":{"description":"<p><span class=\"api-keyword\">true</span>, if scope is in refresh queue, and <span class=\"api-keyword\">false</span> otherwise</p>\n","type_names":["boolean"]},"description":"<p>Will the scope be refreshed in the next refresh cycle</p>\n","is_inherited":true},{"name":"refresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"refresh_id","description":"<p>The id of current refresh loop</p>\n","type_names":["number"]},{"name":"is_safe","description":"<p>Internal switch used to control infinite refresh loop exceptions</p>\n","is_optional":true,"type_names":["boolean"]}],"param_names_string":"refresh_id, is_safe","returns":{"description":"<p><span class=\"api-keyword\">true</span> in case of infinite loop, and <span class=\"api-keyword\">false</span> in case of normal refresh</p>\n","type_names":["boolean"]},"description":"<p>Called by <a href=\"/www/doc/object/Lava.ScopeManager.html\">Lava.ScopeManager</a> during refresh loop. You should not call this method directly.\nWarning: violates code style with multiple return statements.</p>\n","is_inherited":true},{"name":"suspendRefreshable","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"description":"<p>Cancel the current refresh ticket and ignore next refresh cycle. Does not destroy the Refreshable instance</p>\n","is_inherited":true},{"name":"_queueForRefresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"function","is_from_mixin":true,"description":"<p>Ensure that this scope will participate in the next refresh cycle</p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true},{"name":"once","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"param_names_string":"event_name, fn, context, listener_args","is_inherited":true},{"name":"removeAllListenersByContext","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"context","type_names":["object"]}],"param_names_string":"context","description":"<p>Remove all listeners, which belong to <code>context</code></p>\n","is_inherited":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true},{"name":"removeListenersByContext","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","type_names":["string"]},{"name":"context","type_names":["object"]}],"param_names_string":"event_name, context","description":"<p>Remove all listeners to <code>event_name</code>, which belong to <code>context</code></p>\n","is_inherited":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true}],"is_mixin":true}],"member_chain":[{"class_name":"Lava.scope.PropertyBinding","descriptors":[{"name":"guid","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/object/Support.html#member=_tGUID\">_tGUID</a>"],"description":"<p>Global unique identifier of this instance</p>\n"},{"name":"isSetValue","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_readonly":true,"type_names":["boolean"],"description":"<p>This instance supports two-way data binding</p>\n"},{"name":"_assign_argument","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/class/Lava.scope.Argument.html\">Lava.scope.Argument</a>"],"description":"<p>PropertyBinding supports &quot;assigns&quot; - one-way binding of widget&#39;s property to any <a href=\"/www/doc/class/Lava.scope.Argument.html\">Lava.scope.Argument</a> value</p>\n"},{"name":"_property_changed_listener","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"],"description":"<p>Listener for onPropertyChanged in bound view</p>\n"},{"name":"_property_name","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["string"],"description":"<p>View&#39;s property name, to which this instance is bound</p>\n"},{"name":"_view","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"],"description":"<p>Scope&#39;s bound view (also the scope&#39;s owner view, which created the instance)</p>\n"}]},{"class_name":"Lava.scope.Abstract","descriptors":[{"name":"isValueContainer","belongs":"Lava.scope.Abstract","defined":"Lava.scope.Abstract","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","is_readonly":true,"type_names":["boolean"],"description":"<p>Instance belongs to scope/Abstract</p>\n","is_inherited":true},{"name":"_data_bindings_by_property","belongs":"Lava.scope.Abstract","defined":"Lava.scope.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, <a href=\"/www/doc/class/Lava.scope.DataBinding.html\">Lava.scope.DataBinding</a>&gt;"],"description":"<p>Scopes, bound to properties of the value of this container</p>\n","is_inherited":true},{"name":"_data_segments","belongs":"Lava.scope.Abstract","defined":"Lava.scope.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;<a href=\"/www/doc/object/Support.html#member=_tGUID\">_tGUID</a>, <a href=\"/www/doc/class/Lava.scope.Segment.html\">Lava.scope.Segment</a>&gt;"],"description":"<p>Segments, bound to properties of the value of this container.\n[name_source_guid} =&gt; Segment</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Refreshable","descriptors":[{"name":"isRefreshable","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_readonly":true,"type_names":["boolean"],"description":"<p>Tell other classes that this instance is inherited from Refreshable</p>\n","is_inherited":true},{"name":"level","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"member","is_from_mixin":true,"default_value":0,"is_readonly":true,"type_names":["number"],"description":"<p>Indicates the priority of this scope in the hierarchy. Scopes with lower priority are refreshed first</p>\n","is_inherited":true},{"name":"_last_refresh_id","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":0,"type_names":["number"],"description":"<p>Each time the scope is refreshed - it&#39;s assigned the id of the current refresh loop</p>\n","is_inherited":true},{"name":"_refresh_cycle_count","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":0,"type_names":["number"],"description":"<p>How many times this scope was refreshed during current refresh loop</p>\n","is_inherited":true},{"name":"_refresh_ticket","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">null</span>","type_names":["Object"],"description":"<p>The object, which is given by <a href=\"/www/doc/object/Lava.ScopeManager.html\">Lava.ScopeManager</a> when the scope is added into the refresh queue</p>\n","is_inherited":true},{"name":"_value","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">null</span>","type_names":["*"],"description":"<p>Scope&#39;s value</p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_readonly":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true}],"is_mixin":true}]}