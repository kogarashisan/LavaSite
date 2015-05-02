var page_json = {"method_chain":[{"class_name":"Lava.view.Include","descriptors":[{"name":"destroy","belongs":"Lava.view.Include","defined":"Lava.view.Abstract","is_private":false,"type":"function","is_overridden":true,"description":"<p>Free resources and make this instance unusable</p>\n"},{"name":"render","belongs":"Lava.view.Include","defined":"Lava.view.Abstract","is_private":false,"type":"function","is_overridden":true,"description":"<p>Render the view, including container and all it&#39;s inner content</p>\n","returns":{"description":"<p>The HTML representation of the view</p>\n","type_names":["string"]}},{"name":"_broadcastToChildren","belongs":"Lava.view.Include","defined":"Lava.view.Abstract","is_private":true,"type":"function","params":[{"name":"function_name","type_names":["string"]}],"param_names_string":"function_name","is_overridden":true,"description":"<p>Execute some state changing function on each child of the view\nMust be overridden in child classes (in those, that have children)</p>\n"},{"name":"_getContent","belongs":"Lava.view.Include","defined":"Lava.view.Include","is_private":true,"type":"function","returns":{"type_names":["<a href=\"/www/doc/class/Lava.system.Template.html\">Lava.system.Template</a>"]},"description":"<p>Get <code>_content</code>. Create, if needed</p>\n"},{"name":"_onValueChanged","belongs":"Lava.view.Include","defined":"Lava.view.Include","is_private":true,"type":"function","description":"<p>Argument&#39;s value has changed. Old content in not valid.</p>\n"},{"name":"_postInit","belongs":"Lava.view.Include","defined":"Lava.view.Abstract","is_private":true,"type":"function","is_overridden":true,"description":"<p>Called before registering roles</p>\n"},{"name":"_refresh","belongs":"Lava.view.Include","defined":"Lava.view.Abstract","is_private":true,"type":"function","is_overridden":true,"description":"<p>Perform refresh</p>\n"},{"name":"_renderContent","belongs":"Lava.view.Include","defined":"Lava.view.Abstract","is_private":true,"type":"function","is_overridden":true,"description":"<p>Render the inner hierarchy</p>\n"}]},{"class_name":"Lava.view.Abstract","descriptors":[{"name":"broadcastInDOM","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","description":"<p>Inform that this view is already in DOM. Now it can access it&#39;s container&#39;s elements</p>\n","is_inherited":true},{"name":"broadcastRemove","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","description":"<p>Inform that this view is now going to be removed from DOM. It must suspend it&#39;s bindings,\ndetach element listeners and stop animations, etc.</p>\n","is_inherited":true},{"name":"evalPathConfig","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"path_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cScopeLocator\">_cScopeLocator</a>"]}],"param_names_string":"path_config","returns":{"type_names":["*"]},"description":"<p>Get value of the route without creating scopes</p>\n","is_inherited":true},{"name":"getContainer","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","returns":{"type_names":["<a href=\"/www/doc/object/Support.html#member=_iContainer\">_iContainer</a>"]},"description":"<p>Get <code>_container</code></p>\n","is_inherited":true},{"name":"getDataBinding","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"property_name","type_names":["string"]}],"param_names_string":"property_name","returns":{"type_names":["<a href=\"/www/doc/class/Lava.scope.PropertyBinding.html\">Lava.scope.PropertyBinding</a>"]},"description":"<p>Get a binding to this view&#39;s property</p>\n","is_inherited":true},{"name":"getParentView","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","returns":{"type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"]},"description":"<p>Get <code>_parent_view</code></p>\n","is_inherited":true},{"name":"getParentWithContainer","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","returns":{"type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"]},"description":"<p>Get <code>_parent_with_container</code></p>\n","is_inherited":true},{"name":"getScopeByPathConfig","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"path_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cScopeLocator\">_cScopeLocator</a>"]}],"param_names_string":"path_config","returns":{"type_names":["<a href=\"/www/doc/object/Support.html#member=_iValueContainer\">_iValueContainer</a>"]},"description":"<p>Get a scope or property binding by the given route</p>\n","is_inherited":true},{"name":"getSegment","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"name_source_scope","type_names":["<a href=\"/www/doc/class/Lava.scope.PropertyBinding.html\">Lava.scope.PropertyBinding</a>","<a href=\"/www/doc/class/Lava.scope.DataBinding.html\">Lava.scope.DataBinding</a>"]}],"param_names_string":"name_source_scope","returns":{"type_names":["<a href=\"/www/doc/class/Lava.scope.Segment.html\">Lava.scope.Segment</a>"]},"description":"<p>Get a <a href=\"/www/doc/class/Lava.scope.Segment.html\">Lava.scope.Segment</a>, bound to view&#39;s property</p>\n","is_inherited":true},{"name":"getTemplate","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","returns":{"type_names":["<a href=\"/www/doc/class/Lava.system.Template.html\">Lava.system.Template</a>"]},"description":"<p>Get <code>_template</code></p>\n","is_inherited":true},{"name":"getViewByDepth","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"depth","description":"<p>The number of view&#39;s parent you want to get</p>\n","type_names":["number"]}],"param_names_string":"depth","returns":{"type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"]},"description":"<p>Get N&#39;th parent of the view</p>\n","is_inherited":true},{"name":"getWidget","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","returns":{"type_names":["<a href=\"/www/doc/class/Lava.widget.Standard.html\">Lava.widget.Standard</a>"]},"description":"<p>Get <code>_widget</code></p>\n","is_inherited":true},{"name":"init","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cView\">_cView</a>"]},{"name":"widget","type_names":["<a href=\"/www/doc/class/Lava.widget.Standard.html\">Lava.widget.Standard</a>"]},{"name":"parent_view","type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"]},{"name":"template","type_names":["<a href=\"/www/doc/class/Lava.system.Template.html\">Lava.system.Template</a>"]},{"name":"properties","type_names":["Object"]}],"param_names_string":"config, widget, parent_view, template, properties","description":"<p>Create an instance of the view, including container and assigns; dispatch roles</p>\n","is_inherited":true},{"name":"isInDOM","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","returns":{"type_names":["boolean"]},"description":"<p>Get <code>_is_inDOM</code></p>\n","is_inherited":true},{"name":"locateViewByGuid","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"guid","type_names":["<a href=\"/www/doc/object/Support.html#member=_tGUID\">_tGUID</a>"]}],"param_names_string":"guid","returns":{"type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"]},"description":"<p>Get a view by GUID</p>\n","is_inherited":true},{"name":"locateViewById","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"id","type_names":["string"]}],"param_names_string":"id","returns":{"type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"]},"description":"<p>Get a view with given user-defined id</p>\n","is_inherited":true},{"name":"locateViewByLabel","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"label","description":"<p>Label to search for</p>\n","type_names":["string"]}],"param_names_string":"label","returns":{"description":"<p>View with given label</p>\n","type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"]},"description":"<p>Find a view with given label in hierarchy of view&#39;s parents. Recognizes some predefined labels, like:</p>\n<ul>\n<li>&quot;root&quot; - the root widget (topmost widget with no parents)</li>\n<li>&quot;parent&quot; - this view&#39;s parent view</li>\n<li>&quot;widget&quot; - parent widget of this view</li>\n<li>&quot;this&quot; - this view</li>\n</ul>\n","is_inherited":true},{"name":"locateViewByName","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"name","description":"<p>Name of the widget</p>\n","type_names":["string"]}],"param_names_string":"name","returns":{"type_names":["<a href=\"/www/doc/class/Lava.widget.Standard.html\">Lava.widget.Standard</a>"]},"description":"<p>Find a <b>widget</b> with given name in hierarchy of this view&#39;s parents</p>\n","is_inherited":true},{"name":"locateViewByPathConfig","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"path_config","type_names":["<a href=\"/www/doc/object/Support.html#member=_cScopeLocator\">_cScopeLocator</a>","<a href=\"/www/doc/object/Support.html#member=_cKnownViewLocator\">_cKnownViewLocator</a>"]}],"param_names_string":"path_config","returns":{"type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"]},"description":"<p>Find a view in hierarchy of parents by the given route</p>\n","is_inherited":true},{"name":"locateViewWithProperty","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"name","type_names":["string"]}],"param_names_string":"name","returns":{"type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"]},"description":"<p>Get a parent with property <code>name</code> defined</p>\n","is_inherited":true},{"name":"refresh","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","param_names_string":"refresh_id","description":"<p>Refresh the view, if it&#39;s dirty (render the view&#39;s content and replace old content with the fresh version).\nThis method is called by ViewManager, you should not call it directly.</p>\n<p>Warning: violates code style with multiple return statements</p>\n","is_inherited":true},{"name":"setId","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","params":[{"name":"new_id","type_names":["string"]}],"param_names_string":"new_id","description":"<p>Setter for the <a href=\"/www/doc/class/Lava.view.Abstract.html#member=id\">Abstract#id</a> property</p>\n","is_inherited":true},{"name":"trySetDirty","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"function","description":"<p>This view needs to be refreshed. If it has a container - then it can refresh itself independently,\nbut views without container must ask their parents to refresh them</p>\n","is_inherited":true},{"name":"_initMembers","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"function","params":[{"name":"properties","type_names":["Object"]}],"param_names_string":"properties","description":"<p>Set properties, that were passed to constructor</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Properties","descriptors":[{"name":"firePropertyChangedEvents","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>The name of the changed property</p>\n","type_names":["string"]}],"param_names_string":"property_name","description":"<p>Fire the &#39;property_changed&#39; event for Observable interface, and Properties&#39; native <a href=\"/www/doc/class/Lava.mixin.Properties.html#member=onPropertyChanged\">Properties#onPropertyChanged</a> event</p>\n","is_inherited":true},{"name":"get","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]}],"param_names_string":"name","returns":{"description":"<p>Property value</p>\n","type_names":["*"]},"description":"<p>Get property</p>\n","is_inherited":true},{"name":"getProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"returns":{"description":"<p>Copy of <code>_properties</code> object</p>\n","type_names":["Object.&lt;name, *&gt;"]},"description":"<p>Return a copy of the properties hash</p>\n","is_inherited":true},{"name":"isset","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]}],"param_names_string":"name","returns":{"description":"<p>True, if property exists</p>\n","type_names":["boolean"]},"description":"<p>Returns <span class=\"api-keyword\">true</span> if property exists, even if it&#39;s null/undefined</p>\n","is_inherited":true},{"name":"onPropertyChanged","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>Name of the property to listen for changes</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>May be usable when one callback responds to changes of different properties</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"property_name, fn, context, listener_args","returns":{"description":"<p>Listener construct, which may be removed or suspended later</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>The same, as <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a>, but returns listener to <code>property_name</code> instead of <code>event_name</code></p>\n","is_inherited":true},{"name":"removePropertyListener","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>The listener structure, returned from <a href=\"/www/doc/class/Lava.mixin.Properties.html#member=onPropertyChanged\">Properties#onPropertyChanged</a></p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Removes listeners added with <a href=\"/www/doc/class/Lava.mixin.Properties.html#member=onPropertyChanged\">Properties#onPropertyChanged</a></p>\n","is_inherited":true},{"name":"set","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]},{"name":"value","description":"<p>New property value</p>\n","type_names":["*"]}],"param_names_string":"name, value","description":"<p>Set property</p>\n","is_inherited":true},{"name":"setProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"properties_object","description":"<p>A hash with new property values</p>\n","type_names":["Object.&lt;string, *&gt;"]}],"param_names_string":"properties_object","description":"<p>Set multiple properties at once</p>\n","is_inherited":true},{"name":"_firePropertyChanged","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"property_name","description":"<p>Name of the changed property</p>\n","type_names":["string"]}],"param_names_string":"property_name","description":"<p>Same as <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=_fire\">Observable#_fire</a>, but for property listeners</p>\n","is_inherited":true},{"name":"_set","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"name","description":"<p>Property name</p>\n","type_names":["string"]},{"name":"value","description":"<p>New property value</p>\n","type_names":["*"]}],"param_names_string":"name, value","description":"<p>Perform the set operation</p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"on","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>Name of the event to listen to</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The context for callback execution (an object, to which the callback belongs)</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments. May be usable when one callback responds to different events</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, fn, context, listener_args","returns":{"description":"<p>Listener structure, which later may be suspended, or removed via call to <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=removeListener\">Observable#removeListener</a></p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Add listener for event <code>event_name</code></p>\n","is_inherited":true},{"name":"removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]}],"param_names_string":"listener","description":"<p>Remove the given listener object from event listeners array</p>\n","is_inherited":true},{"name":"_addListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"fn","description":"<p>The callback</p>\n","type_names":["function"]},{"name":"context","description":"<p>The owner of the callback</p>\n","type_names":["Object"]},{"name":"listener_args","description":"<p>Static listener arguments</p>\n","type_names":["*"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc/class/Lava.mixin.Observable.html#member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc/class/Lava.mixin.Properties.html#member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"event_name, fn, context, listener_args, listeners_by_event","returns":{"description":"<p>Listener structure</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},"description":"<p>Create the listener construct and push it into the listeners array for given event name</p>\n","is_inherited":true},{"name":"_callListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listeners","description":"<p>An array with listener structures</p>\n","type_names":["Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;"]},{"name":"event_args","description":"<p>Dynamic event arguments</p>\n","type_names":["*"]}],"param_names_string":"listeners, event_args","description":"<p>Perform fire - call listeners of an event</p>\n","is_inherited":true},{"name":"_fire","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]},{"name":"event_args","description":"<p>Dynamic event arguments. Anything, that may be needed by listener</p>\n","is_optional":true,"type_names":["*"]}],"param_names_string":"event_name, event_args","description":"<p>Fire an event</p>\n","is_inherited":true},{"name":"_hasListeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"event_name","description":"<p>The name of event</p>\n","type_names":["string"]}],"param_names_string":"event_name","returns":{"description":"<p>True, if there are listeners</p>\n","type_names":["boolean"]},"description":"<p>Does this object have any listeners for given event, including suspended instances</p>\n","is_inherited":true},{"name":"_removeListener","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"function","is_from_mixin":true,"params":[{"name":"listener","description":"<p>Structure, which was returned by <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=on\">Observable#on</a> method</p>\n","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"]},{"name":"listeners_by_event","description":"<p><a href=\"/www/doc/class/Lava.mixin.Observable.html#member=_listeners\">Observable#_listeners</a> or <a href=\"/www/doc/class/Lava.mixin.Properties.html#member=_property_listeners\">Properties#_property_listeners</a></p>\n","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"]}],"param_names_string":"listener, listeners_by_event","description":"<p>Perform removal of the listener structure</p>\n","is_inherited":true}],"is_mixin":true}],"member_chain":[{"class_name":"Lava.view.Include","descriptors":[{"name":"_argument","belongs":"Lava.view.Include","defined":"Lava.view.Include","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/class/Lava.scope.Argument.html\">Lava.scope.Argument</a>"],"description":"<p>Argument that returns a template config</p>\n"},{"name":"_argument_changed_listener","belongs":"Lava.view.Include","defined":"Lava.view.Include","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>"],"description":"<p>Listener for <a href=\"/www/doc/class/Lava.scope.Argument.html#event=changed\">changed</a></p>\n"},{"name":"_content","belongs":"Lava.view.Include","defined":"Lava.view.Include","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/class/Lava.system.Template.html\">Lava.system.Template</a>"],"description":"<p>Child template</p>\n"}]},{"class_name":"Lava.view.Abstract","descriptors":[{"name":"depth","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"member","default_value":0,"is_readonly":true,"type_names":["number"],"description":"<p>How many parents does it have (until the root widget, which does not have a parent)</p>\n","is_inherited":true},{"name":"guid","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","is_readonly":true,"type_names":["<a href=\"/www/doc/object/Support.html#member=_tGUID\">_tGUID</a>"],"description":"<p>Global unique identifier</p>\n","is_inherited":true},{"name":"id","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","is_nullable":true,"is_readonly":true,"type_names":["string"],"description":"<p>Global unique user-assigned view&#39;s ID. Views can be retrieved by their ID from <a href=\"/www/doc/class/Lava.system.ViewManager.html\">Lava.system.ViewManager</a>;\nand referenced in expressions. Note: this is not the same as &quot;id&quot; attribute of DOM element of view&#39;s container.</p>\n<p>Do not set this property directly! Use appropriate setter.</p>\n","is_inherited":true},{"name":"isView","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">true</span>","type_names":["boolean"],"is_constant":true,"description":"<p>Indicate that this class is instance of Lava.view.Abstract</p>\n","is_inherited":true},{"name":"label","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","is_nullable":true,"is_readonly":true,"type_names":["string"],"description":"<p>Labels are used to find views when routing events and roles, or manually.\nLabel is part of template config, so must be considered readonly</p>\n","is_inherited":true},{"name":"template_index","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":false,"type":"member","default_value":0,"is_readonly":true,"type_names":["number"],"description":"<p>View&#39;s index in <a href=\"/www/doc/class/Lava.system.Template.html#member=_content\">_content</a> array of parent template</p>\n","is_inherited":true},{"name":"_config","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/object/Support.html#member=_cView\">_cView</a>"],"description":"<p>Settings for this instance</p>\n","is_inherited":true},{"name":"_container","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/object/Support.html#member=_iContainer\">_iContainer</a>"],"description":"<p>View&#39;s container</p>\n","is_inherited":true},{"name":"_data_segments","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;<a href=\"/www/doc/object/Support.html#member=_tGUID\">_tGUID</a>, <a href=\"/www/doc/class/Lava.scope.Segment.html\">Lava.scope.Segment</a>&gt;"],"description":"<p>Segments, built over bindings to properties of this view (see <a href=\"/www/doc/class/Lava.scope.Segment.html\">Lava.scope.Segment</a>)</p>\n","is_inherited":true},{"name":"_is_dirty","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>Does this view need refresh</p>\n","is_inherited":true},{"name":"_is_inDOM","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>Is this view currently in DOM</p>\n","is_inherited":true},{"name":"_is_queued_for_refresh","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">false</span>","type_names":["boolean"],"description":"<p>Will it be refreshed by ViewManager</p>\n","is_inherited":true},{"name":"_last_refresh_id","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":0,"type_names":["number"],"description":"<p>Each time the view is refreshed - it&#39;s assigned the id of the current refresh loop</p>\n","is_inherited":true},{"name":"_parent_view","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"],"description":"<p>The owner (parent) view of this instance</p>\n","is_inherited":true},{"name":"_parent_with_container","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/class/Lava.view.Abstract.html\">Lava.view.Abstract</a>"],"description":"<p>Nearest parent view with it&#39;s own container</p>\n","is_inherited":true},{"name":"_property_bindings_by_property","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, <a href=\"/www/doc/class/Lava.scope.PropertyBinding.html\">Lava.scope.PropertyBinding</a>&gt;"],"description":"<p>Bindings to properties of this view</p>\n","is_inherited":true},{"name":"_refresh_cycle_count","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":0,"type_names":["number"],"description":"<p>How many times this view was refreshed during current refresh loop.\nUsed for infinite loops protection.</p>\n","is_inherited":true},{"name":"_template","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","description":"<p>The <a href=\"/www/doc/class/Lava.system.Template.html\">Lava.system.Template</a> that owns the view</p>\n","is_inherited":true},{"name":"_widget","belongs":"Lava.view.Abstract","defined":"Lava.view.Abstract","is_private":true,"type":"member","default_value":"<span class=\"api-keyword\">null</span>","type_names":["<a href=\"/www/doc/class/Lava.widget.Standard.html\">Lava.widget.Standard</a>"],"description":"<p>Nearest widget in hierarchy of view&#39;s parents</p>\n","is_inherited":true}]},{"class_name":"Lava.mixin.Properties","descriptors":[{"name":"isProperties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>To signal other classes that this class implements Properties</p>\n","is_inherited":true},{"name":"_properties","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;name, *&gt;"],"description":"<p>Hash with property values</p>\n","is_inherited":true},{"name":"_property_listeners","belongs":"Lava.mixin.Properties","defined":"Lava.mixin.Properties","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>Separate listeners hash for property changed events, same as <a href=\"/www/doc/class/Lava.mixin.Observable.html#member=_listeners\">Observable#_listeners</a></p>\n","is_inherited":true}],"is_mixin":true},{"class_name":"Lava.mixin.Observable","descriptors":[{"name":"isObservable","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":false,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-keyword\">true</span>","is_constant":true,"description":"<p>Indicates that this class is inherited from Observable and supports events</p>\n","is_inherited":true},{"name":"_listeners","belongs":"Lava.mixin.Observable","defined":"Lava.mixin.Observable","is_private":true,"type":"member","is_from_mixin":true,"default_value":"<span class=\"api-highlight-empty\">{ }</span>","type_names":["Object.&lt;string, Array.&lt;<a href=\"/www/doc/object/Support.html#member=_tListener\">_tListener</a>&gt;&gt;"],"description":"<p>The hash of listeners for each event</p>\n","is_inherited":true}],"is_mixin":true}],"events":[{"description":"<p>View has been destroyed and became unusable. You must not call any methods of a destroyed instance</p>\n","name":"destroy","longname":"Lava.view.Abstract#event:destroy","kind":"event"},{"description":"<p>Property has changed</p>\n","name":"property_changed","params":[{"name":"name","description":"<p>The name of the changed property</p>\n","type_names":["string"]}],"longname":"Lava.mixin.Properties#event:property_changed","kind":"event"}]}