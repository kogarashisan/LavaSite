{"events":[{"description":"<p>Value of this PropertyBinding instance has changed</p>\n","name":"changed","longname":"Lava.scope.PropertyBinding#event:changed","kind":"event"},{"description":"<p>This instance may become dirty and will fire the &#39;refreshed&#39; event</p>\n","name":"waits_refresh","longname":"Lava.mixin.Refreshable#event:waits_refresh","kind":"event"},{"description":"<p>Instance is now clean, and scopes that depend on it can update themselves now</p>\n","name":"refreshed","longname":"Lava.mixin.Refreshable#event:refreshed","kind":"event"}],"method_chain":[{"class_name":"Lava.scope.PropertyBinding","descriptors":[{"name":"destroy","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.Abstract","is_private":false,"type":"function","is_overridden":true,"description":"<p>Free resources and make this instance unusable</p>\n"},{"name":"getValue","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","returns":{"type_names":["*"]},"description":"<p>Get <code>_value</code></p>\n"},{"name":"init","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","params":[{"name":"view","description":"<p>Scope&#39;s owner view, to which it&#39;s bound</p>\n","type_names":["<a href=\"/www/doc.html#class=Lava.view.Abstract\">Lava.view.Abstract</a>"]},{"name":"property_name","type_names":["string"]},{"name":"level","type_names":["number"]},{"name":"assign_config","description":"<p>Config for the Argument, in case this scope is created in &quot;assign&quot; mode</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_cAssign\">_cAssign</a>"]}],"param_names_string":"view, property_name, level, assign_config","description":"<p>Create the PropertyBinding instance. Refresh value from view&#39;s property or set value from assign</p>\n"},{"name":"isConnected","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","returns":{"description":"<p>Always returns <span class=\"api-keyword\">true</span></p>\n","type_names":["boolean"]},"description":"<p>PropertyBinding is always bound to it&#39;s view</p>\n"},{"name":"onAssignChanged","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","description":"<p>Value of &quot;assign&quot; argument has changed. Set view&#39;s property and schedule refresh</p>\n"},{"name":"onContainerPropertyChanged","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","description":"<p>View&#39;s property has changed. Schedule refresh</p>\n"},{"name":"setValue","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"function","params":[{"name":"value","type_names":["*"]}],"param_names_string":"value","description":"<p>Set property value to the bound view</p>\n"},{"name":"_doRefresh","belongs":"Lava.scope.PropertyBinding","defined":"Lava.mixin.Refreshable","is_private":true,"type":"function","is_overridden":true,"description":"<p>Must be overridden in classes that implement Refreshable to perform the actual refresh logic</p>\n"}]},{"class_name":"Lava.scope.Abstract","descriptors":[{"name":"getDataBinding","belongs":"Lava.scope.Abstract","defined":"Lava.scope.Abstract","is_private":false,"type":"function","params":[{"name":"property_name","type_names":["string"]}],"param_names_string":"property_name","returns":{"type_names":["<a href=\"/www/doc.html#class=Lava.scope.DataBinding\">Lava.scope.DataBinding</a>"]},"description":"<p>Get a scope, which is bound to property of the value of this container</p>\n","is_inherited":true},{"name":"getSegment","belongs":"Lava.scope.Abstract","defined":"Lava.scope.Abstract","is_private":false,"type":"function","params":[{"name":"name_source_scope","type_names":["<a href=\"/www/doc.html#class=Lava.scope.PropertyBinding\">Lava.scope.PropertyBinding</a>","<a href=\"/www/doc.html#class=Lava.scope.DataBinding\">Lava.scope.DataBinding</a>"]}],"param_names_string":"name_source_scope","returns":{"type_names":["<a href=\"/www/doc.html#class=Lava.scope.Segment\">Lava.scope.Segment</a>"]},"description":"<p>Get a <a href=\"/www/doc.html#class=Lava.scope.Segment\">Lava.scope.Segment</a>, which is bound to property of the value of this container</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Refreshable","descriptors":[{"name":"debugAssertClean","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"description":"<p>Internal debug assertion, called to verify that the scope does not need to be refreshed</p>\n","is_inherited":true},{"name":"doRefresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"refresh_id","description":"<p>The id of current refresh loop</p>\n","type_names":["number"]},{"name":"is_safe","description":"<p>Internal switch used to control infinite refresh loop exceptions</p>\n","is_optional":true,"type_names":["boolean"]}],"param_names_string":"refresh_id, is_safe","returns":{"description":"<p><span class=\"api-keyword\">true</span> in case of infinite loop, and <span class=\"api-keyword\">false</span> in case of normal refresh</p>\n","type_names":["boolean"]},"description":"<p>Called by <a href=\"/www/doc.html#object=Lava.ScopeManager\">Lava.ScopeManager</a> during refresh loop</p>\n","is_inherited":true},{"name":"isWaitingRefresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"returns":{"type_names":["boolean"]},"description":"<p>Get <code>_waits_refresh</code></p>\n","is_inherited":true},{"name":"suspendRefreshable","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"description":"<p>Cancel the current refresh ticket and ignore next refresh cycle. Does not destroy the Refreshable instance</p>\n","is_inherited":true},{"name":"_onDependencyRefreshed","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"function","is_from_mixin":true,"description":"<p>Listens to the <a href=\"/www/doc.html#class=Lava.mixin.Refreshable;event=refreshed\">refreshed</a> event of it&#39;s dependencies</p>\n","is_inherited":true},{"name":"_onDependencyWaitsRefresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"function","is_from_mixin":true,"description":"<p>Listens to the <a href=\"/www/doc.html#class=Lava.mixin.Refreshable;event=waits_refresh\">waits_refresh</a> event of it&#39;s dependencies (other Refreshable instances)</p>\n","is_inherited":true},{"name":"_queueForRefresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"function","is_from_mixin":true,"description":"<p>Ensure that this scope will participate in the next refresh cycle</p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true},{"name":"_addListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The owner of the callback</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments</p>\n","type_names":["*"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"event_name, fn, context, listener_args, listeners_by_event","returns":{"description":"<p>Listener structure</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},"description":"<p>Create the listener construct and push it into the listeners array for given event name</p>\n","is_inherited":true},{"name":"_callListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listeners","description":"<p>An array with listener structures</p>\n","type_names":["Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;"]},{"name":"event_args","description":"<p>Dynamic event arguments</p>\n","type_names":["*"]}],"param_names_string":"listeners, event_args","description":"<p>Perform fire - call listeners of an event</p>\n","is_inherited":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true},{"name":"_hasListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]}],"param_names_string":"event_name","returns":{"description":"<p>True, if there are listeners</p>\n","type_names":["boolean"]},"description":"<p>Does this object have any listeners for given event, including suspended instances</p>\n","is_inherited":true},{"name":"_removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc.html#class=Lava.mixin.Observable;member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc.html#class=Lava.mixin.Observable;member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc.html#class=Lava.mixin.Properties;member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"listener, listeners_by_event","description":"<p>Perform removal of the listener structure</p>\n","is_inherited":true}],"is_mixin":true}],"member_chain":[{"class_name":"Lava.scope.PropertyBinding","descriptors":[{"name":"guid","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#object=Support;member=_tGUID\">_tGUID</a>"],"description":"<p>Global unique identifier of this instance</p>\n"},{"name":"isSetValue","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","type_names":["boolean"],"is_constant":true,"description":"<p>This instance supports two-way data binding</p>\n"},{"name":"_assign_argument","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#class=Lava.scope.Argument\">Lava.scope.Argument</a>"],"description":"<p>PropertyBinding supports &quot;assigns&quot; - one-way binding of widget&#39;s property to any <a href=\"/www/doc.html#class=Lava.scope.Argument\">Lava.scope.Argument</a> value</p>\n"},{"name":"_property_changed_listener","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>"],"description":"<p>Listener for onPropertyChanged in bound view</p>\n"},{"name":"_property_name","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["string"],"description":"<p>View&#39;s property name, to which this instance is bound</p>\n"},{"name":"_value","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["*"],"description":"<p>The value of this scope (equals to property value in bound view)</p>\n"},{"name":"_view","belongs":"Lava.scope.PropertyBinding","defined":"Lava.scope.PropertyBinding","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc.html#class=Lava.view.Abstract\">Lava.view.Abstract</a>"],"description":"<p>Scope&#39;s bound view (also the scope&#39;s owner view, which created the instance)</p>\n"}]},{"class_name":"Lava.scope.Abstract","descriptors":[{"name":"isValueContainer","belongs":"Lava.scope.Abstract","defined":"Lava.scope.Abstract","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","type_names":["boolean"],"is_constant":true,"description":"<p>Instance belongs to scope/Abstract</p>\n","is_inherited":true},{"name":"_data_bindings_by_property","belongs":"Lava.scope.Abstract","defined":"Lava.scope.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, <a href=\"/www/doc.html#class=Lava.scope.DataBinding\">Lava.scope.DataBinding</a>&gt;"],"description":"<p>Scopes, bound to properties of the value of this container</p>\n","is_inherited":true},{"name":"_data_segments","belongs":"Lava.scope.Abstract","defined":"Lava.scope.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;<a href=\"/www/doc.html#object=Support;member=_tGUID\">_tGUID</a>, <a href=\"/www/doc.html#class=Lava.scope.Segment\">Lava.scope.Segment</a>&gt;"],"description":"<p>Segments, bound to properties of the value of this container.\n[name_source_guid} =&gt; Segment</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Refreshable","descriptors":[{"name":"level","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"member","is_from_mixin":true,"default_value":0,"type_names":["number"],"description":"<p>Indicates the priority of this scope in the hierarchy. Scopes with lower priority are refreshed first</p>\n","is_inherited":true},{"name":"_count_dependencies_waiting_refresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":0,"type_names":["number"],"description":"<p>Scopes may depend on other scopes. Scope may refresh itself, when all dependencies are up-to-date</p>\n","is_inherited":true},{"name":"_is_dirty","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>Indicates if the scope needs to refresh it&#39;s value (dependencies or bindings have changed)</p>\n","is_inherited":true},{"name":"_last_refresh_id","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":0,"type_names":["number"],"description":"<p>Each time the scope is refreshed - it&#39;s assigned the id of the current refresh loop</p>\n","is_inherited":true},{"name":"_refresh_cycle_count","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":0,"type_names":["number"],"description":"<p>How many times this scope was refreshed during current refresh loop</p>\n","is_inherited":true},{"name":"_refresh_ticket","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">null</span>","type_names":["Object"],"description":"<p>The object, which is given by <a href=\"/www/doc.html#object=Lava.ScopeManager\">Lava.ScopeManager</a> when the scope is added into the refresh queue</p>\n","is_inherited":true},{"name":"_requeue","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>Force delay of refresh after the last dependency has been updated.\nThis flag is set depending on scope configuration</p>\n","is_inherited":true},{"name":"_waits_refresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>Indicates if this scope will participate in the next refresh cycle</p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc.html#object=Support;member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true}],"is_mixin":true}]}