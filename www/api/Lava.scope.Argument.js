var page_json = {"events":[{"description":"<p>Argument&#39;s value has changed</p>\n","name":"changed","params":[{"name":"old_value","description":"<p>Optional: old value of the argument</p>\n","type_names":["*"]}],"longname":"Lava.scope.Argument#event:changed","kind":"event"}],"method_chain":[{"class_name":"Lava.scope.Argument","descriptors":[{"name":"destroy","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":false,"type":"function","description":"<p>Free resources and make this instance unusable</p>\n"},{"name":"getValue","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":false,"type":"function","returns":{"type_names":["*"]},"description":"<p>Get <code>_value</code></p>\n"},{"name":"getWidgetByModifierConfig","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":false,"type":"function","params":[{"name":"path_config","description":"<p>Route to the widget</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_cKnownViewLocator\">_cKnownViewLocator</a>"]}],"param_names_string":"path_config","returns":{"type_names":["<a href=\"/www/doc/class/Lava.widget.Standard.html\">Lava.widget.Standard</a>"]},"description":"<p>Get widget, that will be used to call a modifier</p>\n"},{"name":"init","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":false,"type":"function","params":[{"name":"config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cArgument\">_cArgument</a>"]},{"name":"view","description":"<p>Argument&#39;s view</p>\n","type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"]},{"name":"widget","description":"<p>Nearest widget in hierarchy</p>\n","type_names":["<a href=\"/www/doc/class/Lava.widget.Standard.html\">Lava.widget.Standard</a>"]}],"param_names_string":"config, view, widget","description":"<p>Create an Argument instance. Acquire binds, find modifier sources, apply correct state</p>\n"},{"name":"onBindingChanged","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":false,"type":"function","description":"<p>One of evaluator&#39;s operands has changed. Instance is now dirty</p>\n"},{"name":"_callActiveModifier","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":true,"type":"function","params":[{"name":"index"},{"name":"arguments_array"}],"param_names_string":"index, arguments_array","returns":{"type_names":["*"]},"description":"<p>Alpha. Not used</p>\n"},{"name":"_callGlobalModifier","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":true,"type":"function","params":[{"name":"name","description":"<p>The function&#39;s name</p>\n","type_names":["string"]},{"name":"arguments_array","description":"<p>Evaluator&#39;s arguments</p>\n","is_nullable":true,"type_names":["Array.&lt;*&gt;"]}],"param_names_string":"name, arguments_array","returns":{"type_names":["*"]},"description":"<p>Calls a global function from <a href=\"/www/doc/object/Lava.modifiers.html\">Lava.modifiers</a></p>\n"},{"name":"_callModifier","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":true,"type":"function","params":[{"name":"index","type_names":["number"]},{"name":"arguments_array","is_nullable":true,"type_names":["Array.&lt;*&gt;"]}],"param_names_string":"index, arguments_array","returns":{"type_names":["*"]},"description":"<p>Call a modifier from widget</p>\n"},{"name":"_doRefresh","belongs":"Lava.scope.Argument","defined":"Lava.mixin.Refreshable","is_private":true,"type":"function","description":"<p>Refresh <code>_value</code> and fire <a href=\"/www/doc/class/Lava.scope.Argument.html#event=changed\">changed</a></p>\n<p><b class=\"doc-parent-description-header\">Description from Lava.mixin.Refreshable:</b>\nMust be overridden in classes that implement Refreshable to perform the actual refresh logic</p>\n","is_overridden":true},{"name":"_evaluate","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":true,"type":"function","returns":{"description":"<p>The Argument&#39;s result</p>\n","type_names":["*"]},"description":"<p>Execute <code>_evaluator</code> and return</p>\n"}]},{"class_name":"Lava.mixin.Refreshable","descriptors":[{"name":"debugAssertClean","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"description":"<p>Internal debug assertion, called to verify that the scope does not need to be refreshed</p>\n","is_inherited":true},{"name":"isWaitingRefresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"returns":{"description":"<p><span class=\"api-keyword\">true</span>, if scope is in refresh queue, and <span class=\"api-keyword\">false</span> otherwise</p>\n","type_names":["boolean"]},"description":"<p>Will the scope be refreshed in the next refresh cycle</p>\n","is_inherited":true},{"name":"refresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"refresh_id","description":"<p>The id of current refresh loop</p>\n","type_names":["number"]},{"name":"is_safe","description":"<p>Internal switch used to control infinite refresh loop exceptions</p>\n","is_optional":true,"type_names":["boolean"]}],"param_names_string":"refresh_id, is_safe","returns":{"description":"<p><span class=\"api-keyword\">true</span> in case of infinite loop, and <span class=\"api-keyword\">false</span> in case of normal refresh</p>\n","type_names":["boolean"]},"description":"<p>Called by <a href=\"/www/doc/object/Lava.ScopeManager.html\">Lava.ScopeManager</a> during refresh loop. You should not call this method directly.\nWarning: violates code style with multiple return statements.</p>\n","is_inherited":true},{"name":"suspendRefreshable","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"function","is_from_mixin":true,"description":"<p>Cancel the current refresh ticket and ignore next refresh cycle. Does not destroy the Refreshable instance</p>\n","is_inherited":true},{"name":"_queueForRefresh","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"function","is_from_mixin":true,"description":"<p>Ensure that this scope will participate in the next refresh cycle</p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true},{"name":"_addListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The owner of the callback</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments</p>\n","type_names":["*"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc/class/Lava.mixin.Observable.html#member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc/class/Lava.mixin.Properties.html#member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"event_name, fn, context, listener_args, listeners_by_event","returns":{"description":"<p>Listener structure</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Create the listener construct and push it into the listeners array for given event name</p>\n","is_inherited":true},{"name":"_callListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listeners","description":"<p>An array with listener structures</p>\n","type_names":["Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;"]},{"name":"event_args","description":"<p>Dynamic event arguments</p>\n","type_names":["*"]}],"param_names_string":"listeners, event_args","description":"<p>Perform fire - call listeners of an event</p>\n","is_inherited":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true},{"name":"_hasListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]}],"param_names_string":"event_name","returns":{"description":"<p>True, if there are listeners</p>\n","type_names":["boolean"]},"description":"<p>Does this object have any listeners for given event, including suspended instances</p>\n","is_inherited":true},{"name":"_removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc/class/Lava.mixin.Observable.html#member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc/class/Lava.mixin.Properties.html#member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"listener, listeners_by_event","description":"<p>Perform removal of the listener structure</p>\n","is_inherited":true}],"is_mixin":true}],"member_chain":[{"class_name":"Lava.scope.Argument","descriptors":[{"name":"guid","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/object/Support.html#member=_tGUID\">_tGUID</a>"],"description":"<p>Global unique identifier</p>\n"},{"name":"isValueContainer","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","type_names":["boolean"],"is_constant":true,"description":"<p>Sign that this instance implements <a href=\"/www/doc/object/Support.html#member=_iValueContainer\">_iValueContainer</a></p>\n"},{"name":"_bind_changed_listeners","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;"],"description":"<p>Listeners for <span class=\"api-string\">&quot;changed&quot;</span> events</p>\n"},{"name":"_binds","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;<a href=\"/www/doc/object/Support.html#member=_iValueContainer\">_iValueContainer</a>&gt;"],"description":"<p>Scopes that provide operands for the <code>_evaluator</code></p>\n"},{"name":"_binds_count","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":true,"type":"member","default_value":0,"type_names":["number"],"description":"<p>Length of <code>_binds</code> array</p>\n"},{"name":"_evaluator","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["function"],"description":"<p>Generated method that is called in context of Argument instance and produces the argument&#39;s result</p>\n"},{"name":"_modifier_descriptors","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">[ ]</span>","type_names":["Array.&lt;Object&gt;"],"description":"<p>Objects with a reference to modifier&#39;s widget (it&#39;s cached to speed up calling) and modifier name</p>\n"},{"name":"_view","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"],"description":"<p>Owner view</p>\n"},{"name":"_widget","belongs":"Lava.scope.Argument","defined":"Lava.scope.Argument","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/class/Lava.widget.Standard.html\">Lava.widget.Standard</a>"],"description":"<p>Nearest widget in hierarchy</p>\n"}]},{"class_name":"Lava.mixin.Refreshable","descriptors":[{"name":"isRefreshable","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","type_names":["boolean"],"is_constant":true,"description":"<p>Tell other classes that this instance is inherited from Refreshable</p>\n","is_inherited":true},{"name":"level","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":false,"type":"member","is_from_mixin":true,"default_value":0,"is_readonly":true,"type_names":["number"],"description":"<p>Indicates the priority of this scope in the hierarchy. Scopes with lower priority are refreshed first</p>\n","is_inherited":true},{"name":"_last_refresh_id","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":0,"type_names":["number"],"description":"<p>Each time the scope is refreshed - it&#39;s assigned the id of the current refresh loop</p>\n","is_inherited":true},{"name":"_refresh_cycle_count","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":0,"type_names":["number"],"description":"<p>How many times this scope was refreshed during current refresh loop</p>\n","is_inherited":true},{"name":"_refresh_ticket","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">null</span>","type_names":["Object"],"description":"<p>The object, which is given by <a href=\"/www/doc/object/Lava.ScopeManager.html\">Lava.ScopeManager</a> when the scope is added into the refresh queue</p>\n","is_inherited":true},{"name":"_value","belongs":"Lava.mixin.Refreshable","defined":"Lava.mixin.Refreshable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">null</span>","type_names":["*"],"description":"<p>Scope&#39;s value</p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true}],"is_mixin":true}]}